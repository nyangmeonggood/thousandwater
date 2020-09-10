$(function(){
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        minDate:0
    })

    var dpFrom = $('#from').datepicker({
        onSelect: function(){
            dpTo.datepicker('option','minDate',dpFrom.datepicker('getDate'));
            dpTo.datepicker('setDate',"")
        }
    });
    dpFrom.datepicker('setDate',new Date())

    var dpTo = $('#to').datepicker();
    dpTo.datepicker('setDate',2)

    $("#form-search").submit(function(e){
        e.preventDefault();

        var from = $('#from').val();
        var to = $('#to').val();

        search(from, to);

        $("#spot_list").html("")
        $("#spot_list").addClass("active")
        $("#greeting, #search-panel").addClass("fade")

        setTimeout(function(){
            imgSize()
        },500)
    })    


    function imgSize(){
        var imgWidth = $(".list_item_pic").parent().width()
        var imgHeight = imgWidth * 0.6
        $(".list_item_pic").parent().height(imgHeight)
    }

    $(window).resize(function(){
        imgSize()
    })
})

function search(from, to){
    var url = 'https://javascript-basic.appspot.com/searchLocation';

    $.getJSON(url,{
        from,
        to,
    }, function(r){
        var $list = $("#spot_list");

        for(var i = 0; i < r.length; i++){
            if(i != 1){
                var data = r[i];
                var $item = createSpotList(data);

                $list.append($item)
            }
        }
    })
}

function createSpotList(data){
    var $tmpl = $('#list_item-template').clone().removeAttr("id");

    $tmpl.find(".list_item_pic").attr("src",data.titleImageUrl);
    $tmpl.find(".list_item_name").html(data.name);
    $tmpl.find(".list_item_city_name").html(data.cityName);

    $tmpl.click(function(e){
        var url = `detail.html?id=` + data.id;
        window.location = url;
    });

    return $tmpl;
}