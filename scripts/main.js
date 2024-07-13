
import {ArrayPreviewAnime} from "./dados.js";


var ulContainerPlayerAnimes = window.document.getElementById("ulContainerPlayerAnimes");
var bloco1 = window.document.getElementById("bloco1");

function geradorPreviewAnime() {
    for (let x = 0; x < ArrayPreviewAnime.length; x++) {
        let li = document.createElement("li");
        li.id = `anime-${x}`;
        li.innerHTML = `
            <h2>${ArrayPreviewAnime[x].nome}</h2>
            <p>${ArrayPreviewAnime[x].sinopse}</p>`;
        li.style.backgroundImage = `url("${encodeURI(ArrayPreviewAnime[x].imagemPC)}")`;
        li.setAttribute('onclick', `AnimeClick(${x})`); 
    
        ulContainerPlayerAnimes.appendChild(li);
    }
};

window.AnimeClick = function AnimeClick(Anime){
    // Remove o primeiro elemento e o armazena em uma variável
    let firstElement = ArrayPreviewAnime.shift();

    // Adiciona o elemento removido ao final da array
    ArrayPreviewAnime.push(firstElement);

    loading();
}

function loading() {
    ulContainerPlayerAnimes.innerHTML = ''
    geradorPreviewAnime();
    bloco1.style.backgroundImage = `url("${encodeURI(ArrayPreviewAnime[0].imagemPC)}")`;
}
geradorPreviewAnime();
