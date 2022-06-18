let title_screw = document.getElementById("title-screw")
let homeBtn = document.getElementById("home-btn");
let aboutBtn = document.getElementById("about-btn");
let downloadsBtn = document.getElementById("downloads-btn");
let contactBtn = document.getElementById("contact-btn");
let generateBtn = document.getElementById("generate-btn");
let lengthInput = document.getElementById("length");
length;
let isValidLength = true;
let levelInput = document.getElementById("level");
level;
let AnswerInput = document.getElementById("desiredAnswer");
let answer;
let equation_generator_return_values;
let equation_display = document.getElementById("equation-display");
let answer_display = document.getElementById("answer-display");


// /// //////
generateBtn.addEventListener("click", ()=>{
    level = levelInput.value;

if(lengthInput.value == '' || lengthInput.value == ' '){
    isValidLength = true
}else if(lengthInput.value<2 && level == 1){
    isValidLength = false
    alert('Length at level 1 should be greater than 1')
    
}else if(lengthInput.value<3 && level == 2){
    alert('Length at level 2 should be greater than 2')
    isValidLength = false
}else if(lengthInput.value<4 && level == 3){
    alert('Length at level 3 should be greater than 3')
    isValidLength = false
}else{
    length = lengthInput.value
    isValidLength = true
}
////////////////////////
level = levelInput.value
////////////////////////
if(AnswerInput.value == ''){
    answer = 'random'
}else{
    answer = parseFloat(AnswerInput.value)
}
/////////////////////////////////////




if(isValidLength == true){

    equation_generator_return_values = equation_generator(answer, level, length)
    equation_display.innerHTML = equation_generator_return_values[0];
    answer_display.innerHTML = equation_generator_return_values[2];


        title_screw.style.animation = 'screw-rotate  1s ease-out forwards'
        setTimeout(()=>{
        title_screw.style.animation = 'none';
        }, 1000)

}
})

















///
window.addEventListener("load", ()=>{
    homeBtn.style.borderBottom = '5px solid white'
})

homeBtn.addEventListener("click",()=>{
homeBtn.style.borderBottom = '5px solid white'
aboutBtn.style.borderBottom = 'none'
downloadsBtn.style.borderBottom = 'none'
contactBtn.style.borderBottom = 'none'
})
aboutBtn.addEventListener("click",()=>{
homeBtn.style.borderBottom = 'none'
aboutBtn.style.borderBottom = '5px solid white'
downloadsBtn.style.borderBottom = 'none'
contactBtn.style.borderBottom = 'none'
})
downloadsBtn.addEventListener("click",()=>{
homeBtn.style.borderBottom = 'none'
aboutBtn.style.borderBottom = 'none'
downloadsBtn.style.borderBottom = '5px solid white'
contactBtn.style.borderBottom = 'none'
})
contactBtn.addEventListener("click",()=>{
homeBtn.style.borderBottom = 'none'
aboutBtn.style.borderBottom = 'none'
downloadsBtn.style.borderBottom = 'none'
contactBtn.style.borderBottom = '5px solid white'
})