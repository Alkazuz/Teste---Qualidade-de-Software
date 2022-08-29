const calcularCredito = (salario, dependentes, emprestimo, parcelas) => {

    if(!salario || dependentes == undefined || !emprestimo || !parcelas) return "Erro - campo vazio"
    
    if(!isNumeric(salario) || !isNumeric(dependentes)
    || !isNumeric(emprestimo) || !isNumeric(parcelas)) return "Erro - um dos campos não é número"

    if(salario <= 1212 || dependentes < 0 || emprestimo <= 0 || parcelas > 36 || parcelas < 1) return "Erro - limite mínimo ou máximo atingido"

    if((parcelas - Math.floor(parcelas)) !== 0) return "Erro - numeros decimais em campos inteiros" // números decimais
    if((dependentes - Math.floor(dependentes)) !== 0) return "Erro - numeros decimais em campos inteiros" // números decimais

    const resultado =  ((emprestimo / parcelas) / (salario / (dependentes + 1))) * 100
    if(resultado > 100) {
        return "Erro - excedeu 100%"
    } else if(resultado < 0) {
        return "Erro - abaixo de 0%"
    }else if(resultado >= 30) {
        return "Ruim"
    }else if(resultado < 30 && resultado >= 10) {
        return "Bom"
    }else if(resultado < 10) {
        return "Ótimo"
    }

    return "Não foi possível calcular"

}

function isNumeric(str) {
    if (typeof str == "number") return true
    return !isNaN(str)
  }

module.exports = {calcularCredito}