
async function askQuestion() {
  const input = document.getElementById("questionInput").value;
  const responseBox = document.getElementById("responseBox");

  responseBox.innerText = "Consultando IA...";
  try {
    const res = await fetch("https://nelorebovi-backend.onrender.com/?pergunta=" + encodeURIComponent(input));
    const data = await res.json();
    responseBox.innerText = data.message || JSON.stringify(data);
  } catch (error) {
    responseBox.innerText = "Erro ao consultar a IA: " + error;
  }
}
