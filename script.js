var resultado1 = 0
var resultado2 = 0
var resultado3 = 0
var resultado4 = 0

function vitoria() {
    var max1 = Math.max(resultado2, resultado3, resultado4)
    var max2 = Math.max(resultado1, resultado3, resultado4)
    var max3 = Math.max(resultado1, resultado2, resultado4)
    var max4 = Math.max(resultado1, resultado2, resultado3)

    if (resultado1 > max1)
        alert('player 1 venceu.')
    else if (resultado2 > max2)
        alert('player 2 venceu.')
    else if (resultado3 > max3)
        alert('player 3 venceu.')
    else if (resultado4 > max4)
        alert('player 4 venceu.')
    else
        alert('Empate.')
}

function dado() {
    var aleatorio = Math.random()
    var maximo = aleatorio * 6
    var exatas = Math.floor(maximo)
    var resultado = exatas + 1
    return resultado
}

function jogar1() {
    resultado1 = dado()
    alert(resultado1)
}

function jogar2() {
    resultado2 = dado()
    alert(resultado2)
}

function jogar3() {
    resultado3 = dado()
    alert(resultado3)
}

function jogar4() {
    resultado4 = dado()
    alert(resultado4)
}
