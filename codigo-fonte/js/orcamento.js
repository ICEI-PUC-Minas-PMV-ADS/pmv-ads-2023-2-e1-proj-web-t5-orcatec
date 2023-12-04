// function createBudget() {
//   event.preventDefault();
//   let quantity = document.getElementById("quantity-input");
//   let id;
//   let productName = document.getElementById("product-name-budget-input").value;
//   let unitPrice = document.getElementById("unit-price-budget-input").value;
//   let totalPrice = document.getElementById("total-price-budget-input").value;
//   let budgetValue = document.getElementById("amount-budget-input").value;

//   if (!productName || productName === "") {
//     return alert("O nome do produto deve ser informado.");
//   }

//   if (!unitPrice || unitPrice <= 0) {
//     return alert("O valor unitário do produto deve ser informado.");
//   }

//   if (!totalPrice || totalPrice <= 0) {
//     return alert("O valor total do produto deve ser informado.");
//   }

//   if (!budgetValue || budgetValue <= 0) {
//     return alert("O valor total do orçamento deve ser informado.");
//   }

//   var orcamentos = JSON.parse(localStorage.getItem("orcamentos")) || [];
//   var newOrcamentos = JSON.parse(localStorage.getItem("newOrcamentos")) || 0;

//   let dateFormatted = new Date();
//   let day = String(dateFormatted.getDate()).padStart(2, '0');
//   let month = String(dateFormatted.getMonth() + 1).padStart(2, '0');
//   let year = dateFormatted.getFullYear();
//   let novadata = `${day}/${month}/${year}`
//   const newBudget = {
//     productName: productName,
//     unitPrice: parseFloat(unitPrice),
//     totalPrice: parseFloat(totalPrice),
//     budgetValue: parseFloat(budgetValue),
//     budgetDate: novadata,
//   };

//   orcamentos.push(newBudget);
//   localStorage.setItem("orcamentos", JSON.stringify(orcamentos));
//   localStorage.setItem("newOrcamentos", newOrcamentos + 1);

//   alert("Orçamento criado.");
//   setTimeout(function () { }, 3000);
//   window.location.href = "dashboard.html";
// }

// function renderizeAllBudgets() {
//   var orcamentos = JSON.parse(localStorage.getItem("orcamentos")) || [];

//   var tabelaOrcamentos = document
//     .getElementById("tabelaOrcamentos")
//     .getElementsByTagName("tbody")[0];

//   tabelaOrcamentos.innerHTML = "";

//   orcamentos.forEach(function (orcamento, index) {
//     var newRow = tabelaOrcamentos.insertRow();

//     var productNameCell = newRow.insertCell(0);
//     var unitPriceCell = newRow.insertCell(1);
//     var totalPriceCell = newRow.insertCell(2);
//     var budgetValueCell = newRow.insertCell(3);
//     var budgetDateCell = newRow.insertCell(4);

//     productNameCell.innerHTML = orcamento.productName;
//     unitPriceCell.innerHTML = orcamento.unitPrice.toFixed(2);
//     totalPriceCell.innerHTML = orcamento.totalPrice.toFixed(2);
//     budgetValueCell.innerHTML = orcamento.budgetValue.toFixed(2);
//     budgetDateCell.innerHTML = orcamento.budgetDate || new Date();
//   });
// }

// function getNewBudgets() {
//   var newBudgets = JSON.parse(localStorage.getItem("newOrcamentos")) || 0;
//   console.log("newB: ", newBudgets);
//   if (newBudgets) {
//     var spanElement = document.getElementById("novosOrcamentos");
//     spanElement.textContent = newBudgets;
//   }
// }
