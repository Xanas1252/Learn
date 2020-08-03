
/***********************************************07 july 2020 ***************************************/ 


//what i made
/*const scrl = document.querySelector('header');
scrl.addEventListener('scroll', (e) =>{
    e.preventDefault();
    document.querySelector('header').style.background = '#ccc';
         
    
}); */


//what w3school made 


// When the user scrolls down 50px from the top of the document, resize the header and it's h2 font size


function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").style.fontSize = "2em";
    document.querySelector('header').style.height = "150px"; //i wrote this one
  } else {
    document.getElementById("logo").style.fontSize = "3em";
    document.querySelector('header').style.height = "100px"; //i wrote this one

  }
}

