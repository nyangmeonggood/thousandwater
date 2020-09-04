var API_URL = 'http://floating-harbor-78336.herokuapp.com/fastfood'
alert("hi")
$(function(){
    $('.btn-search').click(function (){
        var searchKeyword = $('#txt-search').val();

        search(searchKeyword)
    })

    $('#txt-search').on('keypress',function(e){
        if (e.keyCode === 13){
            $('.btn-search').trigger('click')
        }
    })
})

function search(searchKeyword){
    $.get(API_URL, {
        searchKeyword : searchKeyword,
        perPage:30
    }, function (data){
        var list = data.list;
        var total = data.total;

        $(".total").html('All <span>' + total + '</span> Stores')

        var $list = $(".list")

        for (var i = 0; i <list.length; i++){
            var item = list[i]

            var $elem = $("#item-template")
                .clone()
                .removeAttr('id');

            $elem.find(".item-no").html(1 + i);
            $elem.find(".item-name").html(item.name);
            $elem.find(".item-addr").html(item.addr);

            $list.append($elem);
        }
    })
}

