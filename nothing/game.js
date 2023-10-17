const add = (a,b) => a + b; //arrow function

const mapa = [["a1","a2","a3","a4"],["b1","b2","b3","b4"],["c1","c2","c3","c4"],["d1","d2","d2","d4"]];

document.addEventListener("keydown", function(event) { 
    switch(event){ 
         case "ArrowLeft" : 
            x = [0][1]
        console.log(x)
    }
})

x = mapa[0][0];

vermelho = document.getElementById(x);
console.log(vermelho);
vermelho.style.backgroundColor = "red"
