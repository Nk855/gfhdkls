function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  appendMessage("user", message);
  input.value = "";

  // Simulated bot response
  setTimeout(() => {
    const response = getBotResponse(message);
    appendMessage("bot", response);
  }, 500);
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  const msg = input.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello! How can I help you today?";
  } else if (msg.includes("how are you")) {
    return "I'm just a bunch of code, but I'm doing great!";
  } else if (msg.includes("bye")) {
    return "Goodbye! Have a nice day!";
  } else {
    return "Sorry, I didn't understand that.";
  }
}
