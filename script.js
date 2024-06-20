const question=[
    {
       question:"Number of primitive data types in Java are?",
       answers:[
        {Text:"6",correct:false},
        {Text:"7",correct:false},
        {Text:"8",correct:true},
        {Text:"9",correct:false}
       ]
    },
    {
        question:"What is the size of float and double in java ",
        answers:[
         {Text:"32 and 64",correct:true},
         {Text:"32 and 32",correct:false},
         {Text:"64 and 64",correct:false},
         {Text:"64 and 32",correct:false},
        ]
     },
     {
        question:"Automatic type conversion is possible in which of the possible cases?",
        answers:[
         {Text:"Byte to int",correct:false},
         {Text:"Int to long",correct:true},
         {Text:"Long to int",correct:false},
         {Text:"Short to int",correct:false},
        ]
     }, 
      {
        question:"Select the valid statement",
        answers:[
         {Text:"char[] ch=new char(5)",correct:false},
         {Text:"char[] ch=new char[5]",correct:true},
         {Text:"char[] ch =new char()",correct:false},
         {Text:"char[] ch=new char[]",correct:false},
        ]
     },
     {
        question:"When an array is passed to a method, what does the method receive?",
        answers:[
         {Text:"The reference of the array",correct:true},
         {Text:"A copy of the array",correct:false},
         {Text:"Length of the array",correct:false},
         {Text:"Copy of first element",correct:false},
        ]
     },
     {
        question:"Arrays in java are-",
        answers:[
         {Text:"Object references",correct:false},
         {Text:"objects",correct:true},
         {Text:"Primitive data type",correct:false},
         {Text:"None",correct:false},
        ]
     }
];

const questionElement=document.getElementById("question");
const answer_btn=document.getElementById("answer-button");
const nextBtn=document.getElementById("next-btn");


let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextBtn.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    let currentQuestion=question[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
  questionElement.innerHTML=questionNo+". "+currentQuestion.question;
   
  
   for (const answer of currentQuestion.answers) {
        const button=document.createElement("button");
        button.innerHTML=answer.Text;
        button.classList.add('btn');
        answer_btn.append(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',(e)=>{
            const selectBtn=e.target;

            const isCorrect=button.dataset.correct=="true";
            if(isCorrect){
                selectBtn.classList.add("Correct");
                score++;
            }
            else{
                selectBtn.classList.add("Incorect")
                
            }
            
            for (const button of answer_btn.children) {
                if(button.dataset.correct=="true"){
                    button.classList.add("Correct");
                }
                button.disabled=true;
                
            }
             nextBtn.style.display='block';
        })

   }
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${question.length}!`;
    nextBtn.innerHTML="Play Again";
    nextBtn.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<question.length){
        resetState();
        showQuestion();
    }
    else{
        showScore();
    }
}


nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex<question.length){
          handleNextButton();
    }
    else{
        startQuiz();
    }
})

function resetState(){
    while(answer_btn.firstChild){
        answer_btn.removeChild(answer_btn.firstChild);
    }
}
resetState();
startQuiz();

