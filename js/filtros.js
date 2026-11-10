const ROTULOS_STATUS = {
  aberto: "Aberto",
  "em-atendimento": "Em atendimento",
  resolvido: "Resolvido",
};

const ROTULOS_PRIORIDADE = {
  baixa: "Baixa",
  media: "Média",
  alta: "Alta",
};

function lerChamados() {
  try {
    const chamados = JSON.parse(localStorage.getItem("chamados"));
    return Array.isArray(chamados) ? chamados : [];
  } catch (erro) {
    return [];
  }
}

// Remove acentos e maiúsculas para que "manutencao" encontre "Manutenção".
function normalizarTexto(texto) {
  return String(texto ?? "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

function filtrarChamados(chamados, filtros) {
  const busca = normalizarTexto(filtros.busca);

  return chamados.filter((chamado) => {
    const textoDoChamado = normalizarTexto(
      [chamado.id, chamado.titulo, chamado.solicitante, chamado.descricao].join(" ")
    );

    const atendeBusca = textoDoChamado.includes(busca);
    const atendeStatus = !filtros.status || chamado.status === filtros.status;
    const atendePrioridade =
      !filtros.prioridade || chamado.prioridade === filtros.prioridade;

    return atendeBusca && atendeStatus && atendePrioridade;
  });
}

function aplicarFiltros() {
  const filtros = {
    busca: document.getElementById("busca-chamados").value,
    status: document.getElementById("filtro-status").value,
    prioridade: document.getElementById("filtro-prioridade").value,
  };

  const chamadosFiltrados = filtrarChamados(lerChamados(), filtros);

  // A listagem escuta este evento para redesenhar a tabela.
  document.dispatchEvent(
    new CustomEvent("chamados:filtrados", { detail: { chamados: chamadosFiltrados } })
  );
}

const formularioFiltros = document.getElementById("filtros-chamados");

formularioFiltros.addEventListener("submit", (evento) => {
  evento.preventDefault();
  aplicarFiltros();
});
formularioFiltros.addEventListener("input", aplicarFiltros);
formularioFiltros.addEventListener("change", aplicarFiltros);

aplicarFiltros();
