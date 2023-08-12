const card_1 = document.querySelector(".card-1");
const card_2 = document.querySelector(".card-2");
const input_field = document.getElementById("mail");
const mail_value = document.getElementById("mail-value")
const warning = document.getElementById("warning");
const btn = document.querySelector("button");

function validateEmail () {
    if(!input_field.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        warning.innerHTML = "valid email required";
        warning.style.top = "0px";
        warning.style.opacity = "100%";
        input_field.style.border = "1px solid hsl(4, 100%, 67%)";
        input_field.style.backgroundColor = "hsla(4, 100%, 67%, .25)";
        return false;
    }

    warning.innerHTML = "";
    input_field.style.border = "";
    input_field.style.backgroundColor = "";
    return true;
}

function submit () {
    validateEmail();
    
    if (validateEmail()) {
        card_1.style.display = "none";
        card_2.style.display = "grid";
        mail_value.innerText = input_field.value;
    }
}




