function loadinfo() {
    var user_id = sessionStorage.getItem('user_id');
    //   user_id = 2;
    var url="http://35.189.168.246:8080/User/Profile?user_id=" +user_id ;
    $.getJSON(url, function (user) {
        console.log("we did it");
        /*        var age = (2017-user.year)%10;*/
        $('div#name_load').append(
            user.username
        );
        $('div#show_age').append(
            user.age+'才'
        )
        $('div#image_load').append(
            '<img src="http://35.189.168.246:8080/images/15.jpg" id="rotate">'
        );
        $('div#show_mail').append(
            user.email
        );

        /*             $('div#show_location').append(
         '<form class="h-adr" id="a1">'+
         '<input type="text" value='+user.postcode+' class="p-postal-code" readonly hidden>'
         +'<input type="text" class="p-region p-locality p-street-address p-extended-address" />'
         +'</form>'
         )
         $('div#scores_load').append(
         '<span style="background: #99cc99;display: block;float: left;font-size: 15px" >'+'内向外向:'+user.user_similirity'</span>'+
         '<span style="background: #ffcccc;display: block;float: left;font-size: 15px">'+'現実直感:'+'99%'+'</span>'+
         '<span style="background: #ff99cc;display: block;float: left;font-size: 15px" >'+'思考感情:'+'80%'+'</span>'+
         '<span style="background: #ccccff;display: block;float: left;font-size: 15px" >'+'柔軟規範:'+'91%'+'</span>'
         )*/
    });

}
loadinfo();