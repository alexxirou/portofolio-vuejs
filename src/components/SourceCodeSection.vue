📝 Copy Code ➕ Insert Code
<template>
  <section id="source-code" class="full-screen flex-center">
    <div id="canvas-container">
      <canvas id="canvas" ref="canvas"></canvas>
    </div>
    <div class="half-section main-banner bg-transparent flex-center" id="sourcecode">
      <div id="sc-container">
        <!-- Title -->
        <h1 class="front font-roboto-16-white" style="color: #008b8b; font-size: 24px">
          SOURCE CODE
        </h1>
        <!-- Description -->
        <p
          class="front font-roboto-16-white"
          style="text-align: center; font-size: calc(10px + 0.5vw)"
        >
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
          class="front button-link"
          style="background-color: #8b0000; border-color: #8b0000; width: fit-content"
          href="https://github.com/alexxirou/portofolio-JS-CSS"
        >
          Show me
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // Canvas and context variables
      canvas: null,
      c: null,

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
      universe: [],
      w: null,
      h: null,
      charHeight: null,
      colWidth: null,
      colsPerLine: null,
      charsOnCol: null,
      trails: [],
      lastTime: null
    }
  },

  mounted() {
    // Initialize glitch animation
    this.initGlitch()
  },

  methods: {
    /**
     * Initialize glitch animation
     */
    initGlitch() {
      // Get canvas and context
      this.canvas = this.$refs.canvas
      this.c = this.canvas.getContext('2d')

      // Combine all characters
      this.alphabet = this.numbers + this.operators + this.katakana + this.hiragana

      // Set canvas dimensions
      this.setCanvasExtents()

      // Update canvas dimensions on window resize
      window.addEventListener('resize', () => {
        this.setCanvasExtents()
      })

      // Animation loop
      const update = (time) => {
        const dt = time - this.lastTime
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

    setCanvasExtents() {
      // Set canvas dimensions
      this.w = document.body.clientWidth
      this.h = document.body.clientHeight
      this.canvas.width = this.w
      this.canvas.height = this.h

      // Set font properties
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
    makeUniverse(size) {
      const out = []
      for (let i = 0; i < size; i++) {
        out.push(this.randomGlyph())
      }
      return out
    },

    /**
     * Generate a random glyph.
     * @returns {Object} - The generated glyph object.
     */
    randomGlyph() {
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
    makeTrail(col, maxSpeed = null, headAt = null) {
      let speed = this.speedBase + (Math.random() * this.speedDeviation * 2 - this.speedDeviation)

      if (maxSpeed > 0 && speed > maxSpeed) {
        speed = maxSpeed
      }

      if (headAt == null) {
        headAt = -Math.floor(Math.random() * 2 * this.charsOnCol)
      }

      return {
        col: col,
        universeAt: Math.floor(Math.random() * this.universe.length),
        headAt: headAt,
        speed: speed,
        length: Math.floor(Math.random() * this.streaks * this.charsOnCol) + 8
      }
    },

    /**
     * Clear the canvas.
     */
    clear() {
      this.c.fillStyle = 'black'
      this.c.fillRect(0, 0, this.canvas.width, this.canvas.height)
    },

    /**
     * Draw a trail on the canvas.
     * @param {Object} trail - The trail object to be drawn.
     */
    drawTrail(trail) {
      // Round the head position to the nearest integer.
      const head = Math.round(trail.headAt)

      // If the head position is less than 0, return early.
      if (head < 0) return

      // Calculate the x position based on the column width.
      const x = trail.col * this.colWidth

      // Calculate the initial y position based on the head position and character height.
      let y = head * this.charHeight + this.charHeight * 0.35

      // Loop through each item in the trail and draw it on the canvas.
      for (let i = 0; i < trail.length; i++, y -= this.charHeight) {
        // If the y position is less than 0, break out of the loop.
        if (y < 0) break

        // If the y position is greater than the canvas height, skip drawing the item.
        if (y > this.h) continue

        // Calculate the index of the item based on the universe position and head position.
        const idx = (trail.universeAt + head - i) % this.universe.length

        // Get the item from the universe based on the index.
        const item = this.universe[idx]

        // Set the fill style based on the item index.
        if (i < 4) {
          this.c.fillStyle = ['#FFFFFF', '#F0F0F0', '#C0C0C0', '#808080'][i]
        } else if (trail.length - i - 1 < 4) {
          this.c.fillStyle = ['#333333', '#666666', '#999999', '#CCCCCC'][trail.length - i - 1]
        } else {
          if (item.bright) {
            this.c.fillStyle = '#333333'
          } else {
            this.c.fillStyle = 'gray'
          }
        }

        // If the item is flipped, apply a transformation to flip the canvas horizontally.
        if (item.flipped) {
          this.c.setTransform(-1, 0, 0, 1, 0, 0)
          this.c.fillText(item.glyph, -x - this.colWidth, y)
          this.c.setTransform(1, 0, 0, 1, 0, 0)
        } else {
          // Draw the item on the canvas at the calculated x and y positions.
          this.c.fillText(item.glyph, x, y)
        }
      }
    },

    /**
     * Moves the trails by a given distance.
     *
     * @param {number} distance - The distance to move the trails.
     */
    moveTrails(distance) {
      // Array to store indices of trails to remove
      const trailsToRemove = []

      // Get the count of trails
      const count = this.trails.length

      // Iterate over each trail
      for (let i = 0; i < count; i++) {
        // Get the current trail
        const trail = this.trails[i]

        // Move the trail's head based on speed and distance
        trail.headAt += trail.speed * distance

        // Calculate the tip of the trail
        const tip = trail.headAt - trail.length

        // Check if the trail is outside the visible area
        if (tip * this.charHeight > this.h) {
          // Add the index of the trail to the remove list
          trailsToRemove.push(i)
        }
      }

      // Remove the trails that are outside the visible area
      while (trailsToRemove.length > 0) {
        this.trails.splice(trailsToRemove.pop(), 1)
      }
    },
    spawnTrails() {
      // Create an array to store the top trail for each column
      const topTrailPerCol = []

      // Loop through each trail
      for (let i = 0; i < this.trails.length; i++) {
        const trail = this.trails[i]
        const trailTop = trail.headAt - trail.length

        // Check if there is already a top trail for the column
        const top = topTrailPerCol[trail.col]

        // If there is no top trail for the column, or the current trail is higher than the top trail,
        // update the topTrailPerCol array with the current trail
        if (!top || top.headAt - top.length > trailTop) {
          topTrailPerCol[trail.col] = trail
        }
      }

      // Loop through each column
      for (let col = 0; col < this.colsPerLine; col++) {
        const top = topTrailPerCol[col]

        // If there is no top trail for the column, or the top trail is far enough ahead,
        // create a new trail and add it to the trails array
        if (!top || top.headAt - top.length * 2 > this.charsOnCol) {
          // Calculate the maximum speed for the new trail
          const maxSpeed =
            top && top.headAt - top.length * 2 > this.charsOnCol * 2 ? top.speed : null

          // Create a new trail and add it to the trails array
          const trail = this.makeTrail(col, maxSpeed)
          this.trails.push(trail)
        }
      }
    }
  }
}
</script>

<style scoped>
/* Main banner styles */
.main-banner {
  flex-direction: column;
}

/* Canvas container styles */
#canvas-container {
  height: 100%;
}

/* Canvas styles */
#canvas {
  width: 50%;
  height: 100vh;
  left: 50%;
  position: absolute;
}

/* Half section styles */
.half-section {
  will-change: auto;
  position: relative;
  width: 100vw;
  height: 100%;
}

/* Half section background gradient */
.half-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  z-index: 1;
}

/* SC container styles */
#sc-container {
  display: flex;
  flex-direction: column;
  z-index: 1;
  gap: 20px;
  align-items: center;
}
</style>
