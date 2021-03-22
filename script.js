function som(){
    var num1 = document.getElementById("valor")
    var res  = document.getElementById("resp")
    var val1 = Number(num1.value)
    var soma = 5.50 * val1
    while(val1<=0){
        return num1
    }

    res.innerHTML=(` ${val1}U$  Dólar americano igual a : ${soma.toFixed(2)}R$ `)
}