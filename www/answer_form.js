/**
 * Created by tyouki on 2017/05/30.
 */
$('form#answer_form').submit(function (event) {

    event.preventDefault();

    var $answer_form = $(this),
        answer1 = $answer_form.find('input[name="q1"]').val(),
        answer2 = $answer_form.find('input[name="q2"]').val(),
        answer3 = $answer_form.find('input[name="q3"]').val(),
        answer4 = $answer_form.find('input[name="q4"]').val(),
        answer5 = $answer_form.find('input[name="q5"]').val(),
        answer6 = $answer_form.find('input[name="q6"]').val(),
        answer7 = $answer_form.find('input[name="q7"]').val(),
        answer8 = $answer_form.find('input[name="q8"]').val(),
        answer9 = $answer_form.find('input[name="q9"]').val(),
        answer10 = $answer_form.find('input[name="q10"]').val(),
        answer11 = $answer_form.find('input[name="q11"]').val(),
        answer12 = $answer_form.find('input[name="q12"]').val(),
        answer13 = $answer_form.find('input[name="q13"]').val(),
        answer14 = $answer_form.find('input[name="q14"]').val(),

        password = $login_form.find('input[name="password"]').val(),
        url = $answer_form.attr('action');

    console.log(answer1,answer2,answer3,url);

    $.get(url,{
        username:username,
        password:password
    },function (return_data) {

        console.log("return: ",return_data[0].user_id);

        for(var i=0;i<return_data.length;i++) {
            $('div#show_user_id').append(
                '<h2>' + return_data[i].user_id + '</h2>'
            );
            $('div#answer1').append(
                '<h2>' +return_data[i].password+ '</h2>'
            );
        }

    });
    document.body.onclick = function(){
        var els = document.getElementsByName("q1");
        for (var i = els.length; i--;){
            var el = els[i]
            if (el.checked){
                alert(el.getAttribute("value"))
            }
        }
    }

});
