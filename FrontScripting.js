document.getElementById('send-btn').addEventListener('click', function() { 
  const userInput = document.getElementById('user-input').value.trim();
  const chatHistory = document.getElementById('chat-history');

  // Prevent empty messages
  if (!userInput) return;

  // Add user message to chat history
  chatHistory.innerHTML += `<div class="message user">User: ${userInput}</div>`;

  // URL validation function
  function isValidURL(str) {
      const pattern = /^(https?:\/\/)?([\w\d\-]+\.)+[\w]{2,}(\/.*)?$/i;
      return pattern.test(str);
  }

  // Determine chatbot response based on link validity
  let botResponse;
  if (isValidURL(userInput)) {
      botResponse = "✅ This link is safe."; // Replace with an actual API response
  } else {
      botResponse = "⚠️ This is not a valid link.";
  }

  chatHistory.innerHTML += `<div class="message bot">Chatbot: ${botResponse}</div>`;

  // Scroll to the latest message
  chatHistory.scrollTop = chatHistory.scrollHeight;

  // Clear input box
  document.getElementById('user-input').value = '';
});
