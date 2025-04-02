function conversor() {
    const realBrasileiro = parseFloat(prompt("Insira o valor em real para conversão: "));
    const valorDolar = 5.25; // Cotação do dólar
    const conversaoDoRealParaDolar = realBrasileiro / valorDolar; // Divisão para conversão

    alert("O valor em real é: R$" + realBrasileiro.toFixed(2) + 
          " e o valor em dólar é: $" + conversaoDoRealParaDolar.toFixed(2));
}