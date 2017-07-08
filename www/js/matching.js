/**
 * Created by Varit on 6/12/17.
 */
var user_id = sessionStorage.getItem('user_id');
var url = "http://35.189.168.246:8080/Matching/MatchingCalculation?user_id="+user_id+"&calculare_value";
user_id=1;
var interesteduser = 1;
function interest() {
    $.post(url,{
            user_id: user_id
        },
        function (user) {
            window.location.replace(
                "infor.html?user_id="+user.user_id
            );
            console.log("intereseted_user",user_id);
        });
}

function viewInfo(user_id) {

    console.log("user_id: ", user_id);

    $.post(url,{
            user_id: user_id
        },
        function (user) {
            window.location.replace(
                "infor.html?user_id="+user_id
            );
        });

}

function loadmatchlist() {

    $.getJSON(url, function(user) {

        console.log("user: ", user);

        console.log("send get to server");

        var imagePath = "http://35.189.168.246:8080/images/"+user_id + ".jpg";

        var user_num = user.user_age.length;

        console.log(user_num);


        for (var i=0;i<2;i++){

            console.log("looped");

            console.log("image path:", user.user_detail[i].user_id);

            $('div#match_load').append(
                '<div class="pet_comment_list_block">'+
                '<div class="pet_comment_list_block_l">'+'<img id="rotate" src="http://35.189.168.246:8080/images/'+user.user_detail[i].user_id + '.jpg" alt="">'+'</div>'+
                '<div class="pet_comment_list_block_r">'+
                '<div class="pet_comment_list_block_r_info">'+user.user_detail[i].username+'</div>'+
                '<div class="pet_comment_list_block_r_text">'+
                '<ul>'+
                '<li>類似度：'+user.compare_value[i].similar+
                '<a onclick=viewInfo('+user.compare_value[i].user_id+') id="user'+(i+1)+'" class="btn btn-info am-align-right">'+
                '興味がある'+
                '</a>'+
                '</li>'+
                '<li>'+'年齢層：'+user.user_age[i]+'</li>'+
                '</ul>'+
                '</div>'+
                '</div>'+
                '</div>'
            );

        }//end append

    })//end getJSON
}

loadmatchlist();