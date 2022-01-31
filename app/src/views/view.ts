import { inspecionar } from "../decorators/inspecionar.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(selector: string) {
        const elemento = document.querySelector(selector);

        if (elemento) {
            this.elemento = elemento as HTMLLIElement;
        } else {
            throw Error(`Seletor ${selector} não existe no DOM. Verifique`);
        }

    }

    @logarTempoDeExecucao(true)
    @inspecionar

    public update(model: T): void {

        let template = this.template(model);

        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}