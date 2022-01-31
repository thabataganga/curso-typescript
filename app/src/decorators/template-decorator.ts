export function inspecionar() {
    return function (
        targer: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const retorno = metodoOriginal.apply(this, args);
            return retorno;
        }

        return descriptor;
    }
}