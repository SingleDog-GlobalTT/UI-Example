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

category_values[0] = urlParams.category1[0]/8*100;
category_values[1] = urlParams.category2[0]/8*100;
category_values[2] = urlParams.category3[0]/8*100;
category_values[3] = urlParams.category4[0]/8*100;

console.log("urlParams", urlParams);

$('div#show_category').append(
    '<ul class="chart">' +
    '<li><em>外向</em><span style="background-position: center -' + category_values[0] + 'px"></span><strong>' + category_values[0] + '%</strong><em>内向</em></li>' +
    '<li><em>直感</em><span style="background-position: center -' + category_values[1] + 'px"></span><strong>' + category_values[1] + '%</strong><em>現実</em></li>' +
    '<li><em>感情</em><span style="background-position: center -' + category_values[2] + 'px"></span><strong>' + category_values[2] + '%</strong><em>思考</em></li>' +
    '<li><em>規範</em><span style="background-position: center -' + category_values[3] + 'px"></span><strong>' + category_values[3] + '%</strong><em>柔軟</em></li>' +
    '</ul>'
    //'内向外向: ' +category_values[0]+"%<br/>"+
    //'現実直感: ' +category_values[1]+"%<br/>"+
    //'思考感情: ' +category_values[2]+"%<br/>"+
    //'柔軟規範: ' +category_values[3]+"%"
);

$('button#to_matching').click(function (event) {


    window.location.replace(
        "matching.html?category1="+category_values[0]+
        "&category2="+category_values[1]+
        "&category3="+category_values[2]+
        "&category4="+category_values[3]

    );

});
