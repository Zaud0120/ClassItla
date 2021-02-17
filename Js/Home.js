let data = document.getElementById("btnSend");

data.addEventListener('click', showData);
    


function showData(){
    let nameUser = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;

    //Data Validation
    if (nameUser == "" || lastName ==  "") {
        alert("Complete los espacios en blanco")
        var tBody = document.getElementById('body');
        tBody.style.background = "Red";

        var tLabel = document.getElementsById('label');
        tLabel.style.color = "White";
    } else {
        ChangeColor(nameUser, lastName);
    }      
}

function ChangeColor(pNameUser, pLastName){
    alert("Bienvenido: " + pNameUser + " " + pLastName);
    var tBody = document.getElementById('body');
    tBody.style.background = "#1B562B";
}