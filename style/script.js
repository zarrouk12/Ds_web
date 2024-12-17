const quizData = [
    {
        question: "Quel langage s'exécute dans un navigateur Web?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "Que signifie CSS?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "Que signifie HTML?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "En quelle année JavaScript a été lancé?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "Aucune de ces réponses",
        correct: "b",
    },
    {
        question: "Lesquels de ces éléments sont tous des éléments <table>?",
        a: "<table><tr><tt>",
        b: "<thead><body><tr>",
        c: "<table><tr><td>",
        d: "<table><head><tfoot>",
        correct: "c",
    },
    {
        question: "Quel est le code HTML correct pour faire référence à une feuille de style externe ?",
        a: "<style src='mystyle.css'>",
        b: "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
        c: "<stylesheet>mystyle.css</stylesheet>",
        d: "Aucune de ces réponses",
        correct: "b",
    },
    {
        question: "Quel attribut HTML est utilisé pour définir les styles en ligne?",
        a: "style",
        b: "styles",
        c: "class",
        d: "font",
        correct: "a",
    },
    {
        question: "Dans quel élément HTML met-on le JavaScript?",
        a: "<scripting>",
        b: "<javascript>",
        c: "<script>",
        d: "<js>",
        correct: "c",
    },
    {
        question: "Comment écrivez-vous 'Hello World' dans une boîte d'alerte?",
        a: "msgBox('Hello World');",
        b: "alertBox('Hello World');",
        c: "alert('Hello World');",
        d: "msg('Hello World');",
        correct: "c",
    },
    {
        question: "Choisissez l'élément HTML correct pour définir le texte mis en évidence",
        a: "<i>",
        b: "<italic>",
        c: "<em>",
        d: "Aucune de ces réponses",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Tu as répondu ${score}/${quizData.length} questions correctement</h2>
           <button class="butt" onclick="location.reload()">Répéter</button>
           `
       }
    }
})