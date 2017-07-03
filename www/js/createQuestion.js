/**
 * Created by tyouki on 2017/07/03.
 */
// JavaScript source code

var user_id = sessionStorage.getItem('user_id');
user_id=1;
console.log("User Session id: ", user_id);

$('form#create_form').submit(function (event) {
    event.preventDefault();

    var $create_form = $(this);
    var question_name = $create_form.find('input[name="question"]').val();
    var category_id = $create_form.find('select[name="category_id"]').val();
    var url = $create_form.attr('action');

    console.log(question_name, category_id, url);
   /* $.post(url,
        {
            question_name: question_name,
            category_id: category_id,
            user_id: user_id
        }
    )*/
    if (user_id == null || user_id == "undefined") {
        window.location.replace("/index.html");
    }
    else {
        window.location.replace("/homepage.html?user_id=" + user_id);
    }
});
