const quizDB=[
    {
        question:"1. Feeling nervous, anxious, or on edge",
        a:"SEVERAL DAYS",
        b:"NOT AT ALL",
        ans:"ans2"
    },
    {
        question:"2. Worrying too much about different things",
        a:"SEVERAL DAYS",
        b:"NOT AT ALL",
        ans:"ans2"
    },
    {
        question:"3. Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
        a:"SEVERAL DAYS",
        b:"NOT AT ALL",
        ans:"ans2"
    },
    {
        question:"4. Trouble concentrating on things, such as reading the newspaper or watching television",
        a:"SEVERAL DAYS",
        b:"NOT AT ALL",
        ans:"ans2"
    },
    {
        question:"5. Thoughts that you would be better off dead, or of hurting yourself",
        a:"SEVERAL DAYS",
        b:"NOT AT ALL",
        ans:"ans2"
    },
    {
        question:"6. Trouble falling or staying asleep, or sleeping too much",
        a:"SEVERAL DAYS",
        b:"NOT AT ALL",
        ans:"ans2"
    },
    {
        question:"7. Feeling lonely or isolated?",
        a:"SEVERAL DAYS",
        b:"NOT AT ALL",
        ans:"ans2"
    },
    {
        question:"8. Felling hopeless?",
        a:"SEVERAL DAYS",
        b:"NOT AT ALL",
        ans:"ans2"
    },
    {
        question:"worried so much about your future",
        a:"SEVERAL DAYS",
        b:"NOT AT ALL",
        ans:"ans2"
    },
    {
        question:"Don't find interest in your hobbies that you loved to do before?",
        a:"SEVERAL DAYS",
        b:"NOT AT ALL",
        ans:"ans2"
    },
]

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');

const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');

const showScore=document.querySelector('#showScore');

let questionCount=0;
let score=0;

const loadQuestion = () => {
    const questionList=quizDB[questionCount]
    question.innerText= questionList.question;

    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
   
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll=()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}

submit.addEventListener('click', () => {
    const checkedanswer=getCheckAnswer();
    console.log(checkedanswer);

    if(checkedanswer== quizDB[questionCount].ans){
        score++;
    };

    questionCount++;
    deselectAll();

    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`
        <h3>YOUR SCORE IS ${score}/${quizDB.length} <br>If your score is less than 5 then you need to see a doctor</h3>
        
        <button class="btn" onclick="location.reload()"> Start again</button>
        `;
        showScore.classList.remove('scoreArea');
    };
});
