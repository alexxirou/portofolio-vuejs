<template>
  <!-- Vue transition for fade effect -->
  <transition name="fade" mode="out-in">
    <!-- Contact section -->
    <section v-if="notSent" class="bg-black w-full h-[80vh] flex flex-col  items-center justify-center " id="contact">
      <!-- Contact heading -->
      <h1 class=" text-[#008b8b] font-sans text-2xl pb-4">Contact</h1>

      <!-- Contact form wrapper -->
      <div class="flex justify-center w-1/2 items-center">
        <!-- Contact form -->
        <form ref="contactForm" class="flex flex-col items-center w-1/2 min-w-[400px] "  @submit.prevent="submitForm">
          <!-- Name input field -->
          <div class="w-5/6 m-0">
            <div class="col-sm-16">
              <input
                v-model="formData.name"
                type="text"
                class="w-full bg-black text-white border-2 border-white rounded-lg h-8 mb-3 tracking-wide"
                placeholder="NAME"
                name="name"
                required
              />
            </div>
          </div>

          <!-- Email input field -->
          <div class="w-5/6 m-0">
            <div class="col-sm-16">
              <input
                v-model="formData.email"
                type="email"
                class="w-full bg-black text-white border-2 border-white rounded-lg h-8 mb-3 tracking-wide"
                placeholder="EMAIL"
                name="email"
                required
              />
            </div>
          </div>

          <!-- Message textarea -->
          <textarea
            v-model="formData.message"
            class="w-full bg-black text-white border-2 border-white rounded-lg mb-3 tracking-wide"
            rows="15"
            placeholder="MESSAGE"
            name="message"
            required
          ></textarea>

          <!-- Submit button -->
          <button
            class="border-white border-solid border-[3px] h-[50px] w-5/6  text-lg text-white main-button-style-ex"
            type="submit"
            value="SEND"
          >
            <div class="alt-send-button">
              <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
            </div>
          </button>
        </form>
      </div>
    </section>

    <!-- Response section -->
    <section v-else-if="notSent === false" class="bg-black full-screen flex-center" id="contact">
      <div class="flex flex-col gap-5 justify-center items-center">
        <!-- Error response -->
        <div v-if="success === false" class="flex flex-col justify-center items-center">
          <img src="../assets/images/error.gif" alt="error" class="p-5 w-full select-none" />
          <h1 class="font-sans text-white text-5xl pb-5">Oops!</h1>
          <span class="font-sans text-white text-md">An error has occurred while trying to send your email.</span>
          <span class="font-sans text-white text-md">Please try again later.</span>
        </div>

        <!-- Success response -->
        <div v-else-if="success === true" class="flex flex-col justify-center items-center">
          <i class="fa fa-envelope pb-[10%] text-[250px] text-white  select-none"></i>
          <span class="font-sans text-white text-md">Your Mail was sent successfully!</span>
          <span class="font-sans text-white text-md">Press the button to go back.</span>
        </div>

        <!-- Go back button -->
        <button class="button-link text-white font-sans text-md h-auto" @click="resetForm">
          Go back
        </button>
      </div>
    </section>
  </transition>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

// Define a reactive ref for the form data
const formData = ref({
  name: '',
  email: '',
  message: '',
});

// Define reactive refs for tracking the email sending status
const notSent = ref(true);
const success = ref(false);
const responseData = ref(null);

/**
 * Sends an email using the provided data.
 * 
 * @param {object} data - The data to be sent in the email.
 * @returns {Promise} - A promise that resolves to the response from the server.
 * @throws {Error} - If an error occurs during the request.
 */
const sendEmail = async (data) => {
  try {
    // Get the CSRF token from the document
    const csrfToken = document.querySelector("[name=csrf-token]").content;

    // Set the CSRF token in the request headers
    axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;

    // Send a POST request to the server to send the email
    const response = await axios.post("https://verbumsap.xyz/contact_mailer/send_email", data);
    
    // Log the success message and update the response data ref
    console.log(response.data.message); // Email sent successfully
    responseData.value = response.data.message;

    return response;
  } catch (error) {
    // Log and rethrow the error to be caught in the calling function
    console.error(error);
    throw error;
  }
};

/**
 * Submits the form data by sending an email.
 */
const submitForm = async () => {
  // Create a FormData object and append the form data to it
  const formDataObj = new FormData();
  formDataObj.append('name', formData.value.name);
  formDataObj.append('email', formData.value.email);
  formDataObj.append('message', formData.value.message);

  try {
    // Send the email with the form data
    await sendEmail(formDataObj);

    // Update the success status
    success.value = true;
  } catch (error) {
    console.log(success.value);
    console.log(notSent.value);
  }

  // Update the notSent status
  notSent.value = false;
};

/**
 * Resets the form fields and sets the notSent status to true.
 */
const resetForm = () => {
  formData.value = { name: '', email: '', message: '' };
  notSent.value = true;
  success.value = false;
};
</script>
<style scoped>
/* Animation styles for fade in and fade out */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}




/* Styles for response container */
.response-container {
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Styles for success and failure messages */
.success-inner,
.failure-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>