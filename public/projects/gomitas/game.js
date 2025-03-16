const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: '¿Cómo definirías tu personalidad?',
        choice1: 'Amigable, espontánea, protectora',
        choice2: 'Organizada, reservada, práctica',
        choice3: 'Segura de ti misma, persuasiva, valiente',
        choice4: 'Creativa, expresiva, espíritu libre',
        answer: 2,
    },
    {
        question: '¿Te gusta hacer ejercicio?',
        choice1: 'Eres respetuoso y comprensiva con tu cuerpo, lo cuidas',
        choice2: 'No es lo que más te gusta, pero con ir al gimnasio de al lado de casa es suficiente',
        choice3: 'Estoy mamadisimo',
        choice4: '¿Ejecicio? ¿Que es eso?',
        answer: 4,
    },
    {
        question: 'Vas caminando en la calle y empieza a llover, ¿qué haces?',
        choice1: 'Corro para buscar dónde cubrirme de la lluvia',
        choice2: 'Sigo caminando bajo la lluvia, sólo es agua',
        choice3: 'Saco mi paragüas, soy inmune a la lluvia',
        choice4: 'me lamento de haber salido',
        answer: 1,
    },
    {
        question: '¿Qué acostumbras hacer los fines de semana?',
        choice1: 'Salir al cine a ver una buena película',
        choice2: 'Quedarme en casa pedir comida y ver una serie o película',
        choice3: 'Visitar un museo, parque o salir de la ciudad',
        choice4: 'una peda de fin de semana',
        answer: 3,
    },
    {
        question: '¿Cuál es tu género favorita de películas?',
        choice1: 'Disfruto mucho las de fantasía',
        choice2: 'Me encanta morir de risa con comedias',
        choice3: 'Amo los romances en las películas',
        choice4: 'No podría vivir sin películas de terror',
        answer: 1,
    },
    {
        question: 'Me preocupo por todo.',
        choice1: 'nop',
        choice2: 'un poco',
        choice3: 'algo',
        choice4: 'bastante',
        answer: 1,
    },
    {
        question: 'Trabajo muy duro',
        choice1: 'nop',
        choice2: 'un poco',
        choice3: 'algo',
        choice4: 'bastante',
        answer: 1,
    },
    {
        question: 'Si estuvieras en una isla desierta ¿Que llevarias?',
        choice1: 'Un hacha',
        choice2: 'Un amigo',
        choice3: 'Una bengala',
        choice4: 'Provisiones de comida enlatada',
        answer: 2,
    }

]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 8

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Pregunta ${questionCounter} de ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()