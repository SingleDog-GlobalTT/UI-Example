/**
 * Created by tyouki on 2017/07/04.
 */
function loadinfo() {
    var user_id = sessionStorage.getItem('user_id');
    user_id = 1;
    var url="http://35.194.137.57:8080/User/Profile?user_id=" +user_id ;
    $.getJSON(url, function (user) {
        console.log("user_id: ", user.user_id);
            $('div#name_load').append(
                user.username
            );
            $('div#show_age').append(
                2017-user.year
            )
            $('div#image_load').append(
                '<img src="http://35.194.130.86:8080//assets/images/2.jpg">'
            );
            $('div#show_mail').append(
                user.email
            );
            $('div#show_location').append(
                user.postcode
            );
            $('div#show_mail').append(
                '<span style="background: #99cc99;display: block;float: left;font-size: 15px" >'+'内向外向:'+'100%'+'</span>'+
                '<span style="background: #ffcccc;display: block;float: left;font-size: 15px">'+'現実直感:'+'99%'+'</span>'+
                '<span style="background: #ff99cc;display: block;float: left;font-size: 15px" >'+'思考感情:'+'80%'+'</span>'+
                '<span style="background: #ccccff;display: block;float: left;font-size: 15px" >'+'柔軟規範:'+'91%'+'</span>'
            )
    });
}
loadinfo();