
let a = 0;
let curret_action = "";
let last_action = "";
let new_text = false;

let btns = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");

function add_text(text) {
    
    if(new_text) {

        screen.innerHTML = "";

        history.innerHTML = "";

        new_text = false;

    }

    screen.innerHTML += text;

}

function add_action(action) {

    if(screen.innerHTML == ""){

        a = 0;

    } else {

        a = screen.innerHTML;

        screen.innerHTML = "";
    
    }

    curret_action = action;

    last_action = action;

}

function accept_action() {

    if(curret_action == "%" ) {

        console.log(last_action);
        
        if(last_action == "+"){

            screen.innerHTML = +a + (+a * (+screen.innerHTML / 100));

        } else if(last_action == "*") {

            screen.innerHTML = +a * (+screen.innerHTML / 100);

        } else if (last_action == "-") {

            screen.innerHTML = +a - (+a * (+screen.innerHTML / 100));

        } else if (last_action == "/") {

            screen.innerHTML = +a / (+screen.innerHTML / 100);

        }

        last_action = "";

    } else if (curret_action == "/") {

        if (+screen.innerHTML != 0) {

            screen.innerHTML = +a / +screen.innerHTML;
    
        } else {
    
            screen.innerHTML = "Ошибка"
    
        }
        

    } else if (curret_action == "*") {

        screen.innerHTML = +a * +screen.innerHTML;

    } else if (curret_action == "+") {

        screen.innerHTML = +a + +screen.innerHTML;

    } else if (curret_action == "-") {

        screen.innerHTML = +a - +screen.innerHTML;
        
    }

    curret_action = "";

    new_text = true;

    a = +screen.innerHTML;
}



for(let i  = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', function(){

        let symbol = btns[i].innerHTML;

        if(symbol == "AC") {

            screen.innerHTML = "";

            history.innerHTML = "";

            curret_action = "";

            last_action = "";

            new_text = true;

            a = 0;

        } else if (symbol == "+/-") {

            screen.innerHTML = -1 * (+screen.innerHTML);

        } else if (symbol == "%") {

            if(a == 0) {

                add_action("%");

            } else {
                    curret_action = "%";

                    accept_action();
                    
                    curret_action = "";

            }

        } else if (symbol == "/") {

            if(a == 0) {

                add_action("/");

            } else {

                if(curret_action != "")
                    accept_action();

                curret_action = "/";

            }

        } else if (symbol == "*") {

            if(a == 0) {

                add_action("*");

            } else {

                if(curret_action != "")
                    accept_action();

                curret_action = "*";

            }

        } else if (symbol == "-") {

            if(a == 0) {

                add_action("-");

            } else {

                if(curret_action != "")
                    accept_action();

                curret_action = "-";

            }

        } else if (symbol == "+") {

            if(a == 0) {

                add_action("+");

            } else {

                if(curret_action != "")
                    accept_action();

                curret_action = "+";

            }

        } else if (symbol == "=") {

            if(curret_action != "") {

                accept_action();

            }

        } else if (symbol == "C") {

            if(screen.innerHTML.length > 0) screen.innerHTML = screen.innerHTML.slice(0,-1);
            else screen.innerHTML = 0;

        } else {

            add_text(symbol);

        }
        

    })

}
