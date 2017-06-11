/**
 * Created by tyouki on 2017/05/30.
 */
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

        if(category_counter == 4){
            console.log("update category");
            category_counter = 0;
            category_id++;
        }

        //check case user not choose any answer
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

    console.log(answers,url);

    $.post(url,{answer_value: answers}, function (category_value) {
        console.log(category_value.answer_list[0]);

        window.location.replace(
            "matching.html?category1="+category_value.answer_list[0]+
            "&category2="+category_value.answer_list[1]+
            "&category3="+category_value.answer_list[2]+
            "&category4="+category_value.answer_list[3]
        );
    })

});
