$(function(){
    var map;
    var id = parseWord(window.location.search);
    
    getDetail(id);
    showMap();
})

function parseWord(str){
    var str_ = ""+str
    var s = str.substring(1);
    var args = s.split('&');

    for(var i = 0; i < args.length; i++){
        var arg = args[i];
        var tokens = arg.split('=');

        if(tokens[0] === 'id'){
            return tokens[1]
        }
    }

    return null
}

function getDetail(id){
    var url = 'https://javascript-basic.appspot.com/locationDetail';

    $.getJSON(url,{
        id: id
    },function(r){
        $(".detailHeaderName").html(r.name);
        $(".detailHeaderCityName").html(r.cityName);
        $(".detailDescText").html(r.desc);

        var $gallery = $("#detailImage");
        var image = r.subImageList;

        var i = Math.floor(Math.random() * image.length);
        var $image = `<img src="${image[i]}" alt="">`;
        $gallery.append($image)
    })
}

function showMap(){
    var detailMap = document.getElementById('detailMap');
    var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };

    map = new kakao.maps.Map(detailMap, options);
}