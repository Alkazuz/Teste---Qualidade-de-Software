const {calcularCredito} = require('./credito')

describe("calcular qualidade do emprestimo", () => {

    it("expectativa de erros", () => {

        expect(calcularCredito(undefined, 0, 12_000, 24)).toBe('Erro')
        expect(calcularCredito(8_000, undefined, 8_000, 24)).toBe('Erro')
        expect(calcularCredito(8_000, 0, undefined, 24)).toBe('Erro')
        expect(calcularCredito(8_000, 0, 3_000, undefined)).toBe('Erro')
        expect(calcularCredito(12_000, 'A', 5_000, 4)).toBe('Erro')
        expect(calcularCredito(12_000, 1.5, 5_000, 4)).toBe('Erro')
        expect(calcularCredito(12_000, 0, 5_000, 4.2)).toBe('Erro')
        expect(calcularCredito(-5_000, 2, 2_000, 12)).toBe('Erro')
        expect(calcularCredito(5_000, -2, 2_000, 12)).toBe('Erro')
        expect(calcularCredito(5_000, 2, -2_000, 12)).toBe('Erro')
        expect(calcularCredito(5_000, 2, 2_000, -12)).toBe('Erro')
    
    })

    it("expectativa com ótimos", () => {

        expect(calcularCredito(undefined, 0, 12_000, 24)).toBe('Erro')
        expect(calcularCredito(8_000, undefined, 8_000, 24)).toBe('Erro')
        expect(calcularCredito(8_000, 0, undefined, 24)).toBe('Erro')
        expect(calcularCredito(8_000, 0, 3_000, undefined)).toBe('Erro')
        expect(calcularCredito(12_000, 'A', 5_000, 4)).toBe('Erro')
        expect(calcularCredito(12_000, 1.5, 5_000, 4)).toBe('Erro')
        expect(calcularCredito(12_000, 0, 5_000, 4.2)).toBe('Erro')
        expect(calcularCredito(-5_000, 2, 2_000, 12)).toBe('Erro')
        expect(calcularCredito(5_000, -2, 2_000, 12)).toBe('Erro')
        expect(calcularCredito(5_000, 2, -2_000, 12)).toBe('Erro')
        expect(calcularCredito(5_000, 2, 2_000, -12)).toBe('Erro')
    
    })

})

