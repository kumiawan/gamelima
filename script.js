const questions = [
    {
        question: "huruf apakah ini م",
        images: "./assets/images/lvl1/mim.png",
        options: ["mim", "Ba`", "Ta`", "Tsa`"],
        answer: "mim"
    },
    {
        question: "huruf apakah ini ح",
        images: "./assets/images/lvl1/kha.png",
        options: ["Sin", "Shad", "Ha`", "Kha`"],
        answer: "Ha`"
    },
    // Tambahkan pertanyaan lainnya
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const imageElement = document.getElementById("image");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    imageElement.src = currentQuestion.images;
    optionsElement.innerHTML = ""; // Kosongkan pilihan sebelumnya

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200";
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

// Function untuk memeriksa jawaban
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        addScore(); // Tambahkan 5 skor jika jawaban benar
        resultElement.textContent = "Jawaban Benar!";
    } else {
        resultElement.textContent = "Jawaban Salah! Jawaban yang benar adalah: " + currentQuestion.answer;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            resultElement.textContent = ""; // Kosongkan hasil sebelumnya
            displayQuestion();
        }, 2000); // Tampilkan hasil selama 2 detik sebelum melanjutkan
    } else {
        displayFinalScore(); // Tampilkan hasil akhir
    }
}

// Function untuk menambahkan skor
function addScore() {
    score += 5; // Tambahkan 5 skor
    scoreElement.textContent = `Skor: ${score}`;
}

// Function untuk mengatur skor awal
function setInitialScore() {
    score = 0;
    scoreElement.textContent = `Skor: ${score}`;
}

// Function untuk menampilkan hasil akhir
function displayFinalScore() {
    resultElement.textContent = `Permainan Selesai! Skor Anda: ${score}`;
}

// 
const audio = document.getElementById('background-audio');

// Function to play audio
function playAudio() {
    audio.play();
}

// Function to pause audio
function pauseAudio() {
    audio.pause();
}

setInitialScore(); // Atur skor awal
displayQuestion(); // Tampilkan pertanyaan pertama
