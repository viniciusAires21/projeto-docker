const botao = document.querySelector("#botao");
const titulo = document.querySelector("#titulo");
const texto = document.querySelector("#texto");
const audio = document.querySelector("#audio");

botao.addEventListener("click", async () => {
  const valorTitulo = titulo.value;
  const valorTexto = texto.value;

  const data = { titulo: valorTitulo, texto: valorTexto };
  audio.innerHTML = `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
  await fetch(`http://localhost:3000/audio`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.status)
    .then((res) => {
      if (res === 200) {
        audio.innerHTML = `<audio id="audio" controls>
          <source src="${valorTitulo}.mp3" type="audio/mpeg" />
        </audio>`;
      }
    });
});
