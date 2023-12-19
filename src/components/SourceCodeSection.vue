<template>
  <section id="source-code" class="flex flex-col w-full h-[100vh] relative">
    <div class="h-[100vh] w-full" id="canvas-container">
      <canvas class="w-1/2 h-[100vh] absolute left-1/2" id="canvas" ref="canvas"></canvas>
    </div>
    <div
      class="absolute inset-0 bg-gradient-to-r from-transparent to-black mix-blend-multiply"
    ></div>
    <div
      class="h-[50vh] w-full will-change-auto flex flex-col bg-transparent justify-center relative"
      id="sourcecode"
    >
      <div
        class="h-[50vh] w-full items-center justify-center flex flex-col gap-6 z-10"
        id="sc-container"
      >
        <!-- Title -->
        <h1 class="font-sans text-[#008b8b] text-2xl top-1/3">SOURCE CODE</h1>
        <!-- Description -->
        <p class="font-sans text-white text-center" style="font-size: calc(10px + 0.5vw)">
          Embark on an extraordinary journey into the heart of this portfolio's creation,<br />
          where every line of code was meticulously crafted with passion and dedication. <br />
          Unveil the inner workings, explore the intricacies, and uncover the essence of its beauty.
          <br />
          Click below to delve into the source code and unravel the story behind this digital
          masterpiece. <br />
          Click to view the source code:
        </p>
        <!-- Button -->
        <a
          class="button-link w-fit"
          style="background-color: #8b0000; border-color: #8b0000"
          href="https://github.com/alexxirou/portofolio-JS-CSS"
        >
          Show me
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      // Canvas and context variables
      canvas: null as HTMLCanvasElement | null,
      ctx: null as CanvasRenderingContext2D | null,
      c: null as CanvasRenderingContext2D | null,

      // Font settings
      fontHeight: 14,
      fontFamily: 'Meiryo, monospace',

      // Characters
      numbers: '0123456789',
      operators: '#+-\\/|=',
      katakana:
        'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲ',
      hiragana:
        'あいうえおかきくけこがぎぐげごさしすせそざじずぜぞtたちつてとだぢづでどなにぬねのはひふへほばびぶべぼぱぴぷぺぽまみむめもやゆよらりるれろわゐゑをん',
      alphabet: '',

      // Animation settings
      spawnInterval: 500,
      density: 0.7,
      glitchInterval: 500,
      glitchAmount: 0.01,
      moveScale: 0.012,
      speedBase: 1.0,
      speedDeviation: 0.4,
      streaks: 1.9,
      brightRatio: 0.1,

      // Trail data
      universe: [] as { glyph: string; flipped: boolean; bright: boolean; }[] | Object[],

      w: null as number | null,
      h: null as number | null,
      charHeight: null as number | null,
      colWidth: null as number | null,
      colsPerLine: null as number | null,
      charsOnCol: null as number | null,
      trails: [] as any[],
      lastTime: null as number | null
    }
  },

  mounted() {
    // Initialize glitch animation
    this.initGlitch()
  },

  methods: {
    /**
     * Initialize glitch animation.
     */
    initGlitch() {
      // Get canvas and context
      this.canvas = this.$refs.canvas as HTMLCanvasElement
      this.c = this.canvas.getContext('2d') as CanvasRenderingContext2D

      // Combine all characters
      this.alphabet = this.numbers + this.operators + this.katakana + this.hiragana

      // Set canvas dimensions
      this.setCanvasExtents()

      // Update canvas dimensions on window resize
      window.addEventListener('resize', () => {
        this.setCanvasExtents()
      })

      // Animation loop
      const update = (time: number): void => {
        const dt = this.lastTime != null ? time - this.lastTime : 0
        this.lastTime = time

        this.clear()
        this.moveTrails(dt * this.moveScale)
        this.spawnTrails()

        // Draw trails
        for (let i = 0; i < this.trails.length; i++) {
          this.drawTrail(this.trails[i])
        }

        requestAnimationFrame(update)
      }

      // Initialize time and start animation
      this.lastTime = performance.now()
      update(this.lastTime)
    },

    /**
     * Set canvas dimensions.
     */
    setCanvasExtents() {
      // Set canvas dimensions
      this.w = document.body.clientWidth
      this.h = document.body.clientHeight
      if (this.canvas) {
        this.canvas.width = this.w
        this.canvas.height = this.h
      }

      // Set font properties
      if (!this.c) {
        return
      }
      this.c.font = this.fontHeight + 'px ' + this.fontFamily
      this.c.textBaseline = 'top'

      // Calculate character size
      const charSize = this.c.measureText('ネ')

      // Set column width and character height
      this.colWidth = charSize.width * 1.15
      this.charHeight = this.fontHeight * 1.15

      // Calculate number of characters on each column
      this.charsOnCol = Math.ceil(this.h / this.charHeight)
      if (this.charsOnCol <= 0) {
        this.charsOnCol = 1
      }

      // Calculate number of columns per line
      this.colsPerLine = Math.ceil(this.w / this.colWidth)
      if (this.colsPerLine <= 0) {
        this.colsPerLine = 1
      }

      // Initialize universe

      this.universe = this.makeUniverse(1000)
    },

    /**
     * Generate a universe of random glyphs.
     * @param {number} size - The size of the universe.
     * @returns {Array} - The generated universe.
     */
    makeUniverse(size: number): object[] {
      const out: object[] = []
      for (let i = 0; i < size; i++) {
        out.push(this.randomGlyph())
      }
      return out
    },

    /**
     * Generate a random glyph.
     * @returns {Object} - The generated glyph object.
     */
    randomGlyph(): object {
      return {
        glyph: this.alphabet[Math.floor(Math.random() * this.alphabet.length)],
        flipped: Math.random() < 0.5,
        bright: Math.random() < this.brightRatio
      }
    },

    /**
     * Create a trail with random parameters.
     * @param {number} col - The column of the trail.
     * @param {number|null} maxSpeed - The maximum speed of the trail.
     * @param {number|null} headAt - The starting position of the trail's head.
     * @returns {Object} - The created trail object.
     */
    makeTrail(col: number, maxSpeed: number | null = null, headAt: number | null = null): object {
      let speed: number | null =
        this.speedBase + (Math.random() * this.speedDeviation * 2 - this.speedDeviation) || 0

      if ((maxSpeed ?? 0) > 0 && speed > (maxSpeed ?? 0)) {
        speed = maxSpeed
      }

      if (headAt == null) {
        headAt = -Math.floor(Math.random() * 2 * (this.charsOnCol || 1))
      }

      return {
        col: col,
        universeAt: Math.floor(Math.random() * this.universe.length),
        headAt: headAt,
        speed: speed,
        length: Math.floor(Math.random() * this.streaks * (this.charsOnCol || 1)) + 8
      }
    },

    /**
     * Clear the canvas.
     */
    clear() {
      if (!this.c || !this.canvas) {
        return
      }
      this.c.fillStyle = 'black'
      this.c.fillRect(0, 0, this.canvas.width, this.canvas.height)
    },

    /**
     * Draw a trail on the canvas.
     * @param {Object} trail - The trail object to be drawn.
     */
    drawTrail(trail: {
      col: number
      universeAt: number
      headAt: number
      speed: number
      length: number
    }) {
      // Round the head position to the nearest integer.
      const head = Math.round(trail.headAt)

      // If the head position is less than 0, return early.
      if (head < 0 || !this.colWidth || !this.charHeight) return

      // Calculate the x position based on the column width.
      const x = trail.col * this.colWidth

      // Calculate the initial y position based on the head position and character height.
      let y = head * this.charHeight + this.charHeight * 0.35

      // Loop through each item in the trail and draw it on the canvas.
      for (let i = 0; i < trail.length; i++, y -= this.charHeight) {
        // If the y position is less than 0, break out of the loop.
        if (y < 0) break
        if (!this.h) return
        // If the y position is greater than the canvas height, skip drawing the item.
        if (y > this.h) continue

        // Calculate the index of the item based on the universe position and head position.
        const idx = (trail.universeAt + head - i) % this.universe.length

        // Get the item from the universe based on the index.
        const item = this.universe[idx]
        if (!this.c) return
        // Set the fill style based on the item index.
        if (i < 4) {
          this.c.fillStyle = ['#FFFFFF', '#F0F0F0', '#C0C0C0', '#808080'][i]
        } else if (trail.length - i - 1 < 4) {
          this.c.fillStyle = ['#333333', '#666666', '#999999', '#CCCCCC'][trail.length - i - 1]
        } else {
          if ('bright' in item) {
            this.c.fillStyle = '#333333'
          } else {
            this.c.fillStyle = 'gray'
          }
        }

        // If the item is flipped, apply a transformation to flip the canvas horizontally.
        if('flipped' in item && 'glyph' in item) {
        if (item.flipped && item.glyph) {
          this.c.setTransform(-1, 0, 0, 1, 0, 0)
          this.c.fillText(item.glyph, -x - this.colWidth, y)
          this.c.setTransform(1, 0, 0, 1, 0, 0)
        } else {
          // Draw the item on the canvas at the calculated x and y positions.
          this.c.fillText(item.glyph, x, y)
        }
        }
      }
    },

    /**
     * Moves the trails by a given distance.
     *
     * @param {number} distance - The distance to move the trails.
     */
    moveTrails(distance: number | null) {
      // Array to store indices of trails to remove
      const trailsToRemove: number[]  = []

      // Get the count of trails
      const count = this.trails.length

      // Iterate over each trail
      for (let i = 0; i < count; i++) {
        // Get the current trail
        const trail: { headAt: number; length: number; speed: number } = this.trails[i]

        // Move the trail's head based on speed and distance

        trail.headAt += trail.speed * (distance ?? 1)

        // Calculate the tip of the trail
        const tip = trail.headAt - trail.length

        // Check if the trail is outside the visible area
        if (!this.charHeight || !this.h) return
        if (tip * this.charHeight < 0 || tip * this.charHeight > this.h) {
          // Add the index of the trail to the remove list
          trailsToRemove.push(i as number)
        }
      }

      // Remove the trails that are outside the visible area
      while (trailsToRemove.length > 0) {
        this.trails.splice(trailsToRemove.pop()!, 1)
      }
    },

    /**
     * Spawn new trails based on the density and spawn interval.
     */
    spawnTrails() {
      // Create an array to store the top trail for each column
      const topTrailPerCol: { headAt: number; length: number; speed: number }[] = []

      // Loop through each trail
      for (let i = 0; i < this.trails.length; i++) {
        const trail: { headAt: number; length: number; speed: number; col: number } = this.trails[i]
        const trailTop = trail.headAt - trail.length

        // Check if there is already a top trail for the column
        const top: { headAt: number; length: number; speed: number } = topTrailPerCol[trail.col]

        // If there is no top trail for the column, or the current trail is higher than the top trail,
        // update the topTrailPerCol array with the current trail
        if (!top || top.headAt - top.length > trailTop) {
          topTrailPerCol[trail.col] = trail
        }
      }

      // Loop through each column
      if(!this.colsPerLine) return
      for (let col = 0; col < this.colsPerLine; col++) {
        const top = topTrailPerCol[col]

        // If there is no top trail for the column, or the top trail is far enough ahead,
        // create a new trail and add it to the trails array
        if(!this.charsOnCol) return
        if (!top || top.headAt - top.length * 2 > this.charsOnCol) {
          // Calculate the maximum speed for the new trail
          const maxSpeed =
            top && top.headAt - top.length * 2 > this.charsOnCol * 2 ? top.speed : null

          // Create a new trail and add it to the trails array
          const trail= this.makeTrail(col, maxSpeed)
          this.trails.push(trail)
        }
      }
    }
  }
}
</script>
