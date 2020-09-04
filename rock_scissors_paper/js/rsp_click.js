function rsp_click(userHand){
    var comHand;
    var chooseHand = Math.random();

    if (chooseHand < 0.33) {
        comHand = "rock"
    } else if (chooseHand < 0.66) {
        comHand = "scissors"
    } else {
        comHand = "paper"
    }
    var draw = "! draw";
    var win = "! you win!";
    var lose = "! you lose!";

    var result =  "Computer hand is " + comHand;

    if(userHand === 'rock'){
        if (comHand === 'rock'){
            result += draw
        } else if (comHand === 'scissors'){
            result += win
        } else if (comHand === 'paper'){
            result += lose
        }
    }else if(userHand === 'scissors'){
        if (comHand === 'rock'){
            result += lose
        } else if (comHand === 'scissors'){
            result += draw
        } else if (comHand === 'paper'){
            result += win
        }
    }else{
        if (comHand === 'rock'){
            result += win
        } else if (comHand === 'scissors'){
            result += lose
        } else if (comHand === 'paper'){
            result += draw
        }
    }

    alert(result)
}