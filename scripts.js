
let chave = "974eb49d16a06399babc0949ff6cc8df"

function colocarNaTela(dados){ 

    console.log(dados)


        document.querySelector(".city").innerHTML = "Tempo em " + dados.name
        document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
        document.querySelector(".desc").innerHTML = dados.weather[0].description
        document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
        document.querySelector(".umi").innerHTML = "Umidade:" + dados.main.humidity + "%"
        document.querySelector(".temp-max").innerHTML = "Temperatura max:" + Math.floor(dados.main.temp_max) + "°C"
        document.querySelector(".temp-min").innerHTML = "Temperatura min:" + Math.floor(dados.main.temp_min) + "°C"
}

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric")
        .then(resposta => resposta.json())

    colocarNaTela(dados)
}


function CliqueNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}
