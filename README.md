<div align="center">

# Sistema de Chamados de TI

Aplicação web para registrar e acompanhar solicitações de suporte técnico.

<p>
  <img alt="Status" src="https://img.shields.io/badge/status-em%20desenvolvimento-f59e0b?style=for-the-badge">
  <img alt="Projeto Integrador" src="https://img.shields.io/badge/projeto-integrador-0B5CAD?style=for-the-badge">
  <img alt="Etapa 2" src="https://img.shields.io/badge/etapa%202-desenvolvimento-7c3aed?style=for-the-badge">
</p>

Projeto Integrador de **Boas Práticas de Desenvolvimento de Software**  
Análise e Desenvolvimento de Sistemas — Senac

</div>

## Sobre

O projeto surgiu da necessidade de organizar solicitações de suporte de TI que muitas vezes são feitas por mensagens, ligações ou diretamente para a equipe responsável.

A proposta é reunir essas solicitações em uma aplicação web onde seja possível cadastrar e acompanhar chamados, visualizar sua prioridade e atualizar o andamento do atendimento.

A primeira etapa do Projeto Integrador foi dedicada ao planejamento. Nesta segunda etapa, o grupo está desenvolvendo a aplicação.

## Funcionalidades

A primeira versão prevê:

- cadastro de chamados;
- listagem e consulta;
- edição e exclusão;
- prioridade baixa, média ou alta;
- status aberto, em atendimento ou resolvido;
- pesquisa e filtros;
- registro de prazo para atendimento.

O fluxo principal será:

```text
Novo chamado
    ↓
Armazenamento
    ↓
Consulta
    ↓
Atendimento
    ↓
Resolvido
```

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| HTML5 | Estrutura das páginas |
| CSS3 | Interface |
| JavaScript | Funcionalidades e regras da aplicação |
| LocalStorage | Armazenamento dos chamados no navegador |
| Git e GitHub | Versionamento e colaboração |

Nesta versão não será utilizado backend. Os registros serão armazenados no `localStorage` do navegador.

Por isso, os dados ficam associados ao navegador e ao endereço em que a aplicação está sendo executada e não são compartilhados automaticamente entre diferentes usuários ou dispositivos.

## Como executar

O projeto não exige instalação de dependências.

Clone o repositório:

```bash
git clone https://github.com/rafaelcairess/sistema-chamados-ti.git
```

Entre na pasta:

```bash
cd sistema-chamados-ti
```

Depois, abra o arquivo `index.html` no navegador.

Durante o desenvolvimento também pode ser utilizado um servidor local, como o Live Server do Visual Studio Code.

## Estrutura

A estrutura poderá mudar conforme o desenvolvimento avançar.

```text
sistema-chamados-ti/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── storage.js
│   └── validation.js
├── assets/
├── docs/
├── CONTRIBUTING.md
└── README.md
```

## Equipe

| Integrante | GitHub | Responsabilidade |
| --- | --- | --- |
| Antonio Agricola Dorneles | A definir | A definir |
| Sheila Cristina Zanin | [@sheilazanin-png](https://github.com/sheilazanin-png) | Listagem dos chamados |
| Igor Fagundes Batista | A definir | Testes e validações |
| Herica Franklin Ramalho | A definir | Documentação |
| Vitor Hugo Benatti Pedrassolli | A definir | A definir |
| Mateus Malezan Tasquetto | [@mateustasquetto](https://github.com/mateustasquetto) | Cadastro de chamados |
| Rafael Pereira Caires Pires | [@rafaelcairess](https://github.com/rafaelcairess) | HTML, CSS e GitHub |
| João Vitor Oliveira Goncalves | A definir | Status, prioridade e filtros |

As responsabilidades e os perfis do GitHub serão atualizados conforme os demais integrantes enviarem suas informações.

## Divisão da Etapa 2

A implementação foi dividida em áreas para facilitar o desenvolvimento em grupo.

| Área | Responsável |
| --- | --- |
| HTML e CSS | Rafael Pereira Caires Pires |
| Cadastro | Mateus Malezan Tasquetto |
| Listagem | Sheila Cristina Zanin |
| Edição e exclusão | A definir |
| Status, prioridade e filtros | João Vitor Oliveira Goncalves |
| Testes e validações | Igor Fagundes Batista |
| Documentação | Herica Franklin Ramalho |
| Organização do GitHub | Rafael Pereira Caires Pires |

A divisão poderá ser ajustada conforme o desenvolvimento e a disponibilidade dos integrantes.

## Integração entre as partes

- Mateus deve utilizar `#form-chamado` para o cadastro.
- Sheila deve utilizar `#lista-chamados` e `#modelo-linha-chamado` para a listagem.
- João deve utilizar `#busca-chamados`, `#filtro-status` e `#filtro-prioridade` para os filtros.
- O arquivo `js/storage.js` centraliza o acesso ao `localStorage` e fornece `obterChamados()`.
- Os filtros disparam o evento `chamados:filtrados` com a lista em `evento.detail.chamados`.
- A edição deve utilizar `data-action="editar"` e `#cancelar-edicao`.
- A exclusão deve utilizar `data-action="excluir"` e `#confirmacao-exclusao`.
- Igor deve utilizar os campos com `required` e as mensagens `.form-field__error` para as validações.

## Andamento

### Etapa 1

- [x] Definição do tema
- [x] Definição do problema
- [x] Objetivo do sistema
- [x] Levantamento das funcionalidades
- [x] Escolha das tecnologias
- [x] Planejamento da implementação
- [x] Primeira entrega

### Etapa 2

- [ ] Estrutura HTML
- [ ] Interface CSS
- [ ] Cadastro de chamados
- [ ] Armazenamento com LocalStorage
- [ ] Listagem dos chamados
- [ ] Edição e exclusão
- [ ] Status, prioridade e filtros
- [ ] Validações
- [ ] Testes
- [ ] Captura das telas
- [ ] Documentação final
- [ ] Revisão do projeto
- [ ] Segunda entrega

## Testes

Durante o desenvolvimento serão verificados os principais fluxos da aplicação.

| Teste | Resultado esperado |
| --- | --- |
| Cadastro de chamado | O chamado deve ser salvo e exibido |
| Campos obrigatórios vazios | O cadastro deve ser bloqueado |
| Listagem | Os chamados salvos devem ser exibidos |
| Edição | As alterações devem permanecer salvas |
| Exclusão | O chamado deve ser removido |
| Alteração de prioridade | A nova prioridade deve permanecer salva |
| Alteração de status | O novo status deve permanecer salvo |
| Pesquisa e filtros | Apenas os chamados correspondentes devem ser exibidos |

Os resultados serão registrados quando os testes forem realizados.

## Documentação

Os materiais de planejamento e desenvolvimento ficam na pasta [`docs`](docs/).

- [Etapa 1](docs/etapa-1.md)
- [Requisitos](docs/requisitos.md)
- [Planejamento](docs/planejamento.md)
- [Decisões do projeto](docs/decisoes.md)
