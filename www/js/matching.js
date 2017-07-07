/**
 * Created by Varit on 6/12/17.
 */

//call user_id
var user_id = sessionStorage.getItem('user_id');
console.log("User Session id: ", user_id);

/*-----------------Show current test value----------------------*/
//Calculate the result of test
function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

function sendCalculate() {

    var url = "http://localhost:1337/Matching/MatchingCalculation";

    $.get(url, {
        user_id: user_id,
        category_value: category_values
    }, function (calculate_result) {

        console.log("calculate_result: ", calculate_result);

        var user_num = calculate_result.user_id.length;

        for(var i=0; i <user_num; i++) {

            $('div#show_user_detail').append(
                '<div class="pet_comment_list_block">' +
                '<div class="pet_comment_list_block_l"><img src="img/a4.png" alt=""></div>' +
                '<div class="pet_comment_list_block_r">' +
                '<div class="pet_comment_list_block_r_info">' + calculate_result.user_detail[i].username + '</div>' + //User Name
                '<div class="pet_comment_list_block_r_text">' +
                '<ul>' +
                '<a href="#" class="btn btn-info am-align-right">' +
                '興味がある' +
                '</a>' +
                '<li>年齢：'+calculate_result.user_age[i]+'</li>' +
                '<li>' +
                    '現在地：' +
                '</li>' +
                '</ul>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>'

            );



        }//end append

        /*
        *
        *    <!--href="http://microformats.org/wiki/h-adr"-->
         <form class="h-adr" id="b1">
         <!--href="https://www.iso.org/obp/ui/#iso:code:3166:JP"-->
         <!--href="http://en.wikipedia.org/wiki/ISO_3166-1"-->
         <span class="p-country-name" style="display:none;">Japan</span>

         <input type="text" class="p-postal-code" size="8" maxlength="8"><br>

         <input type="text" class="p-region p-locality p-street-address p-extended-address" /><br>
         </form>
        * */

    });//end get
}


var urlString = window.location.href,
    category_values = [];

urlParams = parseURLParams(urlString);

category_values[0] = urlParams.category1[0];
category_values[1] = urlParams.category2[0];
category_values[2] = urlParams.category3[0];
category_values[3] = urlParams.category4[0];

console.log("urlParams", urlParams);

$('div#show_category').append(
    '内向外向: ' +category_values[0]+"%<br/>"+
    '現実直感: ' +category_values[1]+"%<br/>"+
    '思考感情: ' +category_values[2]+"%<br/>"+
    '柔軟規範: ' +category_values[3]+"%"
);

console.log("Send");

sendCalculate();


