/**
 * Created by Varit on 6/12/17.
 */
var user_id = sessionStorage.getItem('user_id');
var url = "http://35.189.168.246:8080/Matching/MatchingCalculation/user_id="+user_id+"&calculare_value";
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

function loadmatchlist() {
    $.getJSON(url,
        function (user) {
            var imagePath = "http://35.189.168.246:8080/images/"+user_id + ".jpg";
            for (var i=0;i<user.size();i++){
            $('div#match_load').append(
                '<div class="pet_comment_list_block">'+
                    '<div class="pet_comment_list_block_l">'+'<img src="http://35.189.168.246:8080/images/'+user.user_detail[i].user_id + '.jpg" alt="">'+'</div>'+
                '<div class="pet_comment_list_block_r">'+
                '<div class="pet_comment_list_block_r_info">'+user.user_detail[i].username+'</div>'+
                '<div class="pet_comment_list_block_r_text">'+
                '<ul>'+
                '<li>'+user.compare_value[i].similar+
                '<a href="#" id="user'+(i+1)+'" class="btn btn-info am-align-right">'+
                '興味がある'+
                '</a>'+
                '</li>'+
                '<li>'+'年齢層：'+user.user_detail[i].age+'</li>'+
                '<li>'+'現在地：'+user.user_detail[i].postcode+'</li>'
                            +'</ul>'+
                '</div>'+
                '</div>'+
                '</div>'
            );
            if (document.getElementById("user'+(i+1)+'").isclick == 1 ){
                interesteduser = i;
                $.post(url,{
                        user_id: interesteduser
                    },
                    function (user) {
                        window.location.replace(
                            "infor.html?user_id="+user.user_id
                        );
                    });
            }

            }
    })
}
loadmatchlist();