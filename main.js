const $ = document.querySelector.bind(document);

const noNode = $('.no');
const yesNode = $('.yes');
const heading = $('.heading');
const audio = $('#audio');
const firstBtn = $('.first-btn');
const firstSection = $('.first');
const yesnoSection = $('.yesno');
const input = $('input');
const answerSection = $('.answer');
const wrapperAnswer = $('.wrapper-answer');
const nosend = $('.nosend');
const containerYesNo = $('.container');


firstBtn.onclick = function() {
    firstSection.style.display = 'none';
    yesnoSection.style.display = 'block';
}

var i = 0;
noNode.onmouseover = function() {
    var x, y;
    do {
        x = Math.random() * (containerYesNo.offsetWidth - noNode.offsetWidth);
    } while (x >= noNode.offsetLeft - 200 && x <= noNode.offsetLeft + 200)
    do {
        y = Math.random() * 300;
    } while (y >= noNode.offsetTop - 50 && y <= noNode.offsetTop + 50)
    if (i == 0) {
        yesNode.style.left = noNode.offsetLeft + 'px';
        yesNode.style.top = noNode.offsetTop + 'px';
    }
    i++;
    if (i % 4 == 0) {
        audio.src = "./sound/uhu.mp3";
        audio.play()
    } else {
        audio.src = "./sound/ui.mp3";
        audio.play()
    }
    noNode.style.left = x + 'px';
    noNode.style.top = y + 'px';
}

setInterval(() => {
    heading.classList.toggle('active');
}, 500);

const text = "Ỏoooooo, đơn giản vì anh quá đẹp trai, yêu anh nhiềuuuuu <333333333";
var newtext = "";
var a = 0;

input.onkeydown = function(e) {
    if (e.key != 'Backspace') {
        e.preventDefault()
        newtext += text[a];
        input.value = newtext;
        a++;
    } else {
        newtext = input.value.slice(0, a - 1);
        a--;
    }
    if (a >= text.length || a < 0) {
        newtext = "";
        a = 0;
    }
}

yesNode.onclick = function() {
    audio.src = "./sound/happy.mp3";
    audio.play()
    answerSection.style.display = 'flex';

}

function hideAnswerSection() {
    answerSection.style.display = 'none';
}
answerSection.addEventListener('click', hideAnswerSection);
nosend.onclick = function() {
    audio.src = "./sound/nhin.mp3";
    audio.play()
    setTimeout(function() {
        hideAnswerSection();
    }, 4100)
}

wrapperAnswer.addEventListener('click', function(e) {
    e.stopPropagation()
})