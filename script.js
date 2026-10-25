let score = 0;
let current = 0;
let lang = 'en';

const questions = [
  {
    en: {
      q: "What is the full form of RCC?",
      options: ["Reinforced Cement Concrete", "Ready Cement Concrete", "Random Cement Concrete"],
      correct: 0
    },
    bn: {
      q: "RCC এর পূর্ণরূপ কী?",
      options: ["Reinforced Cement Concrete", "Ready Cement Concrete", "Random Cement Concrete"],
      correct: 0
    }
  },
  {
    en: {
      q: "Which soil has the highest bearing capacity?",
      options: ["Clay", "Sand", "Rock"],
      correct: 2
    },
    bn: {
      q: "কোন মাটির বহন ক্ষমতা সবচেয়ে বেশি?",
      options: ["কাদা", "বালি", "পাথর"],
      correct: 2
    }
  },
  {
    en: {
      q: "What is the unit of stress?",
      options: ["N/m²", "N/m", "kg/m³"],
      correct: 0
    },
    bn: {
      q: "স্ট্রেসের একক কী?",
      options: ["N/m²", "N/m", "kg/m³"],
      correct: 0
    }
  },
  {
    en: {
      q: "Which cement is used for mass concreting?",
      options: ["Rapid Hardening", "Low Heat", "Ordinary Portland"],
      correct: 1
    },
    bn: {
      q: "মাস কংক্রিটিং-এ কোন সিমেন্ট ব্যবহার করা হয়?",
      options: ["Rapid Hardening", "Low Heat", "Ordinary Portland"],
      correct: 1
    }
  },
  {
    en: {
      q: "The main function of a foundation is to:",
      options: ["Transfer load to soil", "Decorate the building", "Increase height"],
      correct: 0
    },
    bn: {
      q: "ফাউন্ডেশনের প্রধান কাজ কী?",
      options: ["লোড মাটিতে স্থানান্তর করা", "বিল্ডিং সাজানো", "উচ্চতা বাড়ানো"],
      correct: 0
    }
  },
  {
    en: {
      q: "Which is a type of shallow foundation?",
      options: ["Pile foundation", "Raft foundation", "Well foundation"],
      correct: 1
    },
    bn: {
      q: "কোনটি শ্যালো ফাউন্ডেশনের উদাহরণ?",
      options: ["পাইল ফাউন্ডেশন", "রাফট ফাউন্ডেশন", "ওয়েল ফাউন্ডেশন"],
      correct: 1
    }
  },
  {
    en: {
      q: "Slump test is used to measure:",
      options: ["Strength of concrete", "Workability of concrete", "Durability"],
      correct: 1
    },
    bn: {
      q: "স্লাম্প টেস্ট দিয়ে কী মাপা হয়?",
      options: ["কংক্রিটের শক্তি", "কংক্রিটের ওয়ার্কএবিলিটি", "ডুরাবিলিটি"],
      correct: 1
    }
  },
  {
    en: {
      q: "What is the full form of PCC?",
      options: ["Plain Cement Concrete", "Portland Cement Concrete", "Premium Cement Concrete"],
      correct: 0
    },
    bn: {
      q: "PCC এর পূর্ণরূপ কী?",
      options: ["Plain Cement Concrete", "Portland Cement Concrete", "Premium Cement Concrete"],
      correct: 0
    }
  }
];

document.getElementById('langBtn').onclick = function () {
  lang = lang === 'en' ? 'bn' : 'en';
  this.innerText = lang === 'en' ? 'বাংলা' : 'English';
  if (current > 0 && current < questions.length) showQuestion();
};

function startGame() {
  score = 0;
  current = 0;
  document.getElementById('game').style.display = 'block';
  document.getElementById('score').innerText = "Score: 0";
  showQuestion();
}

function showQuestion() {
  if (current >= questions.length) {
    endGame();
    return;
  }

  const q = questions[current][lang];
  document.getElementById('question').innerText = q.q;

  let html = '';
  q.options.forEach((opt, i) => {
    html += `<button id="btn${i}" onclick="check(${i})">${opt}</button><br>`;
  });
  document.getElementById('options').innerHTML = html;
}

function check(selected) {
  const q = questions[current][lang];
  const buttons = document.querySelectorAll('#options button');

  // সব বাটন ডিজেবল করে দাও
  buttons.forEach(btn => btn.disabled = true);

  if (selected === q.correct) {
    score += 10;
    document.getElementById('btn' + selected).style.background = '#00c853'; // সবুজ
  } else {
    document.getElementById('btn' + selected).style.background = '#ff1744'; // লাল (ভুল)
    document.getElementById('btn' + q.correct).style.background = '#00c853'; // সবুজ (সঠিক)
  }

  document.getElementById('score').innerText = "Score: " + score;

  // ১.৫ সেকেন্ড পর পরের প্রশ্নে যাবে
  setTimeout(() => {
    current++;
    showQuestion();
  }, 1500);
}

function endGame() {
  document.getElementById('question').innerText = lang === 'en' ? "Game Over!" : "গেম শেষ!";
  document.getElementById('options').innerHTML = `
    <h3>Final Score: ${score} / ${questions.length * 10}</h3>
    <button onclick="startGame()">Play Again / আবার খেলো</button>
  `;
}