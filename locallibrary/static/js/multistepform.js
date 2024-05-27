// JavaScript for Multi-Step Form

// Initialize current question index
let currentQuestionIndex = 0;

// Get all questions
const questions = document.querySelectorAll('.question');

// Function to show next question
function nextQuestion() {
  // Hide current question
  questions[currentQuestionIndex].classList.remove('current-question');

  // Increment current question index
  currentQuestionIndex++;

  // Show next question
  if (currentQuestionIndex < questions.length) {
    questions[currentQuestionIndex].classList.add('current-question');
  } else {
    // If no more questions, submit form
    submitForm();
  }
  
  // Prevent default behavior of the button
  event.preventDefault();
}

// Function to submit form (placeholder)
function submitForm() {
  // Placeholder code to submit form data
  alert('Form submitted successfully!');
  
  // Prevent default behavior of the button
  event.preventDefault();
}
