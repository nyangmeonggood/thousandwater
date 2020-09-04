var userHand = prompt("rock! scissors! paper!");

if(userHand !== "rock" && userHand !== "scissors" && userHand !== "paper"){
    alert("?")
}else {

    var comHand;
    var chooseHand = Math.random();

    if (chooseHand < 0.33) {
        comHand = "rock"
    } else if (chooseHand < 0.66) {
        comHand = "scissors"
    } else {
        comHand = "paper"
    }
    var draw = "Computer hand is " + comHand +"! draw";
    var win = "Computer hand is " + comHand +"! you win!";
    var lose = "Computer hand is " + comHand +"! you lose!";

    /*if(userHand === 'rock'){
        if (comHand === 'rock'){
            alert(draw)
        } else if (comHand === 'scissors'){
            alert(win)
        } else if (comHand === 'paper'){
            alert(lose)
        }
    }else if(userHand === 'scissors'){
        if (comHand === 'rock'){
            alert(lose)
        } else if (comHand === 'scissors'){
            alert(draw)
        } else if (comHand === 'paper'){
            alert(win)
        }
    }else{
        if (comHand === 'rock'){
            alert(win)
        } else if (comHand === 'scissors'){
            alert(lose)
        } else if (comHand === 'paper'){
            alert(draw)
        }
    }*/

    switch (userHand){
        case 'rock':
            switch (comHand){
                case 'rock':
                    alert(draw);
                    break;
                case 'scissors':
                    alert(win);
                    break;
                case 'paper':
                    alert(lose);
                    break;
            }
        break;

        case 'scissors':
            switch (comHand){
                case 'rock':
                    alert(lose);
                    break;
                case 'scissors':
                    alert(draw);
                    break;
                case 'paper':
                    alert(win);
                    break;
            }
        break;

        default:
            switch (comHand){
                case 'rock':
                    alert(win);
                    break;
                case 'scissors':
                    alert(lose);
                    break;
                case 'paper':
                    alert(draw);
                    break;
            }
        break;
    }
}
