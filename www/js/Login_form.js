/**
 * Created by tyouki on 2017/05/15.
 */
$('form#login_form').submit(function (event) {

    event.preventDefault();

    var $login_form = $(this),
        username = $login_form.find('input[name="username"]').val(),
        password = $login_form.find('input[name="password"]').val(),
        url = $login_form.attr('action');

    console.log(username,password,url);

    $.get(url,{
        username:username,
        password:password
    },function (return_data) {
        console.log("return: ",return_data);

        if(return_data.user_id == null){
            alert("User or Password are error");
        }
        else{
            sessionStorage.setItem('user_id', return_data.user_id);
            var user_id = sessionStorage.getItem('user_id');
            console.log("user_id: ", user_id);
            window.location.replace("/homepage.html?user_id="+user_id);
        }
    });

});