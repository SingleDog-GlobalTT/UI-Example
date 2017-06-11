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


var request_url = "http://localhost:1337/Question/GetQuestion";

function loadQuestionList(question) {

    var username = question.question_list[0].username,
        question_name = question.question_list[0].question_name,
        question_num = question.question_list.length;

    console.log("username: ", username, "question_name: ", question_name);

    for(var i=0; i<question_num; i++) {
        $('span#load_question_list').append("" +
            "<div class='pet_comment_list_block'>" +
                "<div class='pet_comment_list_block_l'><img src='img/a4.png' alt=''></div>'" +
                    "<div class='pet_comment_list_block_r'>"+
                        "<div id='username' class='pet_comment_list_block_r_info'>"+username+"</div>"+
                        "<div class='pet_comment_list_block_r_text'>"+question_name+"</div>"+
                        "<div class='pet_comment_list_block_r_bottom'>"+
                        "<div class='pet_comment_list_bottom_info_l'>1時間前</div>"+
                        "<div class='pet_comment_list_bottom_info_r'>"+
                            "<span><i class='iconfont'>&#xe631;</i>5 </span>"+
                        "</div>"+
                    "</div>"+
                "</div>" +
            "</div>"
        );
    }
}

$.getJSON(request_url, function (question_list) {
    console.log("question list: ", question_list);
    loadQuestionList(question_list);
});