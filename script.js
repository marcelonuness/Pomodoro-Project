let tempoProd = document.querySelector(".tempo-prod")
let tempoDesc = document.querySelector(".tempo-desc")
let minutos = 25
let minutosDesc = 5
let segundos = 0

function aumentarProd() {
    if(minutos < 55) {
        minutos += 5
        return tempoProd.textContent = formatandoString(segundos, minutos)
    } else {
        minutos = 60
        alert("O foco é ser produtivo em pouco tempo então vai com calma!")
        return tempoProd.textContent = `1:00:00`

    }
    
}

function diminuirProd() {
    if (minutos > 5) {
        minutos -= 5
        return tempoProd.textContent = formatandoString(segundos, minutos)
    } else {
        minutos = 5
        alert("você precisa de pelo menos o mínimo de produtividade!")
        return tempoProd.textContent = formatandoString(segundos, minutos)
    }
}

function aumentarDesc() {
    if(minutosDesc <= 25) {
        minutosDesc += 5
        return tempoDesc.textContent = formatandoString(segundos, minutosDesc)
    } else {
        minutosDesc = 30
        alert("É muito descanso não acha?")
        return tempoDesc.textContent = formatandoString(segundos, minutosDesc)
    }
}

function diminuirDesc() {
    if(minutosDesc > 0) {
        minutosDesc -= 5
        return tempoDesc.textContent = formatandoString(segundos, minutosDesc)
    } else {
        minutosDesc = 0
        alert("tem certeza que não quer nenhum descanso?!")
        return tempoDesc.textContent = formatandoString(segundos, minutosDesc)
    }
}

// ----- CONTAGEM -----

let iniciar = document.getElementById("iniciar")
let container1 = document.querySelector("#container")
let container2 = document.querySelector("#contagem")
let contador = document.querySelector(".contador")

iniciar.addEventListener('click', ()=>{

    container1.style.display = 'none'
    container2.style.display = 'flex'
    contador.textContent = formatandoString(segundos, minutos)
    trocandoCiclo()
})


function contagem(s, m) {
    setInterval(() => {
        if (s == 0 && m > 0) {
            m -= 1
            s = 59           
            return contador.textContent = formatandoString(s, m)
        } else if (s > 0 && m >= 0) {
            s -= 1
            return contador.textContent = formatandoString(s, m)
        } else if (s == 0 && m == 0) {
            return contagem(segundos, minutosDesc)
        }
    }, 1000)
}

function formatandoString(s, m) {
    if (m >= 10 && s < 10) {
        return `${m}:0${s}`
    } else if (m > 10 && s > 10) {
        return `${m}:${s}`
    } else if (m < 10 && s >= 10) {
        return `0${m}:${s}`
    } else if (m < 10 && s < 10) {
        return `0${m}:0${s}`
    }
    
}


//trocando de ciclo
function trocandoCiclo() {
    let bool = prompt("você deseja fazer um ciclo? digite 'sim' ou 'nao'")

    if (bool === 'sim') {
        return contagem(segundos, minutos)
    } else if (bool === 'nao') {
        container1.style.display = 'flex'
        container2.style.display = 'none' 
    }
}