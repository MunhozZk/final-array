// Array com 16 elementos do tema Stranger Things
var strangerThings = [
    "Eleven",
    "Mike Wheeler",
    "Dustin Henderson",
    "Lucas Sinclair",
    "Will Byers",
    "Max Mayfield",
    "Steve Harrington",
    "Nancy Wheeler",
    "Jonathan Byers",
    "Joyce Byers",
    "Jim Hopper",
    "Demogorgon",
    "Mind Flayer",
    "Upside Down",
    "Hawkins Laboratory",
    "Vecna"
];

// URLs de imagens relacionadas
var imagens = [
    "https://upload.wikimedia.org/wikipedia/pt/a/af/Eleven-Stranger-Things-3.png",

    "https://upload.wikimedia.org/wikipedia/en/3/38/An_image_of_the_character_Mike_Wheeler_%28portrayed_by_Finn_Wolfhard%29_from_season_3_of_the_Netflix_series_%22Stranger_Things%22.png",

    "https://i.pinimg.com/736x/25/28/00/252800cf03de2e91fc5ce01257a124d8.jpg",

    "https://i.pinimg.com/736x/e3/32/05/e332054b0d2f4cd0dd78d3792fc64b52.jpg",

    "https://s2-techtudo.glbimg.com/k4H0KqiA7ECe4iNsZkSwRCi7Wf4=/0x0:1300x730/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/p/O/MHnmy8QBKx2gN1ddPIDg/intro-1654349351.jpg",


    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rf8dYCsoTuA2Nw4YGvBhWc0Fn3bZYS9k-w&s",

    "https://wallpapers.com/images/hd/stranger-things-steve-harrington-blue-top-c013mfa2plvfhjsa.jpg",


    "https://miro.medium.com/v2/resize:fit:1400/0*H0er7fOPkcX-eiKq",


    "https://cdn11.bigcommerce.com/s-xku293zif5/images/stencil/1280x1280/products/5347/10382/jonathan-byers__31164.1660202654.jpg?c=2?imbypass=on",


    "https://i.pinimg.com/736x/ae/ba/0a/aeba0a419527f0a9067271d659a73e1d.jpg",


    "https://conteudo.imguol.com.br/c/entretenimento/86/2019/07/05/jim-hopper-david-harbour-na-terceira-temporada-de-stranger-things-1562343903266_v2_3x4.jpg",

    "https://uploads.jovemnerd.com.br/wp-content/uploads/2023/11/demogorgon_stranger_things_teatro__v6mj9n.jpg",


    "https://hips.hearstapps.com/hmg-prod/images/stranger-things-mind-flayer-1562864952.png?crop=0.8698193002691272xw:1xh;center,top",


    "https://preview.redd.it/some-of-the-old-concepts-for-the-upside-down-could-be-what-v0-vjs2fyqihqob1.jpg?width=640&crop=smart&auto=webp&s=9c81f3c7c3d934678efc732960929cf45a65960a",


    "https://www.archpaper.com/wp-content/uploads/2022/09/Hawkins_National_Labs_also_known_as_Emory_Universitys_briarcliff_campus._28903314358-1280x960.jpg",

    "https://t.ctcdn.com.br/zLTNsOmlp9aQaUnirenIR17DEis=/640x360/smart/i598739.jpeg"
];

// Imprime o décimo elemento no console (índice 9)
console.log("Décimo elemento: " + strangerThings[9]);

// Função para mostrar o elemento escolhido
function mostrarElemento() {
    var escolhaNome = parseInt(document.getElementById("numeroInput").value);
    var resultado = document.getElementById("resultado");
    
    // Limpa o resultado anterior
    resultado.innerHTML = "";
    
    // Verifica se o número é válido
    if (escolhaNome >= 0 && escolhaNome <= 15) {
        console.log("Elemento escolhido: " + strangerThings[escolhaNome]);
        
        var card = document.createElement("div");
        card.className = "item-card";
        
        var imagemDiv = document.createElement("div");
        imagemDiv.className = "item-imagem";
        
        var img = document.createElement("img");
        img.src = imagens[escolhaNome];
        img.alt = strangerThings[escolhaNome];
        
        imagemDiv.appendChild(img);
        
        var nome = document.createElement("div");
        nome.className = "item-nome";
        nome.textContent = strangerThings[escolhaNome];
        
        card.appendChild(imagemDiv);
        card.appendChild(nome);
        resultado.appendChild(card);
    } else {
        resultado.innerHTML = '<p style="color: #ff0000; font-weight: bold; margin-top: 20px;">❌ Número inválido! Digite entre 0 e 15.</p>';
    }
}

// Permite pressionar Enter para mostrar
document.getElementById("numeroInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        mostrarElemento();
    }
});