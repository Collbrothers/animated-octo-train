const btn = getElementById('changebtn');//Gets the button.

//Creates two variables to see which mode is currently applied.
let darkmode = false;
let lightmode = true;

//Adds an eventlistener to the button which listens for the click event.
btn.addEventlistener('click', function () {
    //Checks if lightmode is true.
    if(lightmode) {
        document.body.classList.add('darkmode');//Changes the bodys applied class to darkmode.
        //Switches the values of the variables to the opposite.
        darkmode = true;
        lightmode = false;
    }
    else{
        document.body.classList.add('lightmode');//Changes the bodys applied class to lightmode.
        //Switches the values of the variables to the opposite.
        darkmode = false;
        lightmode = true;  
    }
})
