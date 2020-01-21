let startTime;
let mistakes = 0;
let keysPressed = 0;
let correct = 0

let sentences = ['David ', 'Alex', 'Pawel ', 'Casper', 'Joseph'];

// let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sum = 0
for (let i = 0; i < sentences.length; i++) {
    sum += sentences[i].trim().split(' ').length;
}
let i = 0
let j = 0
$('#sentence').text(sentences[i]);
$('#target-letter').text(sentences[i][j])
$("#keyboard-upper-container").hide();
$(document).on('keydown keyup ', function (event) {
    let shiftPress = event.shiftKey;
    if (shiftPress) {
        $("#keyboard-upper-container").show();
        $("#keyboard-lower-container").hide();
    } else {
        $("#keyboard-upper-container").hide();
        $("#keyboard-lower-container").show();
    };
});
$(document).keypress(function () {
    if (keysPressed === 0) {
        startTime = Date.now()
        keysPressed++
    }
    $('#' + event.keyCode).addClass('highlight') // dynamic id selector
    $('#yellow-block').css('left', '+=17.5px')
    j++
    if (sentences[i][j] === ' ') {
        $('#target-letter').text('<SPACE>')
    } else {
        $('#target-letter').text(sentences[i][j])
    }
    if (sentences[i].charCodeAt(j - 1) === event.keyCode) {
        $('#feedback').append('<span class="checker">✅</span>')
        correct++
        check()
    } else {
        $('#feedback').append('<span class="checker">❌</span>')
        mistakes++
        check()
    }
});
$(document).keyup(function () {
    $('.highlight').removeClass('highlight');
});

function check() {
    if (j === sentences[i].length) {
        i++;
        j = 0;
        $('#sentence').text(sentences[i])
        if (i === sentences.length) {
            $('span').remove('span')
            $(document).off('keypress')
            let minutes = (Date.now() - startTime) / 60000
            console.log(minutes)
            console.log(sum)
            console.log(mistakes)
            console.log(correct)
            let accuracy = ((correct/(mistakes+correct))*100)
            console.log(accuracy)
            let score2 = (sum/minutes - 2 * mistakes)
            console.log(score2)
            $('#target-letter').text('YOUR SPEED IS ' + Math.round(score2) + ' WORDS PER MINUTE WITH '+ Math.round(accuracy)+ '% ACCURACY')
            $('#feedback').append('<button id="myButton">Play Again?</button>')
            $('#myButton').click(function () {
                window.location.reload();
            });
            return;
        }
        $('#target-letter').text(sentences[i][j])
        $('.checker').remove('.checker')
        $('#yellow-block').css('left', '17.5px')

    }
}