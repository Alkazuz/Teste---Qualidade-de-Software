const {calcularCredito} = require('./credito')

describe("calcular qualidade do emprestimo", () => {

    it("expectativa de erros", () => {

        expect(calcularCredito(undefined, 0, 12000, 24)).toBe('Erro - campo vazio')
        expect(calcularCredito(8000, undefined, 8000, 24)).toBe('Erro - campo vazio')
        expect(calcularCredito(8000, 0, undefined, 24)).toBe('Erro - campo vazio')
        expect(calcularCredito(8000, 0, 3000, undefined)).toBe('Erro - campo vazio')
        expect(calcularCredito(12000, 'A', 5000, 4)).toBe('Erro - um dos campos não é número')
        expect(calcularCredito(500, 2, 2000, -12)).toBe('Erro - limite mínimo ou máximo atingido')
        expect(calcularCredito(12000, 1.5, 5000, 4)).toBe('Erro - numeros decimais em campos inteiros')
        expect(calcularCredito(12000, 0, 5000, 4.2)).toBe('Erro - numeros decimais em campos inteiros')
        expect(calcularCredito(-5000, 2, 2000, 12)).toBe('Erro - limite mínimo ou máximo atingido')
        expect(calcularCredito(5000, -2, 2000, 12)).toBe('Erro - limite mínimo ou máximo atingido')
        expect(calcularCredito(5000, 2, -2000, 12)).toBe('Erro - limite mínimo ou máximo atingido')
        expect(calcularCredito(5000, 2, 2000, -12)).toBe('Erro - limite mínimo ou máximo atingido')
        
    })

    it("expectativa com ótimo", () => {

        expect(calcularCredito(15000, 1, 12000, 17)).toBe('Ótimo') // 9.4
        expect(calcularCredito(7000, 0, 16000, 30)).toBe('Ótimo') // 7.6
    
    })

    it("expectativa com bom", () => {

        expect(calcularCredito(12000, 1, 8000, 7)).toBe('Bom') // 19
        expect(calcularCredito(12000, 1, 8500, 5)).toBe('Bom') // 28.3
    
    })

    it("expectativa com ruim", () => {

        expect(calcularCredito(6000, 1, 10000, 6)).toBe('Ruim') // 55.5
        expect(calcularCredito(6200, 1, 8500, 9)).toBe('Ruim') // 30.4
    
    })

})

