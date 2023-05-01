const types = {
  feat: "✨ feat",
  fix: "🐛 fix",
  docs: "📚 docs",
  refactor: "🔨 refactor",
  perf: "🚀 perf",
  test: "🚨 test",
  build: "🚧 build",
  ci: "🤖 ci",
  chore: "🧹 chore",
};

function setClipboard() {
  const messageToClipboard = document.querySelector("#message");

  // Select the text field
  messageToClipboard.select();
  messageToClipboard.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(messageToClipboard.value);
}

function setView(obj) {
  const breakLine = "\n\n";

  const text = {
    type: types[obj.type],
    scope: obj.scope === "" ? "" : `(${obj.scope})`,
    body: obj.body === "" ? "" : `${breakLine}${obj.body}`,
    footer: obj.footer === "" ? "" : `${breakLine}${obj.footer}`,
  };

  const messageToHtml = `${text.type}${text.scope}: ${obj.subject}${text.body}${text.footer}`;

  document.querySelector("#message").value = messageToHtml.trim();
}

function getData(form) {
  var formData = new FormData(form);

  const obj = Object.fromEntries(formData);

  setView(obj);
  setClipboard();
}

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  getData(e.target);
});
