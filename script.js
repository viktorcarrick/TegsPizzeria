var btn = document.getElementById("myBtn");
console.log(btn);
btn.addEventListener("click",getRandomFoodItem);


function getRandomFoodItem() {
    console.log("button was pressed");
    /* Array containing different menu categories*/ 
    const array = [
        "Du ska äta Pizza!",
        "Du ska äta Rullpizza!",
        "Du ska äta Inbakad pizza!",
        "Du ska äta Amerikansk pizza!", 
        "Du ska äta en Grillrätt!",
        "Du ska äta Hamburgare!",
        "Du ska äta Sallad!",
        "Du ska äta Pommestallrik!"
    ]
    /* Selects a random index from the array*/ 
    const randomItem = array[Math.floor(Math.random()*(array.length))];
    console.log(randomItem);
    /** Writes out the menu category into the html-file of the startpage */
    document.getElementById("btnText").innerHTML = randomItem;
}

var txtChange = document.getElementById("dlTxt");
txtChange.addEventListener("mouseover",changeDagensLunchText);
txtChange.addEventListener("mouseout", regularDagensLunchText);

function changeDagensLunchText(){
    document.getElementById("dlTxt").innerHTML = "MÅNDAG TILL FREDAG";
}

function regularDagensLunchText(){
    document.getElementById("dlTxt").innerHTML = "DAGENS LUNCH 11:00 - 14:00";
}






