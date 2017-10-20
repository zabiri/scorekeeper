var p1Score = document.getElementById('p1Score');
var p1ScoreVal = 0;
var p2Score = document.getElementById('p2Score');
var p2ScoreVal = 0;

var p1ScoreHeader = document.getElementById('p1ScoreHeader');
var p2ScoreHeader = document.getElementById('p2ScoreHeader');

var p1Butt = document.getElementById('p1Butt');
var p2Butt = document.getElementById('p2Butt');
var resetButt = document.querySelector('.btn-warning');

var star = '<i class="fa fa-star animated pulse tada" aria-hidden="true"></i> &nbsp;';
var trophy = '<i class="fa fa-trophy animated pulse tada" aria-hidden="true"></i>';

var pTw = document.getElementById('ptsToWinActual');
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // do mobile handling
    pTw.setAttribute("type", "tel");
} else {
    // do default handling
}

function reset() {
    p1Butt.disabled = false;
    p2Butt.disabled = false;
    pTw.disabled = false;
    pTw.value = 5;
    p1ScoreVal = 0;
    p2ScoreVal = 0;
    p1Score.innerHTML = "";
    p2Score.innerHTML = "";
    p1ScoreHeader.classList.remove('animated', 'rubberBand');
    p2ScoreHeader.classList.remove('animated', 'rubberBand');
    p1Score.classList.remove('isGreen');
    p2Score.classList.remove('isGreen');

}

function shutItDown() {
    if (pTw.value >= 1) {
        if (p1ScoreVal == pTw.value || p2ScoreVal == pTw.value) {
            p1Butt.disabled = true;
            p2Butt.disabled = true;
            pTw.disabled = true;
            if (p1ScoreVal == pTw.value) {
                p1Score.innerHTML += trophy;
                p1Score.classList.toggle('isGreen');
                var winStar1 = document.querySelectorAll('#p1Score .fa');
                for (i = 0; i < winStar1.length; i++) {
                    winStar1[i].style.animationIterationCount = "infinite";
                }
                p1ScoreHeader.classList.add('animated', 'rubberBand');
            } else {
                p2Score.innerHTML += trophy;
                p2Score.classList.toggle('isGreen');
                var winStar2 = document.querySelectorAll('#p2Score .fa');
                for (i = 0; i < winStar2.length; i++) {
                    winStar2[i].style.animationIterationCount = "infinite";
                }
                p2ScoreHeader.classList.add('animated', 'rubberBand');
            }
        }

    }
}

function p1Point() {
    p1ScoreVal += 1;
    p1Score.innerHTML += star;
    shutItDown();
}

function p2Point() {
    p2ScoreVal += 1;
    p2Score.innerHTML += star;
    shutItDown();
}

p1Butt.addEventListener("click", p1Point);
p2Butt.addEventListener("click", p2Point);
resetButt.addEventListener("click", reset);
pTw.addEventListener("click", shutItDown);