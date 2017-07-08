/**
 * Created by tyouki on 2017/05/30.
 */

function loadQuestion(){
    var url = "http://35.194.137.57:8080/Question/GetQuestion?question_type=1&question_num=4";
    var url1 = "http://35.194.137.57:8080/Question/GetQuestion?question_type=2&question_num=4";
    var category_all = new array()  ;
    var count =1;
    $.getJSON(url, function (question) {
        console.log("question: ", question.question_list);
        for(var i=0; i<question.question_list.length;i++) {
            $('div#answer_load').append(
                '<div class="pet_comment_list_block">'+
                '<div>'+ question.question_list[i].question_name +'</div>'
                +
                '<input type="radio" name="q'+(i+1)+'" value="1">はい'+
                '<input type="radio" name="q'+(i+1)+'" value="-1">いいえ'+
                '<input type="radio" name="q'+(i+1)+'" value="0">どっちでもいえない'+
               /* '<img src="http://104.199.136.169:8080/assets/images/2.jpg">'+*/
                '</div>'
            );
            category_all[i] = question.question_list[i].category_id;
            count++;
            console.log("user_id="+question.question_list[i].user_id+",question_id="+question.question_list[i].question_id);
        }
    });
    $.getJSON(url1,function (question) {
        console.log("question_user: ", question.question_list);
        for(var j=0; j<question.question_list.length;j++){
            $('div#user_question').append(
                '<div class="pet_comment_list_block">'+
                '<div>'+ question.question_list[i].question_name +'</div>'
                +
                '<input type="radio" name="q'+(i+count)+'" value="1">はい'+
                '<input type="radio" name="q'+(i+count)+'" value="-1">いいえ'+
                '<input type="radio" name="q'+(i+count)+'" value="0">どっちでもいえない'+

                '</div>'
            )
            category_all[j+count-1] = question.question_list[j].category_id;
        }
    })

    $('form#answer_form').submit(function (event) {

        event.preventDefault();

        var category_counter = 0,
            category_id = 1;

        var $answer_form = $(this),
            answers = {answer_value: [], category_id: []},
            url = $answer_form.attr('action');

       for(var i=0; i<category_all.length; i++){

            var answer_value = $answer_form.find('input[name="q'+(i+1)+'"]:checked').val();
            var answer_category = category_all[i];
            console.log(answer_value);
  /*          if(category_counter == 4){
                console.log("update category");
                category_counter = 0;
                category_id++;
            }

            //check case user not choose any answer*/
            if(typeof answer_value == "undefined") {
                answers.answer_value.push(0);
                answers.category_id.push(0);
            }
            else{
                answers.answer_value.push(answer_value);
                answers.category_id.push(category_all[i]);
            }

 //           category_counter++;
        }
        var user_id = sessionStorage.getItem('user_id');
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
                    "&category4="+category_value.answer_list[3]
                );
            });
        console.log(answers,url);
    });
}
loadQuestion();


