
//Start of traversy javascript course code
const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users');


myform.addEventListener('submit', onSubmit);


function onSubmit(e){ //e is an event parameter
    e.preventDefault();


    if(nameInput.value === '' || emailInput.value === ''){
        //alert('Pleas enter fields');//alert are not really functional and ugl so we use the following
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
         

        setTimeout(() => msg.remove(), 3000);//set a time for the msg to disapear
    }else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
        userlist.appendChild(li);


        //clear fields forms after the data is entered
        nameInput.value = '';
        emailInput.value ='';
    }//this if statement to let the user know if their infos registered
}






// END of traversy







//start of programming with mosh



var bruh = 'blab lahalkea';
document.write(bruh.length);


let Colors = ['red', 'green', 'yellow'];
    Colors.push('purple');
    Colors[0]= 'orange';
console.log(Colors);
console.log(Colors.length);




let name ='Youness';

function test(){
    console.log('whats up brother ' + name  )
}
test();



//length is property


//end of mosh
/*04 aout 2020 ! program number 1*/
//this is a program i made that take a text from a page, count it and then display it
function coun(){
    
  const tar = document.getElementById("target").innerHTML; // locate the target text we want to count and store it in the tar var
  const num = tar.length; //count it and store that count in the num var
  document.getElementById("output").innerHTML = num; //locate where to display it and display it
  
  
}
