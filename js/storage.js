
const CHAVE_CHAMADOS = "chamados";

function obterChamados() {
  try {
    const chamados = JSON.parse(localStorage.getItem(CHAVE_CHAMADOS));
    return Array.isArray(chamados) ? chamados : [];
  } catch (erro) {
    return [];
  }
}

function salvarChamados(chamados) {
  localStorage.setItem(CHAVE_CHAMADOS, JSON.stringify(chamados));
}

function adicionarChamado(novoChamado) {
  const chamados = obterChamados();
  chamados.unshift(novoChamado);
  salvarChamados(chamados);
  return novoChamado;
}
