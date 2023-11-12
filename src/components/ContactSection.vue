<template>
  <!-- Vue transition for fade effect -->
  <transition name="fade" mode="out-in">
    <!-- Contact section -->
    <section v-if="notSent" class="bg-black full-screen flex-center" id="contact">
      <!-- Contact heading -->
      <h1 class="front font-roboto-16-white" style="color: #008b8b; font-size: 24px;">Contact</h1>

      <!-- Contact form wrapper -->
      <div class="contact-wrapper">
        <!-- Contact form -->
        <form ref="contactForm" class="form-horizontal" style="text-align: center;" @submit.prevent="submitForm">
          <!-- Name input field -->
          <div class="form-group">
            <div class="col-sm-16">
              <input
                v-model="formData.name"
                type="text"
                class="form-control"
                placeholder="NAME"
                name="name"
                required
              />
            </div>
          </div>

          <!-- Email input field -->
          <div class="form-group">
            <div class="col-sm-16">
              <input
                v-model="formData.email"
                type="email"
                class="form-control"
                placeholder="EMAIL"
                name="email"
                required
              />
            </div>
          </div>

          <!-- Message textarea -->
          <textarea
            v-model="formData.message"
            class="form-control"
            rows="15"
            placeholder="MESSAGE"
            name="message"
            required
          ></textarea>

          <!-- Submit button -->
          <button
            class="main-button font-roboto-16-white bg-transparent"
            id="contact-button"
            style="width: 80%;"
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
      <div class="response-container">
        <!-- Error response -->
        <div v-if="success === false" class="failure-inner">
          <img src="../assets/images/error.gif" alt="error" style="width: 150%; padding-bottom: 10%" />
          <h1 class="font-roboto-16-white bg" style="font-size: 40PX;">Oops!</h1>
          <span class="font-roboto-16-white bg">An error has occurred while trying to send your email.</span>
          <span class="font-roboto-16-white bg">Please try again later.</span>
        </div>

        <!-- Success response -->
        <div v-else-if="success === true" class="success-inner">
          <i class="fa fa-envelope" style="font-size: 250px; color: white; padding-bottom: 10%;"></i>
          <span class="font-roboto-16-white bg">Your Mail was sent successfully!</span>
          <span class="font-roboto-16-white bg">Press the button to go back.</span>
        </div>

        <!-- Go back button -->
        <button class="button-link font-roboto-16-white bg-transparent" id="contact-button" style="height: auto" @click="resetForm">
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

/* Contact section styles */
#contact {
  flex-direction: column;
  position: relative;
}

/* Wrapper for contact elements */
.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  width: 50%;
}

/* Styles for left contact page */
.form-horizontal {
  width: 50%;
  font-family: 'Lato';
  font-weight: 400;
  min-width: 400px;
}

/* Styles for name and email inputs */
.name,
.email {
  height: 100px;
}

/* Styles for form groups */
.form-group {
  width: 85%;
  margin: auto;
}

/* Styles for form controls and textarea */
.form-control,
textarea {
  width: 100%;
  background-color: #000;
  color: #fff;
  letter-spacing: 1px;
  border-radius: 6px;
  margin-bottom: 10px;
  border-style: solid 3px white;
  font-size: 16px;
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