// three levels
// level 1 = elementry school math
// level 2 = calculus I
// level 3 = calculus II

// INSTRUCTIONS: the function takes THREE paremeters: 
// 1. first one is the Answer you want the random equation to have
// 2. second one is the level of the equation
// 3. third one is the length of the equation
// ALL paremeters can be randomized by setting them to 'random'
//when 'length is set to 'random' equation will be anywhere between 6 & 10 operations long
// IMPORTANT: minimum length should be equal to (level+1)


// times, radical, plus, minus, divide, square
// HTML code :['&#215', '&#8730', '&#43', '&#8722', '&#247', '&#178' ]

let Math_operations = [
                        [ '+', '-', '*', '/', '**2', '**(1/2)' ],
                        ['cos', 'sin', 'tan', 'arccos', 'arcsin', 'arctan' ],
                        [ 'log', 'e', 'pi', 'ln', 'exp']
                    ]




function equation_generator(Answer, level, length){
Equation = []
EquationString = [] 

    if((length == 'random' || length == '' || length == ' ' )){
    length = Math.trunc(Math.random()*(10 - 6) + 6)
}
    if(Answer!='random'){
        length = length-1
    }




if(level == 'random' || level == ' ' || level == ''){
    level = 123;
}else if(level == 1 || level == '1'){
    level = 1;
}else if(level == 2 || level == '2'){
    level = 2;
}else if(level == 3 || level == '3'){
    level = 3;
}   




        
        x = Math.trunc((Math.trunc(Math.random()*9+1))**2)
        Equation.push(' '+x+'')
        EquationString.push(' '+x+'')


        if(level == 2){
            length= length*0.5
        }else if(level == 3){
            length= length*0.5
        }
        for(i = 1; i<length; i++){
        
            if(level == 1 ){
                Random_Operator = Math_operations[level-1][Math.trunc(Math.random()*Math_operations[level-1].length)];

            }else if(level == 2){
                Random_Operator = Math_operations[level-2][Math.trunc(Math.random()*Math_operations[level-2].length)];
                Random_Operator_two = Math_operations[level-1][Math.trunc(Math.random()*Math_operations[level-1].length)];

            }else if(level == 3){
                Random_Operator = Math_operations[level-3][Math.trunc(Math.random()*Math_operations[level-3].length)];
                Random_Operator_two = Math_operations[level-2][Math.trunc(Math.random()*Math_operations[level-2].length)];
                Random_Operator_three = Math_operations[level-1][Math.trunc(Math.random()*Math_operations[level-1].length)];
            }
        

        if(Random_Operator == '*'){
            let a = Math.trunc((Math.trunc(Math.random()*100+1)))
            Equation.push(' '+Random_Operator + ' '+ a)
            EquationString.push(' '+ '&#215'+' ' + a)
            
        }else if(Random_Operator == '/'){
            let b = Math.trunc((Math.trunc(Math.random()*100+1)))
            Equation.push(' '+Random_Operator + ' '+ b)
            EquationString.push(' '+ '&#247'+' ' + b)
            
        }else if(Random_Operator == '+'){
            let c = Math.trunc((Math.trunc(Math.random()*100+1)))
            Equation.push(' '+Random_Operator + ' '+ c)
            EquationString.push(' '+ '&#43'+' ' + c)
            
        }else if(Random_Operator == '-'){
            let d = Math.trunc((Math.trunc(Math.random()*100+1)))
            Equation.push(' '+Random_Operator + ' '+ d)
            EquationString.push(' '+ '&#8722'+' ' + d)
            
        }else if(Random_Operator == '**2'){
            let e = Math.trunc((Math.trunc(Math.random()*100+1)))
            Equation.push(' '+Random_Operator +'+'+ ' '+ e)
            EquationString.push( '&#178'+'&#43'+'  ' + e)
            
        }else if(Random_Operator == '**(1/2)'){
            let f = Math.trunc((Math.trunc(Math.random()*100+1)))
            Equation.push(' + ' + ' '+ f+Random_Operator)
            EquationString.push(' + '+ '&#8730'+'(' + f+') ')
            
        }
        //
        if(level == 2){
        if(Random_Operator_two =='cos'){
            let g = Math.trunc((Math.trunc(Math.random()*100+1)))
            Equation.push(' + ' + ' '+ Math.cos(g))
            EquationString.push(' + '+ 'cos(' + g+') ')
        }else if(Random_Operator_two =='sin'){
            let g = Math.trunc((Math.trunc(Math.random()*100+1)))
            Equation.push(' + ' + ' '+ Math.sin(g))
            EquationString.push(' + '+ 'sin(' + g+') ')
        }else if(Random_Operator_two =='tan'){
            let g = Math.trunc((Math.trunc(Math.random()*100+1)))
            Equation.push(' + ' + ' '+ Math.tan(g))
            EquationString.push(' + '+ 'tan(' + g+') ')
        }else if(Random_Operator_two =='arccos'){
            let g = Math.round(Math.random())
            Equation.push(' + ' + ' '+ Math.acos(g))
            EquationString.push(' + '+ 'cos<sup>-1</sup>(' + g+') ')
        }else if(Random_Operator_two =='arcsin'){
            let g = Math.round(Math.random())
            Equation.push(' + ' + ' '+ Math.asin(g))
            EquationString.push(' + '+ 'sin<sup>-1</sup>(' + g+') ')
        }else if(Random_Operator_two =='arctan'){
            let g = Math.trunc((Math.trunc(Math.random()*100+1)))
            Equation.push(' + ' + ' '+ Math.atan(g))
            EquationString.push(' + '+ 'tan<sup>-1</sup>(' + g+') ')
        }
        }
        if(level == 3){
            if(Random_Operator_three =='log'){
            let g = Math.trunc(Math.random()*100+1)
            Equation.push(' + '+ Math.log(g))
            EquationString.push(' + '+ 'log(' + g+') ')
            }else if(Random_Operator_three =='e'){
            Equation.push(' + '+ Math.E)
            EquationString.push(' + '+  'e')
            }else if(Random_Operator_three =='pi'){
            Equation.push(' + ' + Math.PI)
            EquationString.push(' + '+ '&#x213C')
            }else if(Random_Operator_three =='exp'){
            let g = (Math.trunc(Math.random()*10))
            Equation.push(' + '+ Math.exp(g))
            EquationString.push(' + '+ '(e' +'<sup>'+ g +'</sup>)')
            }else if(Random_Operator_three =='ln'){
            let g = Math.round(Math.random())
                if(g == 0){
                    Equation.push(' + '+ Math.LN2)
                    EquationString.push(' + '+ 'ln(2)')
                }else{
                    Equation.push(' + '+ Math.LN10)
                    EquationString.push(' + '+ 'ln(10)')
                }
            
            }
        }
    }


    if(Answer=='random'){
    Answer = eval(Equation.join('')).toFixed(2)
    values = [EquationString.join(''), Equation.join(''), Answer ]
    }else{
    let evaluated = parseFloat(eval(Equation.join(''))).toFixed(2)
    let randomOperation = Math.round(Math.random())

        if(Answer > evaluated){
            if(randomOperation == 0){
                difference =  ((Answer - evaluated)**(1/2)).toFixed(2)
                Equation.push(' + ' + ' '+ difference+'**2')
                EquationString.push(' + ' + ' '+ difference + '&#178')
            }else{
                difference =  ((Answer - evaluated)**(2)).toFixed(2)
                Equation.push(' + ' + ' '+ difference+'**(1/2)')
                EquationString.push(' + ' + ' '+'&#8730'+'('+ difference +') ')
            }

        }else if(Answer <  eval(Equation.join('')).toFixed(2)){
            if(randomOperation == 0){
                difference =  ((evaluated - Answer)**(2)).toFixed(2)
                Equation.push(' - ' + ' '+ difference+'**(1/2)')
                EquationString.push(' - '+' '+ '&#8730'+'('+ difference +') ')
            }else{
                difference =  ((evaluated - Answer)**(1/2)).toFixed(2)
                Equation.push(' - ' + ' '+ difference+'**(2)')
                EquationString.push(' - '+' '+ difference + '&#178')
            }
        }
            Answer = eval(Equation.join('')).toFixed(2)
            values = [EquationString.join(''), Equation.join(''), Answer ]

    }


return   values
} //end of equation_generator function







// when paremeters set to random, 'equation_generator' returns three values in an array:
//  1. first value is the random equation as a STRING formatted in a USER_FRIENDLY way(using mathematecal operators readble by HUMANS)
//  2. second value is the same random equation formated in a COMPUTER FRIENDLY way(using mathematecal operators readble by COMPUTERS)
//  3. third value is the ANSWER of the same random equation 


// EXAMPLE 
// equation_generator_return_values = equation_generator('random', 'random', 'random')

// htmlElement.innerHTML +=  equation_generator_return_values[0] + ' = '+equation_generator_return_values[2]


















































