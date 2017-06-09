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

        console.log("return: ",return_data[0].user_id);

        for(var i=0;i<return_data.length;i++) {
            $('div#show_user_id').append(
                '<h2>' + return_data[i].user_id + '</h2>'
            );
        }

    });

});