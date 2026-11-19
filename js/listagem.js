
/*
 * SISTEMA DE CHAMADOS DE TI
 * Responsável: Sheila Cristina Zanin
 * Funcionalidade: Listagem de chamados
 */

document.addEventListener("DOMContentLoaded", () => {

  // Localiza os elementos da tabela
  const listaChamados = document.getElementById("lista-chamados");
  const modeloLinha = document.getElementById("modelo-linha-chamado");

  // Confere se a tabela e o modelo existem
  if (!listaChamados || !modeloLinha) {
    console.error("Não foi possível encontrar a tabela de chamados.");
    return;
  }

  // Rótulos para exibição
  const rotulosStatus = {
    aberto: "Aberto",
    "em-atendimento": "Em atendimento",
    resolvido: "Resolvido"
  };

  const rotulosPrioridade = {
    baixa: "Baixa",
    media: "Média",
    alta: "Alta"
  };

  // Função que desenha os chamados na tabela
  function renderizarChamados(chamados) {

    // Limpa a tabela antes de atualizar
    listaChamados.replaceChildren();

    // Exibe mensagem caso não existam chamados
    if (!Array.isArray(chamados) || chamados.length === 0) {

      const linhaVazia = document.createElement("tr");
      const colunaVazia = document.createElement("td");

      colunaVazia.colSpan = 5;
      colunaVazia.className = "tickets-table__empty";
      colunaVazia.textContent = "Nenhum chamado cadastrado.";

      linhaVazia.appendChild(colunaVazia);
      listaChamados.appendChild(linhaVazia);

      return;
    }

    // Percorre os chamados cadastrados
    chamados.forEach((chamado) => {

      // Cria uma cópia do modelo HTML
      const linha = modeloLinha.content.firstElementChild.cloneNode(true);

      // Identifica o chamado pelo ID
      linha.dataset.id = chamado.id;

      // Preenche o número do chamado
      linha.querySelector(".ticket-number").textContent = chamado.id;

      // Preenche o título
      linha.querySelector(".ticket-title").textContent = chamado.titulo;

      // Preenche a prioridade
      const prioridade = linha.querySelector("[data-prioridade]");

      prioridade.textContent =
        rotulosPrioridade[chamado.prioridade] || chamado.prioridade || "-";

      prioridade.dataset.prioridade = chamado.prioridade || "";

      // Preenche o status
      const status = linha.querySelector("[data-status]");

      status.textContent =
        rotulosStatus[chamado.status] || chamado.status || "-";

      status.dataset.status = chamado.status || "";

      // Adiciona a linha à tabela
      listaChamados.appendChild(linha);
    });
  }

  // Atualiza a tabela quando os filtros forem utilizados
  document.addEventListener("chamados:filtrados", (evento) => {
    renderizarChamados(evento.detail.chamados);
  });

  // Carrega os chamados salvos no LocalStorage
  renderizarChamados(obterChamados());

});
