function calcularPreco(event) {
    event.preventDefault();

    const material = parseFloat(document.getElementById('custo-mat').value);
    const depreciacao = parseFloat(document.getElementById('depre-imp').value);
    const horasTrab = parseFloat(document.getElementById('custo-hora').value);

    const custoTotal = material + depreciacao + horasTrab;
    const precoVenda = custoTotal * 2.78;

    const divResultado = document.getElementById('resultado-preco');
    divResultado.innerHTML = `
        Custo Total: R$ ${custoTotal.toFixed(2)} <br>
        Preço Venda: R$ ${precoVenda.toFixed(2)}
    `;
}

function setupEstoque() {
    const form = document.getElementById('form-estoque');
    const tbody = document.getElementById('estoque-table-body');
    const totalEl = document.getElementById('total-estoque');
    if (!form || !tbody || !totalEl) return;

    const inputItem = document.getElementById('estoque-item');
    const inputValor = document.getElementById('estoque-valor');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const item = inputItem.value.trim();
        const valor = parseFloat(inputValor.value);
        if (!item || isNaN(valor)) return;

        const row = document.createElement('tr');
        row.innerHTML = `<td>${item}</td><td>R$ ${valor.toFixed(2)}</td>`;
        tbody.appendChild(row);

        inputItem.value = '';
        inputValor.value = '';
        inputItem.focus();
        let total = 0;
        const rows = tbody.querySelectorAll('tr');

        for (let i = 0; i < rows.length; i += 1) {
            const cell = rows[i].cells[1];
            if (!cell) continue;
            const value = parseFloat(cell.textContent.replace('R$', ''));
            if (!isNaN(value)) total += value;
        }

        totalEl.textContent = `R$ ${total.toFixed(2)}`;
    });

    let total = 0;
    const rows = tbody.querySelectorAll('tr');

    for (let i = 0; i < rows.length; i += 1) {
        const cell = rows[i].cells[1];
        if (!cell) continue;
        const value = parseFloat(cell.textContent.replace('R$', ''));
        if (!isNaN(value)) total += value;
    }

    totalEl.textContent = `R$ ${total.toFixed(2)}`;
}

function setupGastos() {
    const form = document.getElementById('form-gastos');
    const tbody = document.getElementById('gastos-table-body');
    const totalEl = document.getElementById('total-gastos');
    if (!form || !tbody || !totalEl) return;

    const inputDespesa = document.getElementById('gastos-despesa');
    const inputValor = document.getElementById('gastos-valor');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const despesa = inputDespesa.value.trim();
        const valor = parseFloat(inputValor.value);
        if (!despesa || isNaN(valor)) return;

        const row = document.createElement('tr');
        row.innerHTML = `<td>${despesa}</td><td>R$ ${valor.toFixed(2)}</td>`;
        tbody.appendChild(row);

        inputDespesa.value = '';
        inputValor.value = '';
        inputDespesa.focus();
        let total = 0;
        const rows = tbody.querySelectorAll('tr');

        for (let i = 0; i < rows.length; i += 1) {
            const cell = rows[i].cells[1];
            if (!cell) continue;
            const value = parseFloat(cell.textContent.replace('R$', ''));
            if (!isNaN(value)) total += value;
        }

        totalEl.textContent = `R$ ${total.toFixed(2)}`;
    });

    let total = 0;
    const rows = tbody.querySelectorAll('tr');

    for (let i = 0; i < rows.length; i += 1) {
        const cell = rows[i].cells[1];
        if (!cell) continue;
        const value = parseFloat(cell.textContent.replace('R$', ''));
        if (!isNaN(value)) total += value;
    }

    totalEl.textContent = `R$ ${total.toFixed(2)}`;
}

function setupFaturamento() {
    const form = document.getElementById('form-faturamento');
    const tbody = document.getElementById('faturamento-table-body');
    const totalFaturamentoEl = document.getElementById('total-faturamento');
    const totalCaixaEl = document.getElementById('total-caixa');
    if (!form || !tbody || !totalFaturamentoEl || !totalCaixaEl) return;

    const inputMes = document.getElementById('faturamento-mes');
    const inputFaturamento = document.getElementById('faturamento-valor');
    const inputCaixa = document.getElementById('faturamento-caixa');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const mes = inputMes.value.trim();
        const faturamento = parseFloat(inputFaturamento.value);
        const caixa = parseFloat(inputCaixa.value);
        if (!mes || isNaN(faturamento) || isNaN(caixa)) return;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${mes}</td>
            <td>R$ ${faturamento.toFixed(2)}</td>
            <td>R$ ${caixa.toFixed(2)}</td>
        `;
        tbody.appendChild(row);

        inputMes.value = '';
        inputFaturamento.value = '';
        inputCaixa.value = '';
        inputMes.focus();
        let totalFaturamento = 0;
        let totalCaixa = 0;
        const rows = tbody.querySelectorAll('tr');

        for (let i = 0; i < rows.length; i += 1) {
            const cellFaturamento = rows[i].cells[1];
            const cellCaixa = rows[i].cells[2];
            if (cellFaturamento) {
                const valueFaturamento = parseFloat(cellFaturamento.textContent.replace('R$', ''));
                if (!isNaN(valueFaturamento)) totalFaturamento += valueFaturamento;
            }
            if (cellCaixa) {
                const valueCaixa = parseFloat(cellCaixa.textContent.replace('R$', ''));
                if (!isNaN(valueCaixa)) totalCaixa += valueCaixa;
            }
        }

        totalFaturamentoEl.textContent = `R$ ${totalFaturamento.toFixed(2)}`;
        totalCaixaEl.textContent = `R$ ${totalCaixa.toFixed(2)}`;
    });

    let totalFaturamento = 0;
    let totalCaixa = 0;
    const rows = tbody.querySelectorAll('tr');

    for (let i = 0; i < rows.length; i += 1) {
        const cellFaturamento = rows[i].cells[1];
        const cellCaixa = rows[i].cells[2];
        if (cellFaturamento) {
            const valueFaturamento = parseFloat(cellFaturamento.textContent.replace('R$', ''));
            if (!isNaN(valueFaturamento)) totalFaturamento += valueFaturamento;
        }
        if (cellCaixa) {
            const valueCaixa = parseFloat(cellCaixa.textContent.replace('R$', ''));
            if (!isNaN(valueCaixa)) totalCaixa += valueCaixa;
        }
    }

    totalFaturamentoEl.textContent = `R$ ${totalFaturamento.toFixed(2)}`;
    totalCaixaEl.textContent = `R$ ${totalCaixa.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', function () {
    setupEstoque();
    setupGastos();
    setupFaturamento();
});