let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let i = 0
let j = 0
$('#sentence').text(sentences[i]);
$('#target-letter').text(sentences[i][j])
console.log(sentences[i][j])

//Hides the keybord with uppercase letters
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
    // console.log(event.keyCode);
    $('#' + event.keyCode).addClass('highlight') // dynamic id selector
    $('#yellow-block').css('left', '+=17.5px')
    j++
    $('#target-letter').text(sentences[i][j])
    if (sentences[i].charCodeAt(j - 1) === event.keyCode) {
        // $('#feedback').text('✅')
        $('#feedback').append('<span>✅</span>')
        console.log('✅')
    } else {
        // $('#feedback').text('❌')
        $('#feedback').append('<span>❌</span>')
        console.log('❌')
        if (j === sentences[i].length) {
            i++;
            j = 0;
            $('#sentence').text(sentences[i])
            $('#target-letter').text(sentences[i][j])
            $('span').remove('span')
            $('#yellow-block').css('left','0px')
        }
    }
    if (i === sentences.length) {
        $('span').remove('span')
        console.log('GAME OVER')
    }
});

$(document).keyup(function () {
    $('.highlight').removeClass('highlight');

});
