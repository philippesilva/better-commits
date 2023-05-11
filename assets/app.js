const icons = {
  feat: "✨",
  fix: "🐛",
  docs: "📚",
  refactor: "🔨",
  perf: "🚀erf",
  test: "🚨",
  build: "🚧",
  ci: "🤖",
  chore: "🧹",
  style: "💅",
};

function setClipboard() {
  const messageToClipboard = document.querySelector("#message");

  // Select the text field
  messageToClipboard.select();
  messageToClipboard.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(messageToClipboard.value);
}

function createMessage(obj) {
  const breakLine = "\n\n";

  const text = {
    type: obj.type,
    icon: obj.addEmoji ? ` ${icons[obj.type]} ` : "",
    subject: obj.subject,
    scope: obj.scope === "" ? "" : `(${obj.scope})`,
    body: obj.body === "" ? "" : `${breakLine}${obj.body}`,
    footer: obj.footer === "" ? "" : `${breakLine}${obj.footer}`,
  };

  const message = `${text.type}${text.scope}:${text.icon} ${text.subject}${text.body}${text.footer}`;

  return message.trim();
}

function setView(message) {
  document.querySelector("#message").value = message;
}

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  var formData = new FormData(e.target);
  const obj = Object.fromEntries(formData);

  const message = createMessage(obj);

  setView(message);
  setClipboard();
});
