const modal = document.querySelector(".modal-container");
const tbody = document.querySelector("tbody");
const sNome = document.querySelector("#m-nome");
const sEmpresa = document.querySelector("#m-empresa");
const sContato = document.querySelector("#m-contato");
const sCPF = document.querySelector("#m-cpf");
const sCidade = document.querySelector("#m-cidade");
const btnSalvar = document.querySelector("#btnSalvar");

let itens;
let id;

function openModal(edit = false, index = 0) {
  modal.classList.add("active");

  modal.onclick = (e) => {
    if (e.target.className.indexOf("modal-container") !== -1) {
      modal.classList.remove("active");
    }
  };

  if (edit) {
    sNome.value = itens[index].nome;
    sEmpresa.value = itens[index].empresa;
    sContato.value = itens[index].contato;
    sCPF.value = itens[index].cpf;
    sCidade.value = itens[index].cidade;
    id = index;
  } else {
    sNome.value = "";
    sEmpresa.value = "";
    sContato.value = "";
    sCPF.value = "";
    sCidade.value = "";
  }
}

function editItem(index) {
  openModal(true, index);
}

function deleteItem(index) {
  itens.splice(index, 1);
  setItensBD();
  loadItens();
}

function insertItem(item, index) {
  let tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.empresa}</td>
    <td>${item.contato}</td>
    <td>${item.cpf}</td>
    <td>${item.cidade}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `;
  tbody.appendChild(tr);
}

btnSalvar.onclick = (e) => {
  if (
    sNome.value == "" ||
    sEmpresa.value == "" ||
    sContato.value == "" ||
    sCPF.value == "" ||
    sCidade.value == ""
  ) {
    return;
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value;
    itens[id].empresa = sEmpresa.value;
    itens[id].contato = sContato.value;
    itens[id].cpf = sCPF.value;
    itens[id].cidade = sCidade.value;
  } else {
    itens.push({
      nome: sNome.value,
      empresa: sEmpresa.value,
      contato: sContato.value,
      cpf: sCPF.value,
      cidade: sCidade.value,
    });
  }

  setItensBD();

  modal.classList.remove("active");
  loadItens();
  id = undefined;
};

function loadItens() {
  itens = getItensBD();
  tbody.innerHTML = "";
  itens.forEach((item, index) => {
    insertItem(item, index);
  });
}

const getItensBD = () => JSON.parse(localStorage.getItem("dbfunc")) ?? [];
const setItensBD = () => localStorage.setItem("dbfunc", JSON.stringify(itens));

loadItens();
