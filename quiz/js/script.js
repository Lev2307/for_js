const questionsForQuiz = [
	{
		question: "1) Кто был первым американским президентом?",
		a: 'Джордж Ваншингтон',
		b: 'Авраам Линкольн',
		c: 'Джордж Герберт Уокер Буш',
		d: 'Теодор Рузвельт',
		correct: 'a'
	},
	{
		question: "2) В каком году началась вторая Мировая война?",
		a: '1939',
		b: '1938',
		c: '1940',
		d: '1941',
		correct: 'a'
	},
    {
        question: "3) Кто был первым императором Священной Римской империи?",
		a: 'Гай Юлий Цезарь',
		b: 'Тиберий',
		c: 'Нерон',
		d: 'Октавиан Август',
        correct: 'd'
    },
    {
        question: "4) Когда был создан YouTube?",
		a: '2004',
		b: 'апрель 2005',
		c: 'февраль 2005',
		d: 'май 2006',
        correct: 'c'
    },
    {
        question: "5) У какого актёра больше всего оскаров?",
		a: 'Сильвестер Сталлоне',
		b: 'Кэтрин Хепбёрн',
		c: 'Леонардо ди Каприо',
		d: 'Том Харди',
        correct: 'b'
    }
];
const quiz_container = document.querySelector('.quiz-container');
const questionEl = document.getElementById('question');
const lableA = document.getElementById('a_text')
const lableB = document.getElementById('b_text')
const lableC = document.getElementById('c_text')
const lableD = document.getElementById('d_text')
const AnsList = document.querySelectorAll('.ansList');
const submit = document.getElementById('submit');

let countQuest = 0;
let correct_answers = 0;

loadQuestion();
function loadQuestion() {
	const qfq = questionsForQuiz[countQuest];
	questionEl.innerHTML = qfq.question;
	lableA.innerHTML = qfq.a;
	lableB.innerHTML = qfq.b;
	lableC.innerHTML = qfq.c;
	lableD.innerHTML = qfq.d;
}

const getCheckedAnswer = () => {
	let answer;
	AnsList.forEach((AnsCurrent) => {
		if(AnsCurrent.checked) {
			answer = AnsCurrent.id;
		}
	});
	return answer
}
function deselectAll() {
	for(let i = 0; i < AnsList.length; i++) {
		AnsList[i].checked = false;
	}
}
// const deselectAll = () => {
// 	AnsList.forEach((currentAns) => currentAns.checked = false);
// 	
// }
submit.addEventListener('click', () => {
	const qFq = questionsForQuiz[countQuest];
	const checkedAnswer = getCheckedAnswer();
	if(checkedAnswer === qFq.correct) {
		correct_answers++;
	}
	countQuest++;
	deselectAll();
	if(countQuest < questionsForQuiz.length) {
		loadQuestion();
	} else {
		if(correct_answers === questionsForQuiz.length) {
			quiz_container.innerHTML = `<div class="circle"><h2 class="correct_answers">${correct_answers}/${questionsForQuiz.length}</h2></div>
			<div class="bottom">
			<h4 class="perfect">Превосходно! Вы ответили правильно на все вопросы! =)</h4>
			<button class="back" onclick="location.reload()">Вернуться на главную страницу</button>
			</div>`
		}
		if (correct_answers === 4) {
		quiz_container.innerHTML = `<div class="circle"><h2 class="correct_answers">${correct_answers}/${questionsForQuiz.length}</h2></div>
		<div class="bottom">
		<h4 class="answer">Вы ответили правильно на ${correct_answers} вопроса. Хороший результат! =)</h4>
		<button class="back" onclick="location.reload()">Вернуться на главную страницу</button>
		</div>`
		} else if(correct_answers === 3) {
			quiz_container.innerHTML = `<div class="circle"><h2 class="correct_answers">${correct_answers}/${questionsForQuiz.length}</h2></div>
			<div class="bottom">
			<h4 class="answer">Вы ответили правильно на ${correct_answers} вопроса. Неплохо!</h4>
			<button class="back" onclick="location.reload()">Вернуться на главную страницу</button>
			</div>`
		} else if(correct_answers === 2) {
			quiz_container.innerHTML = `<div class="circle"><h2 class="correct_answers">${correct_answers}/${questionsForQuiz.length}</h2></div>
			<div class="bottom">
			<h4 class="answer">Вы ответили правильно на ${correct_answers} вопроса. Не повезло =(</h4>
			<button class="back" onclick="location.reload()">Вернуться на главную страницу</button>
			</div>`
		} else if(correct_answers === 1) {
			quiz_container.innerHTML = `<div class="circle"><h2 class="correct_answers">${correct_answers}/${questionsForQuiz.length}</h2></div>
			<div class="bottom">
			<h4 class="answer">Вы ответили правильно на ${correct_answers} вопроса. Похоже сегодня не ваш день =(</h4>
			<button class="back" onclick="location.reload()">Вернуться на главную страницу</button>
			</div>`
		}
	}
})