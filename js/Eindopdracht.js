var mainElement = document.querySelector("main");
var bodyElement = document.querySelector("body");
var imgElement = document.querySelectorAll("img");
var buttonTurtwig = document.querySelector("button#Turtwig");
var imageTurtwig = document.querySelector("img#Turtwig");
var buttonChimchar = document.querySelector("button#Chimchar");
var imageChimchar = document.querySelector("img#Chimchar");
var buttonPiplup = document.querySelector("button#Piplup");
var imagePiplup = document.querySelector("img#Piplup");
var gameTekst = document.querySelector("#Gametekst");
var gameTekstTwo = document.querySelector("#Gameteksttwo");
var startTekst = document.querySelector("#Starttekst")
var buttonStart = document.querySelector(".buttonstart")
var typeAttack = document.querySelector("#Typeattack")
var normalAttack = document.querySelector("#Normal")
var randomTegenstander = Math.random() * 2;
var randomerTekst = Math.random() * 2;
var tegenstanderhealth = 120;
var eigenhealth = 120;
var tegenstanderPokemon = document.querySelector("#pokemonTegenstander")
var jouPokemon = document.querySelector("#jouPokemon")
var jouHealth = document.querySelector("#jouHealth")
var healthTegenstander = document.querySelector("#tegenstanderHealth")
var audio = new Audio('Audio/Battle.team.mp3');
/*bron: https://www.youtube.com/watch?v=qtzPna9yFjg*/
var snelheidTurtwig = [3, 4, 5];
var snelheidChimchar = [1, 2, 3, 4, 5, 6, 7];
var snelheidPiplup = [2, 3, 4, 5, 6];
var randomTurtwig = Math.random() * 3;
var randomChimchar = Math.random() * 7;
var randomPiplup = Math.random() * 5;
randomTurtwig = Math.floor(randomTurtwig);
randomChimchar = Math.floor(randomChimchar);
randomPiplup = Math.floor(randomPiplup);
var turtwigSnelheid = snelheidTurtwig[randomTurtwig];
var chimcharSnelheid = snelheidChimchar[randomChimchar];
var piplupSnelheid = snelheidPiplup[randomPiplup];
console.log(piplupSnelheid, chimcharSnelheid, turtwigSnelheid)
const eigenPokemonObject = {}
const tegenstanderPokemonObject = {}

/* Fuctie die ervoor zorgt dat de Game wordt gestart met Turtwig als je pokemon.*/
function turtwigGame() {
    imagePiplup.classList.add("fightturt");
    mainElement.classList.remove("start");
    mainElement.classList.add("Turtwig");
    gameTekst.textContent = "Turtwig is klaar om te vechten.";
    startTekst.textContent = " ";
    document.getElementById("Piplup").src = "Images/twig.png";
    /*bron: https://cdn.bulbagarden.net/upload/d/da/Spr_b_6x_387.png*/
    buttonStart.remove(this.buttonStart);
    /* If Else die de tegenstander bepaald.*/
    if (randomTegenstander >= 1) {
        tegenstanderChimchar();
    } else {
        tegenstanderPiplup();
    };
    imageTurtwig.classList.add("tegenstandertwig");
    typeAttack.textContent = "Razor leaf (30 power).";
    normalAttack.textContent = "Tackle (25 power).";
    typeAttack.classList.add("Grass");
    jouPokemon.textContent = "Turtwig (Grass) type.";
    audio.play();
    Object.defineProperties(eigenPokemonObject, {
        naam: {
            value: 'Turtwig',
            writable: true
        },
        snelheidPokemon: {
            value: turtwigSnelheid,
            writable: true
        },
        moveNaam: {
            value: 'Razor leaf',
            writable: true
        }
    });
};
/* Button koppelen aan de functie van starten met Turtwig.*/
buttonTurtwig.addEventListener("click", turtwigGame);

/* Fuctie die ervoor zorgt dat de Game wordt gestart met Chimchar als je pokemon.*/
function chimcharGame() {
    imageTurtwig.classList.add("fight");
    mainElement.classList.remove("start");
    mainElement.classList.add("Chimchar");
    gameTekst.textContent = "Chimchar is klaar om te vechten.";
    startTekst.textContent = " ";
    document.getElementById("Piplup").src = "Images/chimmie.png";
    /*bron: https://cdn.bulbagarden.net/upload/5/5d/Spr_6x_390.png*/
    buttonStart.remove(this.buttonStart);
    /* If Else die de tegenstander bepaald*/
    if (randomTegenstander >= 1) {
        tegenstanderTurtwig();
    } else {
        tegenstanderPiplup();
    };
    imageTurtwig.classList.add("tegenstander");
    typeAttack.textContent = "Ember(30 power).";
    normalAttack.textContent = "Tackle (25 power).";
    typeAttack.classList.add("Fire");
    jouPokemon.textContent = "Chimchar (Fire) type.";
    audio.play();
    Object.defineProperties(eigenPokemonObject, {
        naam: {
            value: 'Chimchar',
            writable: true
        },
        snelheidPokemon: {
            value: chimcharSnelheid,
            writable: true
        },
        moveNaam: {
            value: 'Ember',
            writable: true
        }
    });
};

/* Button koppelen aan de functie van starten met Chimchar.*/
buttonChimchar.addEventListener("click", chimcharGame);

/* Fuctie die ervoor zorgt dat de Game wordt gestart met Piplup als je pokemon.*/
function piplupGame() {
    imageTurtwig.classList.add("fight")
    mainElement.classList.remove("start");
    mainElement.classList.add("Piplup");
    gameTekst.textContent = "Piplup is klaar om te vechten.";
    startTekst.textContent = " ";
    document.getElementById("Piplup").src = "Images/lup.png";
    /*bron: https://cdn.bulbagarden.net/upload/3/34/Spr_b_6x_393_s.png*/
    buttonStart.remove(this.buttonStart);
    /* If Else die de tegenstander bepaald.*/
    if (randomTegenstander >= 1) {
        tegenstanderTurtwig();
    } else {
        tegenstanderChimchar();
    };
    imageTurtwig.classList.add("tegenstander");
    typeAttack.textContent = "Bubble (30 power).";
    normalAttack.textContent = "Tackle (25 power).";
    typeAttack.classList.add("Water");
    jouPokemon.textContent = "Piplup (Water) type.";
    audio.play();
    Object.defineProperties(eigenPokemonObject, {
        naam: {
            value: 'Piplup',
            writable: true
        },
        snelheidPokemon: {
            value: piplupSnelheid,
            writable: true
        },
        moveNaam: {
            value: 'Bubble',
            writable: true
        }
    });
};

/* Button koppelen aan de functie van starten met Piplup.*/
buttonPiplup.addEventListener("click", piplupGame);

/* Functie die geactiveerd word wanneer Turtwig de tegenstander is.*/
function tegenstanderTurtwig() {
    document.getElementById("Turtwig").src = "Images/wig.png";
    /*bron: https://img.pokemondb.net/sprites/x-y/normal/turtwig.png*/
    imageChimchar.remove(this.Chimchar);
    imageTurtwig.classList.add("tegenstander");
    if (randomerTekst >= 1) {
        gameTekstTwo.textContent = "De tegenstander heeft gekozen voor het grass type Turtwig.";
    }
    else {
        gameTekstTwo.textContent = "Het gras is nog niet zo groen want de tegenstander Turtwig heeft er zin in.";
    };
    tegenstanderPokemon.textContent = "Turtwig (Grass) type. ";
    Object.defineProperties(tegenstanderPokemonObject, {
        naam: {
            value: 'Turtwig',
            writable: true
        },
        snelheidPokemon: {
            value: turtwigSnelheid,
            writable: true
        },
        moveNaam: {
            value: 'Razor leaf',
            writable: true
        }
    });
};

/* Functie die geactiveerd word wanneer Chimchar de tegenstander is.*/
function tegenstanderChimchar() {
    document.getElementById("Turtwig").src = "Images/char.png";
    /*bron: https://img.pokemondb.net/sprites/x-y/normal/chimchar.png*/
    imageChimchar.remove(this.Chimchar);
    imageTurtwig.classList.add("tegenstander");
    if (randomerTekst >= 1) {
        gameTekstTwo.textContent = "Het wordt vurig hier want de tegenstander kiest voor Chimchar.";
    } else {
        gameTekstTwo.textContent = "De vurigheid spat ervan af bij Chimchar die er klaar voor is om je te verslaan.";
    };
    tegenstanderPokemon.textContent = "Chimchar (Fire) type.";
    Object.defineProperties(tegenstanderPokemonObject, {
        naam: {
            value: 'Chimchar',
            writable: true
        },
        snelheidPokemon: {
            value: chimcharSnelheid,
            writable: true
        },
        moveNaam: {
            value: 'Ember',
            writable: true
        }
    });
};

/* Functie die geactiveerd word wanneer Piplup de tegenstander is.*/
function tegenstanderPiplup() {
    document.getElementById("Turtwig").src = "Images/luppie.png";
    /*bron: https://img.pokemondb.net/sprites/x-y/normal/piplup.png*/
    imageChimchar.remove(this.Chimchar);
    imageTurtwig.classList.add("tegenstander");
    if (randomerTekst >= 1) {
        gameTekstTwo.textContent = "Piplup is klaar om te vechten als de pokemon van je tegenstander.";
    } else {
        gameTekstTwo.textContent = "Het water type Piplup ziet er fris en gemotiveerd uit.";
    };
    tegenstanderPokemon.textContent = "Piplup (Water) type.";
    Object.defineProperties(tegenstanderPokemonObject, {
        naam: {
            value: 'Piplup',
            writable: true
        },
        snelheidPokemon: {
            value: piplupSnelheid,
            writable: true
        },
        moveNaam: {
            value: 'Bubble',
            writable: true
        }
    });
};

/* Functie die geactiveerd word als je een normale aanval doet.
Een normale aanval is een simpele aanval die minder schade doet dan de 'type' aanval.*/
function normal() {
    if (eigenPokemonObject.snelheidPokemon > tegenstanderPokemonObject.snelheidPokemon) {
        if (tegenstanderAanvalbepaler()) {
            eigenAanval(25);
            gameTekst.textContent = eigenPokemonObject.naam + " used Tackle.";
        }
    } else {
        if (eigenAanval(25)) {
            gameTekst.textContent = eigenPokemonObject.naam + " used Tackle.";
            tegenstanderAanvalbepaler();
        }
    };
};

/* Button koppelen aan de functie van een normale aanval.*/
normalAttack.addEventListener("click", normal);

/* Functie die geactiveerd word als je een type aanval doet.
Een 'type' aanval is een aanval die meer schade doet dan de normale aanval en gebaseerd is op de type van de pokemon.*/
function type() {
    if (eigenPokemonObject.snelheidPokemon > tegenstanderPokemonObject.snelheidPokemon) {
        if (tegenstanderAanvalbepaler()) {
            eigenAanval(30);
            gameTekst.textContent = eigenPokemonObject.naam + " used " + eigenPokemonObject.moveNaam + '.';
        }
    } else {
        if (eigenAanval(30)) {
            gameTekst.textContent = eigenPokemonObject.naam + " used " + eigenPokemonObject.moveNaam + '.';
            tegenstanderAanvalbepaler();
        }
    };
};

/* Button koppelen aan de functie van een type aanval.*/
typeAttack.addEventListener("click", type);

/* Functie die willekeurig de aanval van de tegenstander bepaald.*/
function tegenstanderAanvalbepaler() {
    var randomAanvalTegenstander = Math.random() * 2;
    if (randomAanvalTegenstander >= 1) {
        tegenstanderAanval(25);
        gameTekstTwo.textContent = "Your opponent used " + 'used Tackle.';
    } else {
        tegenstanderAanval(30);
        gameTekstTwo.textContent = "Your opponent used " + tegenstanderPokemonObject.moveNaam + '.';
    }
    return eigenhealth >= 0;
}

/* Functie die de schade van jouw aanval van de health van de tegenstander afhaalt.*/
function eigenAanval(damage) {
    tegenstanderhealth = tegenstanderhealth - damage;
    healthTegenstander.textContent = "Health:" + tegenstanderhealth + ".";
    /* Wanneer je tegenstander verslagen is*/
    if (tegenstanderhealth <= 0) {
        eigenhealth = 120
        gameTekst.textContent = eigenPokemonObject.naam + " heeft gewonnen.";
        gameTekstTwo.textContent = tegenstanderPokemonObject.naam + " heeft verloren.";
        alert("Je heb gewonnen.");
        location.reload();
    };
    return tegenstanderhealth >= 0;
};

/* Functie die de schade van de tegenstanders aanval van de health van jouw pokemon afhaalt.*/

function tegenstanderAanval(damage) {
    eigenhealth = eigenhealth - damage;
    jouHealth.textContent = "Health:" + eigenhealth + ".";
    /* Wanneer jou pokemon verslagen is*/
    if (eigenhealth <= 0) {
        healthTegenstander = 120
        gameTekst.textContent = eigenPokemonObject.naam + " heeft verloren.";
        gameTekstTwo.textContent = tegenstanderPokemonObject.naam + " heeft gewonnen.";
        alert("Je heb verloren.");
        tegenstanderhealth = 0;
        location.reload();
    };
    return eigenhealth >= 0;
};