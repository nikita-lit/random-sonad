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

let currentET;
let currentRU;

function randomWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
}

function newWords() {
    currentET = randomWord();
    currentRU = randomWord();

    document.getElementById("estonianWord").textContent =
    currentET.et;

    document.getElementById("russianWord").textContent =
    currentRU.ru;

    document.getElementById("russianAnswer").value = "";
    document.getElementById("estonianAnswer").value = "";

    document.getElementById("russianResult").textContent = "";
    document.getElementById("estonianResult").textContent = "";
}

function normalize(text) {
    return text.trim().toLowerCase().replace(/\s+/g, " ");
}

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

newWords();
