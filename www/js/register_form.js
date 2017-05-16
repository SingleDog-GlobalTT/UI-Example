/**
 * Created by tyouki on 2017/05/15.
 */

$('form#register_form').submit(function (event) {
    event.preventDefault();

    var $register_form = $(this),
        gender = $register_form.find('select[name="gender"]').val(),
        username = $register_form.find('input[name="username"]').val(),
        password = $register_form.find('input[name="password"]').val(),
        email = $register_form.find('input[name="email"]').val(),
        tel = $register_form.find('input[name="tel"]').val(),
        year = $register_form.find('select[name="year"]').val(),
        month = $register_form.find('select[name="month"]').val(),
        day = $register_form.find('select[name="day"]').val(),
        image = $register_form.find('input[name="image"]').val(),
        url = $register_form.attr('action');

    console.log(gender,username,password,email,tel,year,month,day,image,url);

    $.post(url,{
        gender:gender,
        username:username,
        password:password,
        email:email,
        tel:tel,
        year:year,
        month:month,
        day:day,
        image:image,
        url:url
    },function (return_data) {
        console.log(return_data);
    });

});