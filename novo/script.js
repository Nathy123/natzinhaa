
function sim() {
  window.location.href = "pagina2.html";
}

function desvia(btn) {
  const largura = window.innerWidth - btn.offsetWidth;
  const altura = window.innerHeight - btn.offsetHeight;
  const novaEsquerda = Math.random() * largura;
  const novaTopo = Math.random() * altura;

  btn.style.position = "absolute";
  btn.style.left = novaEsquerda + "px";
  btn.style.top = novaTopo + "px";
}

const btnNao = document.getElementById("nao");

btnNao.addEventListener("mouseover", () => desvia(btnNao));     
btnNao.addEventListener("touchstart", (e) => {                   
  e.preventDefault();
  desvia(btnNao);
});
