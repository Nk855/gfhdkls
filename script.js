// script.js

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chat-box");

  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.textContent = "You: " + message;
  chatBox.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "bot-message";
  botMsg.textContent = "Bot: " + generateBotResponse(message);
  chatBox.appendChild(botMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotResponse(userInput) {
  // Simple mock response logic
  if (userInput.toLowerCase().includes("hello")) {
    return "Hello! How can I help you today?";
  } else if (userInput.toLowerCase().includes("bye")) {
    return "Goodbye!";
  } else {
    return "I’m just a simple bot. Try saying hello!";
  }
}
