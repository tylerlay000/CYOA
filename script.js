var myQuestions = [
    {
        question: "Which Hokage sealed the nine-tailed fox inside Naruto",
        answers: {
            a: '2nd Hokage',
            b: '4th Hokage',
            c: '3rd Hokage',
            d: '1st Hokage'
        },
        correctAnswer: 'b'
    },
    {
        question: "Who tricked Naruto into stealing a sacred scroll?",
        answers: {
            a: 'Zabuza',
            b: 'Iruka',
            c: 'Mizuka',
            d: 'Sasuke'
        },
        correctAnswer: 'c'
    },
    {
        question: "Which character can only use taijutsu?",
        answers: {
            a: 'Naruto Uzumaki',
            b: 'Gara',
            c: 'Sasuke',
            d: 'Rock Lee'
        },
        correctAnswer: 'd'
    },
    {
        question: "Naruto first shows his nine-tails chakra when he fights who?",
        answers: {
            a: 'Haku',
            b: 'Gara',
            c: 'Sasuke',
            d: 'Neji'
        },
        correctAnswer: 'a'
    },
    {
        question: "What is the forbidden technique used by Rock Lee that he used on Dosu and Gara?",
        answers: {
            a: 'Shadow Lotus',
            b: 'Lotus of Destruction',
            c: 'Fiery Lotus',
            d: 'Primary Lotus'
        },
        correctAnswer: 'd'
    },
    {
        question: "Sasuke's goal is gain enough power to kill whem?",
        answers: {
            a: 'Naruto',
            b: 'The third hokage',
            c: 'Neji',
            d: 'Itachi'
        },
        correctAnswer: 'd'
    },
    {
        question: "What does Chidor mean?",
        answers: {
            a: '10 thousand stones',
            b: '5 hundred punched',
            c: '1 thousand birds',
            d: '500 swords'
        },
        correctAnswer: 'c'
    },
    {
        question: "Which of the legendary sannin becomes the fifth Hokage?",
        answers: {
            a: 'Tsunade',
            b: 'Orochimaru',
            c: 'Jiraya',
            d: 'Naruto'
        },
        correctAnswer: 'a'
    },
    {
        question: "D-rank missions are usually given to what level of schinobi?",
        answers: {
            a: 'Churin',
            b: 'Hokage',
            c: 'Jonin',
            d: 'Genin'
        },
        correctAnswer: 'd'
    },
    {
        question: "What is the relationship between Naruto and Iruka?",
        answers: {
            a: 'Iruka was Naruto teacher',
            b: 'Were both class clowns in school',
            c: 'Their parents were killed when they were younger',
            d: 'All of these'
        },
        correctAnswer: 'd'
    },
    
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        
        var output = [];
        var answers;

      
        for(var i=0; i<questions.length; i++){
            
            
            answers = [];

            
            for(letter in questions[i].answers){

               
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
      
        var userAnswer = '';
        var numCorrect = 0;
        
      
        for(var i=0; i<questions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
         
            if(userAnswer===questions[i].correctAnswer){
              
                numCorrect++;
                
                answerContainers[i].style.color = 'lightgreen';
            }
           
            else{
              
                answerContainers[i].style.color = 'red';
            }
        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

  
    showQuestions(questions, quizContainer);
    
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}

