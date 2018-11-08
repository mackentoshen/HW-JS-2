'use strict';

var a = 'function test(){ alert(); }';
var b = 'function test)({ alert(); }';

function js(text){
    var i,
        l = text.length,
        char,
        last,
        stack = [];

    for(i=0; i<l; i++){
        char = text[i];

        if(char == "{" || char == "("){
            stack.push(char);
        }else if(char == "}" || char == ")"){
            if(stack.length>0){
                last = stack[stack.length-1];
                if ((char == '}' && last == "{") || (char == ')' && last == '(')) {
                    stack.pop();
                }
            }
        }
    }

    return stack.length == 0;
}

console.log(js(a));
console.log(js(b));
