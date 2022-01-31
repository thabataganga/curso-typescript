export function inspecionar() {
    return function (targer, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const retorno = metodoOriginal.apply(this, args);
            return retorno;
        };
        return descriptor;
    };
}
