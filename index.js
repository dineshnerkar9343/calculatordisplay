
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenvalue = '';

for (item of buttons){
    item.addEventListener('click',(F)=> {
        displaytext = F.target.innerText;


if (displaytext=='X'){
    displaytext = '*';
screenvalue += displaytext;
screen.value = screenvalue;

}

else if (displaytext == 'clr'){
    screenvalue = '';
    screen.value = screenvalue;
}

else if (displaytext== '='){
    screen.value = eval(screenvalue);
}

else{
    screenvalue += displaytext;
screen.value = screenvalue;
}

})

}







