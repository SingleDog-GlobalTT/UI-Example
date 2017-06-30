/**
 * Created by tyouki on 2017/05/15.
 */

$('form#register_form').submit(function (event) {
    event.preventDefault();

    var params = new FormData( $(this)[0] );

    $.ajax({
        type: "POST",
        url: $(this).attr('action'),
        contentType: false,
        processData: false,
        data: params,
        dataType: "json",
        success: function( json ) {
           console.log(json);

            if(json.status == "Success"){
               window.location.replace("/index.html");
            }
        }
    });

});