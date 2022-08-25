const calcularCredito = (salario, dependentes, emprestimo, parcelas) => {

    if(!salario || !dependentes || !emprestimo || !parcelas) return "Erro"
    if(salario == NaN || dependentes == NaN  || emprestimo == NaN  || parcelas == NaN ) return "Erro"

    if(salario <= 1212 || dependentes < 0 || emprestimo <= 0 || parcelas > 36 || parcelas < 1) return "Erro"

    if((parcelas - Math.floor(parcelas)) !== 0) return "Erro" // números decimais
    if((dependentes - Math.floor(dependentes)) !== 0) return "Erro" // números decimais

    const resultado = ((salario / (dependentes + 1)) / (emprestimo / parcelas)) * 100

    if(resultado > 100) {
        return "Erro"
    } else if(resultado < 0) {
        return "Erro"
    }else if(resultado >= 30) {
        return "Ruim"
    }else if(resultado < 30) {
        return "Bom"
    }else if(resultado < 10) {
        return "Ótimo"
    }

    return "Não foi possível calcular"

}

module.exports = {calcularCredito}