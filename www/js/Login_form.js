/**
 * Created by tyouki on 2017/05/15.
 */
$('form#login_form').submit(function (event) {
    alert("Send");
    event.preventDefault();

    var $login_form = $(this),
        username = $login_form.find('input[name="username"]').val(),
        password = $login_form.find('input[name="password"]').val(),
        url = $login_form.attr('action');

    console.log(gender,username,password,email,tel,year,month,day,image,url);

    $.post(url,{
        username:username,
        password:password,
        url:url
    },function (return_data) {
        console.log(return_data);
    });

});