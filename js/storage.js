const CHAVE_CHAMADOS = "chamados";

function obterChamados() {
  try {
    const chamados = JSON.parse(localStorage.getItem(CHAVE_CHAMADOS));
    return Array.isArray(chamados) ? chamados : [];
  } catch {
    return [];
  }
}
