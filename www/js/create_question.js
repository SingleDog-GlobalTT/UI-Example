/**
 * Created by Varit on 6/5/17.
 */
$('form#create_question').submit(function (event) {

    event.preventDefault();

    var $create_question_form = $(this),
        question = $create_question_form.find('input[name="question"]').val(),
        category_id = $create_question_form.find('select[name="category_id"]').val(),
        url = $create_question_form.attr('action');

    console.log(question, category_id, url);

    $.post(url,{

    }, function (status) {

    });
});