/**
 * Created by Varit on 6/5/17.
 */

//get the user_id session
var user_id = sessionStorage.user_id;

//check user if. user have to login into the system
if(user_id == 0 || user_id == null){
    alert("The session is expire, please login again");
    window.location.replace("/index.html");
}
else{
    console.log("current user_id: ", user_id);
}

$('form#create_question').submit(function (event) {

    event.preventDefault();

    var $create_question_form = $(this),
        question = $create_question_form.find('input[name="question"]').val(),
        category_id = $create_question_form.find('select[name="category_id"]').val(),
        url = $create_question_form.attr('action');

    console.log(question, category_id, url);

    $.post(url,{
        question_name:question,
        category_id:category_id,
        user_id:sessionStorage.user_id
    }, function (status) {
        console.log("status: ", status);
    });
});