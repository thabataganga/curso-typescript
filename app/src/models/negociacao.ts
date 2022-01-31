import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao extends Imprimivel {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {
        super();
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }

    public paraTexto(): string {
        return `
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor}
    `;
    }

    get volume(): number {
        return this.quantidade * this.valor
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }


}