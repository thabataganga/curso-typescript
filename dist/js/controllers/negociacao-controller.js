export class NegociacaoController {
    constructor() {
        // Recebe os dados do formulário no index.html
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    // Funcao para adicionar
    adiciona() {
        console.log(`Data: ${this.inputData}`);
        console.log(`Quantidade: ${this.inputQuantidade}`);
        console.log(`Valor: ${this.inputValor}`);
    }
}
