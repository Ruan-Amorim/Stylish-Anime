
import {ArrayPreviewAnime, StylesAnimes} from "./dados.js";


var ulContainerPlayerAnimes = window.document.getElementById("ulContainerPlayerAnimes");
var bloco1 = window.document.getElementById("bloco1");
var bloco2 = window.document.getElementById("bloco2");

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


function openPersonagens(anime) {

    // Criando os elementos
    let container = document.createElement("div");
    container.className = "container";

    let imageIcon = document.createElement("img");
    imageIcon.className = "image-icon";

    let image01 = document.createElement("img");
    image01.className = "img1";

    let image02 = document.createElement("img");
    image02.className = "img2";

    let poster = document.createElement("img");
    poster.className = "image-poster";

    let texto1 = document.createElement("p");
    texto1.className = "style-text text1";

    let texto2 = document.createElement("p");
    texto2.className = "style-text text2";

    let texto3 = document.createElement("p");
    texto3.className = "style-text text3";

    let textBox = document.createElement("ul");
    textBox.className = "textBox";

    let li = document.createElement("li");

    let tituloTextBox = document.createElement("p");
    tituloTextBox.className = "tituloTextBox";

    let textoTextBox = document.createElement("p");
    textoTextBox.className = "textoTextBox";
    

    for (let x = 0; x < 1; x++) {
            imageIcon.src = "midias/image/Bocchi-the-rock/Hitori-icon01.jpeg";
            image01.src = "midias/image/Bocchi-the-rock/Hitori-image01.png";
            image02.src = "midias/image/Bocchi-the-rock/Hitori-image02.png";
            poster.src = "midias/image/Bocchi-the-rock/Hitori-poster.jpeg";
            tituloTextBox.innerText = StylesAnimes[anime].tituloTextBox;
            textoTextBox.innerText = StylesAnimes[anime].textoTextBox;
            texto1.innerHTML = StylesAnimes[anime].texto1;
            texto2.innerHTML = StylesAnimes[anime].texto2;
            texto3.innerHTML = StylesAnimes[anime].texto3;

            container.appendChild(imageIcon);
            container.appendChild(image01);
            container.appendChild(image02);
            container.appendChild(poster);
            container.appendChild(texto1);
            container.appendChild(texto2);
            container.appendChild(texto3);
            li.appendChild(tituloTextBox);
            li.appendChild(textoTextBox);
            textBox.appendChild(li);
            container.appendChild(textBox);
            bloco2.appendChild(container);
             x++
    }
}

openPersonagens("Bocchi The Rock");