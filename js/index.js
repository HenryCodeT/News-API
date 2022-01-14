let formularioNoticias = document.querySelector(".formularioNoticias");
const API_KEY ="9b1c616585be4c3a91269faf0255f863"


let optenerNoticias = (event)=>{
    event.preventDefault()

    let topico = document.querySelector("#topico").value
    let cantidad = document.querySelector("#numeroResultados").value
    let url = `https://newsapi.org/v2/everything?q=${topico}&apiKey=${API_KEY}&pageSize=${cantidad}`
    let config={
        method:"GET"
    }
    fetch(url,config)
        .then((respuesta)=>{
            if (respuesta.ok) {
                return respuesta.json()
            }else{
                throw Error(respuesta.status)
            }
        })
        .then((respuestaJson)=>{
            console.log(respuestaJson);
            let resultados =document.querySelector(".resultados")
            for (let i = 0; i < respuestaJson.articles.length; i++) {

                resultados.innerHTML += `
                <div>
                    <h2>${respuestaJson.articles[i].title}</h2>
                    <div>
                        <img src="${respuestaJson.articles[i].urlToImage}" alt="${respuestaJson.articles[i].source.name}">
                    </div>
                    <h5>${respuestaJson.articles[i].author}</h5>
                    <p>${respuestaJson.articles[i].description}</p>
                </div>
                `
            }
        })
        .catch((err)=>err)
}

formularioNoticias.addEventListener("submit",optenerNoticias);