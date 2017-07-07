// JavaScript source code
//var user_id = sessionStorage.getItem('user_id');
var user_id = 1, test = 1;
console.log("this file is active");
console.log("User Session id: ", test);
var serverURL = "http://35.189.168.246:8080/";
var url = serverURL+"Question/GetQuestion";
LoadMadeQuestion();

function LoadMadeQuestion() {
    $ranking_form = $(this);

    var age = document.getElementById('age-select').value;
    var gender = document.getElementById('gender-select').value;
    var sort = document.getElementById('sort-select').value;
    //var url = "http://35.189.168.246:8080/Question/GetQuestion";
    console.log(age, gender, sort, url);
    if (sort == 1) {
        if (age == "0" && gender == "0") {
            $.get(url, { question_type: 1, sort_by: 1 }, function (question) {
                console.log("return data ", question);
                console.log("question1: ", question.question_list);
                showQuestion(question);
            })
        } else if (age != "0" && gender == "0") {
            $.get(url, { question_type: 1, filter_age: age, sort_by: 1 }, function (question) {
                console.log("question2: ", question.question_list);

                showQuestion(question);
            })
        } else if (age == "0" && gender != "0") {
            $.get(url, { question_type: 1, filter_sex: gender, sort_by: 1 }, function (question) {
                console.log("question3: ", question.question_list);

                showQuestion(question);
            })
        } else if (age != "0" && gender != "0") {
            $.get(url, { question_type: 1, filter_age: age, filter_sex: gender, sort_by: 1 }, function (question) {
                console.log("question4: ", question.question_list);

                showQuestion(question);
            })
        }
    }
    else {
        if (age == "0" && gender == "0") {
            $.get(url, { question_type: 1, sort_by: 2 }, function (question) {
                console.log("return data ", question);
                console.log("question1: ", question.question_list);
                showQuestion(question);
            })
        } else if (age != "0" && gender == "0") {
            $.get(url, { question_type: 1, filter_age: age, sort_by: 2 }, function (question) {
                console.log("question2: ", question.question_list);

                showQuestion(question);
            })
        } else if (age == "0" && gender != "0") {
            $.get(url, { question_type: 1, filter_sex: gender, sort_by: 2 }, function (question) {
                console.log("question3: ", question.question_list);

                showQuestion(question);
            })
        } else if (age != "0" && gender != "0") {
            $.get(url, { question_type: 1, filter_age: age, filter_sex: gender, sort_by: 2 }, function (question) {
                console.log("question4: ", question.question_list);

                showQuestion(question);
            })
        }
    }
   
}


function showQuestion(question) {
    for (var i = 0; i < question.question_list.length; i++) {
        var imagePath = serverURL + "assets/images/" + question.question_list[i].user_id + ".jpg";
        var time = question.question_list[i].createdAt.substr(0, 10) + " " + question.question_list[i].createdAt.substr(11, 8);
        var question_id = question.question_list[i].question_id;
        var question_socre = question.question_list[i].question_score;
        $('div#question_load').append(
            '<div class="am-tabs-bd pet_pl_list">' +
            '<div data-tab-panel-0 class="am-tab-panel am-active">' +
            '<div class="pet_comment_list_block">' +
            '<div class="pet_comment_list_block_l">' +
            '<img src=' + imagePath + 'alt="">' + '</div>' +
            '<div class="pet_comment_list_block_r">' +
            '<div class="pet_comment_list_block_r_info">' + question.question_list[i].username + '</div>' +
            '<div class="pet_comment_list_block_r_text">' + question.question_list[i].question_name + '</div>' +
            '<div class="pet_comment_list_block_r_bottom">' +
            '<div class="pet_comment_list_bottom_info_l">' + time + '</div>' +
            '<div class="pet_comment_list_bottom_info_r">' +
            //'<span><i class="iconfont">&#xe631</i>' + question.question_list[i].question_score + '</span>' +
            '<div class="like-content" id = "score">'+
            '<button onclick=addScore(' + question_id + ') class="btn-secondary like-review" >' +
            //'<i class="fa fa-heart" aria-hidden="true"></i> Like' +
            '<i class="iconfont">&#xe631</i>' + question_socre + '</button>' +
            '</div>' +
            '</div>' +

            '</div>' +
            
            '</div>' +
            '</div>' +
            '</div>'
        );

        

    }
}




//$('form#ranking_form').submit(function (event) {
//    event.preventDefault();
//    $('#question_load').empty();
//    LoadMadeQuestion();
//})



function addScore(questionID) {

    console.log(questionID);
    var question_id = questionID;
    var URL1 = "http://35.189.168.246:8080/Question/AddScore";
    $.post(URL1,
    {
        question_id: question_id,
        score: 1,
        user_id: user_id
    }
    )
    location.reload();
    var score = document.getElementById('score').value;
    console.log(score);
    document.getElementById('score').value++;
}


    function search() {
        $('#question_load').empty();
        LoadMadeQuestion();
    }

