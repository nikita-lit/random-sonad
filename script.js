// Massiiv sisaldab hajusrakenduste sõnavara eesti ja vene keeles
const words = [
    { et: "server", ru: "сервер" },
    { et: "klient", ru: "клиент" },
    { et: "andmebaas", ru: "база данных" },
    { et: "võrk", ru: "сеть" },
    { et: "päring", ru: "запрос" },
    { et: "vastus", ru: "ответ" },
    { et: "andmed", ru: "данные" },
    { et: "rakendus", ru: "приложение" },
    { et: "hajusrakendus", ru: "распределённое приложение" },
    { et: "pilveteenus", ru: "облачный сервис" },
    { et: "ühendus", ru: "соединение" },
    { et: "turvalisus", ru: "безопасность" },
    { et: "kasutaja", ru: "пользователь" },
    { et: "liides", ru: "интерфейс" },
    { et: "protokoll", ru: "протокол" },
    { et: "sõlm", ru: "узел" },
    { et: "teenus", ru: "сервис" },
    { et: "serveripäring", ru: "запрос к серверу" },
    { et: "andmevahetus", ru: "обмен данными" },
    { et: "veebirakendus", ru: "веб-приложение" }
];

//Muutujad hoiavad hetkel kuvatavaid eesti- ja venekeelseid sõnapaare
let currentET;
let currentRU;

// Funktsioon valib Math.random() abil massiivist juhusliku sõnapaari
function randomWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
}

function newWords() {
    // Uute sõnade genereerimisel uuendatakse mõlema tabeliveeru sisu
    currentET = randomWord();
    currentRU = randomWord();

    //Sisestusväljad ja eelmised tulemused tühjendatakse uue ülesande alustamisel
    document.getElementById("estonianWord").textContent =
    currentET.et;

    document.getElementById("russianWord").textContent =
    currentRU.ru;

    document.getElementById("russianAnswer").value = "";
    document.getElementById("estonianAnswer").value = "";

    document.getElementById("russianResult").textContent = "";
    document.getElementById("estonianResult").textContent = "";
}

// Normaliseerimine eemaldab liigsed tühikud ning muudab teksti väiketähtedeks
function normalize(text) {
    return text.trim().toLowerCase().replace(/\s+/g, " ");
}

// Venekeelse vastuse kontrollimisel võrreldakse kasutaja sisestust õige tõlkega.
function checkRussian() {
    const answer = normalize(
        document.getElementById("russianAnswer").value
    );

    const result = document.getElementById("russianResult");

    if (answer === normalize(currentET.ru)) {
        result.textContent = "Õige vastus!";
        result.className = "correct";
    } else {
        result.textContent = "Vale! Õige vastus: " + currentET.ru;
        result.className = "incorrect";
    }
}

//Eestikeelse vastuse kontrollimisel kuvatakse õige või vale vastuse teade
function checkEstonian() {
    const answer = normalize(
        document.getElementById("estonianAnswer").value
    );

    const result = document.getElementById("estonianResult");

    if (answer === normalize(currentRU.et)) {
        result.textContent = "Õige vastus!";
        result.className = "correct";
    } else {
        result.textContent = "Vale! Õige vastus: " + currentRU.et;
        result.className = "incorrect";
    }
}

// Lehe laadimisel genereeritakse automaatselt esimesed juhuslikud sõnad
newWords();
