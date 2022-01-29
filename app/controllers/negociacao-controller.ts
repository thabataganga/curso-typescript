import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {

    // Criação das variaveis privadas
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    // Recebe os dados do formulário no index.html
    constructor() {      
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    // Funcao para adicionar
    adiciona() {
        const exp = /-/g;

        const date = new Date(this.inputValor.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        const negociacao = new Negociacao(date, quantidade, valor);
        console.log(negociacao);
    }
}