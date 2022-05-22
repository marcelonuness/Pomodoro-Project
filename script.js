let tempoProd = document.querySelector(".tempo-prod")
let tempoDesc = document.querySelector(".tempo-desc")
let minutos = 25
let minutosDesc = 5
let segundos = 5

function aumentarProd() {
    if(minutos < 59) {
        minutos += 5
        return tempoProd.textContent = `${minutos}:00`
    } else {
        minutos = 60
        alert("O foco é ser produtivo em pouco tempo então vai com calma!")
        return tempoProd.textContent = `1:00:00`
    }
    
}

function diminuirProd() {
    if (minutos > 5) {
        minutos -= 5
        return tempoProd.textContent = `${minutos}:00`
    } else {
        minutos = 0
        alert("você precisa de pelo menos o mínimo de produtividade!")
        return tempoProd.textContent = `00:00`
    }
}

function aumentarDesc() {
    if(minutosDesc <= 25) {
        minutosDesc += 5
        return tempoDesc.textContent = `${minutosDesc}:00`
    } else {
        minutosDesc = 30
        alert("É muito descanso não acha?")
        return tempoDesc.textContent = `${minutosDesc}:00`
    }
}

function diminuirDesc() {
    if(minutosDesc > 0) {
        minutosDesc -= 5
        return tempoDesc.textContent = `${minutosDesc}:00`
    } else {
        minutosDesc = 0
        alert("tem certeza que não quer nenhum descanso?!")
        return tempoDesc.textContent = `${minutosDesc}:00`
    }
}

//contagem

let iniciar = document.getElementById("iniciar")
let container1 = document.querySelector("#container")
let container2 = document.querySelector("#contagem")
let contador = document.querySelector(".contador")

iniciar.addEventListener('click', ()=>{
    container1.style.display = 'none'
    container2.style.display = 'flex'
    contador.textContent = `${minutos}:00`
    minutos -= 1
    contagemRegressiva()
})

function contagemRegressiva() {
    setInterval(() => {
        if (segundos > 0) {
            segundos -= 1
            return contador.textContent = `${minutos}:${segundos}`
        } else if (segundos == 0) {
            minutos -= 1
            segundos = 60
            return contador.textContent = `${minutos}:00`
        }
    }, 1000)
}