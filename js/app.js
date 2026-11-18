document.addEventListener("DOMContentLoaded", () => {
  const formChamado = document.getElementById("form-chamado");
  if (!formChamado) return;

  formChamado.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const idInput = document.getElementById("id-chamado").value;
    const titulo = document.getElementById("titulo").value.trim();
    const solicitante = document.getElementById("solicitante").value.trim();
    const categoria = document.getElementById("categoria").value;
    const prioridade = document.getElementById("prioridade").value;
    const prazo = document.getElementById("prazo").value;
    const descricao = document.getElementById("descricao").value.trim();

    if (!titulo || !solicitante || !categoria || !prioridade || !descricao) {
      return;
    }

    const chamado = {
      id: idInput ? Number(idInput) : Date.now(),
      titulo,
      solicitante,
      categoria,
      prioridade,
      prazo: prazo || "",
      descricao,
      status: "aberto",
      dataCriacao: new Date().toISOString(),
    };

    adicionarChamado(chamado);

    formChamado.reset();
    document.getElementById("id-chamado").value = "";

    if (typeof aplicarFiltros === "function") {
      aplicarFiltros();
    }

    document.dispatchEvent(
      new CustomEvent("chamado:cadastrado", { detail: { chamado } })
    );

    const secaoChamados = document.getElementById("chamados");
    if (secaoChamados) {
      secaoChamados.scrollIntoView({ behavior: "smooth" });
    }
  });
});
