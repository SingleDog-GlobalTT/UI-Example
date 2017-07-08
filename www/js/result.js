/**
 * Created by Varit on 7/3/17.
 */
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

$('button#to_matching').click(function (event) {


    window.location.replace(
        "matching.html?category1="+category_values[0]+
        "&category2="+category_values[1]+
        "&category3="+category_values[2]+
        "&category4="+category_values[3]

    );

});
