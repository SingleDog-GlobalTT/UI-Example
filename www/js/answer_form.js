/**
 * Created by tyouki on 2017/05/30.
 */

//call user_id
var user_id = sessionStorage.getItem('user_id');
console.log("User Session id: ", user_id);

function loadQuestion(){
    var url = "http://104.199.136.169:8080/Question/GetQuestion?question_type=0&question_num=0";
    $.getJSON(url, function (question) {
        console.log("question: ", question.question_list);

        for(var i=0; i<question.question_list.length;i++) {
            $('div#answer_load').append(
                '<div class="pet_comment_list_block">'+

                    question.question_list[i].question_name+

                    '<input type="radio" name="q1" value="1">はい'+
                    '<input type="radio" name="q1" value="-1">いいえ'+
                    '<input type="radio" name="q1" value="0">どっちでもいえない'+

                '</div>'
            );
        }
    });
}

loadQuestion();

$('form#answer_form').submit(function (event) {

    event.preventDefault();

    var category_counter = 0,
        category_id = 1;

    var $answer_form = $(this),
        answers = {answer_value: [], category_id: []},
        url = $answer_form.attr('action');

    for(var i=0; i<16; i++){

        var answer_value = $answer_form.find('input[name="q'+(i+1)+'"]:checked').val();
        var answer_category = category_id;

        //auto generate category 4 one is this category second is this category
        if(category_counter == 4){
            console.log("update category");
            category_counter = 0;
            category_id++;
        }

        //check case user not choose any answer*
        if(typeof answer_value == "undefined") {
            answers.answer_value.push(0);
            answers.category_id.push(0);
        }
        else{
            answers.answer_value.push(answer_value);
            answers.category_id.push(category_id);
        }

        category_counter++;
    }

    console.log("answer", answers,url);

    $.post(url,{
        answer_value: answers,
        category_id: answers.category_id,
        user_id: user_id
        },
        function (category_value) {

        console.log("category_value.answer_list: ",category_value.answer_list[0]);

        window.location.replace(
            "result.html?category1="+category_value.answer_list[0]+
            "&category2="+category_value.answer_list[1]+
            "&category3="+category_value.answer_list[2]+
            "&category4="+category_value.answer_list[3]+
            "&user_id="+user_id

        );

    });


});
