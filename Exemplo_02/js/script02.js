function calcular(){
    console.log(document.getElementById("1").value)
    peso = document.getElementById("1").value

    console.log(document.getElementById("2").value)
    altura = document.getElementById("2").value

    result = peso / altura**2 
    resultado = result.toFixed(1) ;
 

    document.getElementById("texto").innerHTML = `Sei IMC é ${resultado}`

}



