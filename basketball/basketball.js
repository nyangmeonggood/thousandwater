var com = {
    Score : 0,
    Percent2 : 0.5,
    Percent3 : 0.33
}
var ys = {
    Score : 0,
    Percent2 : 0.5,
    Percent3 : 0.33
}
var game = {
    iscomTurn : true,
    shootleft : 15
}

window.addEventListener("DOMContentLoaded", function(event) {
    var leftShootNumber = document.getElementById("shots-left")
    leftShootNumber.innerHTML  = game.shootleft


    showResult("3")
    window.setTimeout(function(){
        showResult("2");

        window.setTimeout(function(){
            showResult("1");

                window.setTimeout(function(){
                    showResult("컴퓨터부터 시작합니다")

                    disableComBtn(false)
                },1000)
        },1000)
    },1000)
});

function shoot(){
    var leftShootNumber = document.getElementById("shots-left")

    game.shootleft--
    leftShootNumber.innerHTML  = game.shootleft
}

function updateComScore(score){
    var comScoreElem = document.getElementById("computer-score")

    com.Score += score;
    comScoreElem.innerHTML = com.Score;
}
function updateYsScore(score){
    var ysScoreElem = document.getElementById("ys-score")

    ys.Score += score;
    ysScoreElem.innerHTML = ys.Score;
}

function showResult(text){
    var textElem = document.getElementById("text");

    textElem.innerHTML = "§ " + text + " §"
}

function disableComBtn(flag){
    var comBtns = document.getElementsByClassName('btn-com');

    for (var i = 0; i < comBtns.length; i++){
        comBtns[i].disabled = flag;
    }
}
function disableYsBtn(flag){
    var ysBtns = document.getElementsByClassName('btn-ys');

    for (var i = 0; i < ysBtns.length; i++){
        ysBtns[i].disabled = flag;
    }
}

function endGame(){

    if(game.shootleft === 0){
        if(com.Score > ys.Score){
            showResult("알파고 승리")
        }else if(com.Score < ys.Score){
            showResult("인간 승리")
        }else{
            showResult("무승부")
        }

        var comBtns = document.getElementsByClassName('btn-com');

        for (var i = 0; i < comBtns.length; i++){
            comBtns[i].disabled = true;
        }

        var ysBtns = document.getElementsByClassName('btn-ys');

        for (var i = 0; i < ysBtns.length; i++){
            ysBtns[i].disabled = true;
        }
    }
}

function onCshoot(){
    if(!game.iscomTurn)
        return;

    var shootType = Math.random() < 0.5 ? 2 : 3;

    if (Math.random() < com['Percent' + shootType]){
        showResult("알파고 " + shootType + "점슛 성공")
        updateComScore(shootType)
    }else{
        showResult("알파고 " + shootType + "점슛 실패")
    }

    game.iscomTurn = false

    shoot()
    changePercent()
    disableComBtn(true)
    disableYsBtn(false)
    endGame()
}

function onYSshoot(shootType) {
    if (game.iscomTurn){
        return;
    }

    if (Math.random() < ys['Percent' + shootType]){
        showResult("세돌 " + shootType + "점슛 성공")
        updateYsScore(shootType)
    }else{
        showResult("세돌 " + shootType + "점슛 실패")
    }

    game.iscomTurn = true;

    shoot()
    changePercent()
    disableComBtn(false)
    disableYsBtn(true)
    endGame()
}

function changePercent(){
    var diff = ys.Score - com.Score;

    if (diff >= 10){
        com.Percent2 = 0.7;
        com.Percent3 = 0.43;
    }else if (diff >= 6){
        com.Percent2 = 0.6;
        com.Percent3 = 0.38;
    }else if (diff <= -10){
        com.Percent2 = 0.3;
        com.Percent3 = 0.23;
    }else if (diff <= -6){
        com.Percent2 = 0.4;
        com.Percent3 = 0.28;
    }
}