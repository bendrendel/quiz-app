import Question from './modules/question.js';
import results from './modules/results.js';

const body = document.querySelector('body');
const quizDeck = [
    new Question('Which language runs in a web browser?', ['Java', 'C', 'Python', 'JavaScript'], 3),
    new Question('What does CSS stand for?', ['Central Style Sheets', 'Cascading Style Sheets', 'Cascading Simple Sheets', 'Cars SUVs Sailboats'], 1),
    new Question('What does HTML stand for?', ['Hypertext Markup Language', 'Hypertext Markdown Language', 'Hyperloop Machine Language', 'Helicopters Terminals Motorboats Lamborginis'], 0),
    new Question('What year was JavaScript launched?', ['1996', '1995', '1994', 'none of the above'], 1)
];
let currentQuestion = 0;
let rightAnswers = 0;

runQuiz();

function runQuiz() {
    if (currentQuestion < quizDeck.length) {
        const form = quizDeck[currentQuestion].form;
        body.innerHTML = '';
        body.append(form);

        form.addEventListener('submit', e => {
            e.preventDefault();
            if (quizDeck[currentQuestion].checkAnswer(e.currentTarget.elements['answer'].value)) {
                rightAnswers++;
            };
            currentQuestion++;
            displayForm(currentQuestion);
        })
    } else {
        const form = results(quizDeck.length, rightAnswers);
        body.innerHTML = '';
        body.append(form);

        form.addEventListener('submit', e => {
            e.preventDefault();
            location.reload();
        })
    }
};