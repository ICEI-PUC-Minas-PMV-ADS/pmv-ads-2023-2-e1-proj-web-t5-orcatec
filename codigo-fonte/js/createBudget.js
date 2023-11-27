function createBudget() {
    event.preventDefault();
    // let quantity = document.getElementById("quantity-input");
    let id;
    let productName = document.getElementById("product-name-budget-input").value;
    let unitPrice = document.getElementById("unit-price-budget-input").value;
    let totalPrice = document.getElementById("total-price-budget-input").value;
    let budgetValue = document.getElementById("amount-budget-input").value;

    if (!productName || productName === "") {
        return alert("O nome do produto deve ser informado.");
    }

    if (!unitPrice || unitPrice <= 0) {
        return alert("O valor unitário do produto deve ser informado.");
    }

    if (!totalPrice || totalPrice <= 0) {
        return alert("O valor total do produto deve ser informado.");
    }

    if (!budgetValue || budgetValue <= 0) {
        return alert("O valor total do orçamento deve ser informado.");
    }

    var orcamentos = JSON.parse(localStorage.getItem("orcamentos")) || [];
    var newOrcamentos = JSON.parse(localStorage.getItem("newOrcamentos")) || 0;

    const newBudget = {
        productName: productName,
        unitPrice: parseFloat(unitPrice),
        totalPrice: parseFloat(totalPrice),
        budgetValue: parseFloat(budgetValue),
        const: data = new Date()
    };

    orcamentos.push(newBudget);
    localStorage.setItem("orcamentos", JSON.stringify(orcamentos));
    localStorage.setItem("newOrcamentos", newOrcamentos + 1);

    alert("Orçamento criado.");
    setTimeout(function () { }, 3000);
    window.location.href = "dashboard.html";
}
