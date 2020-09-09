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
    })
})

function search(from, to){
    var url = 'https://javascript-basic.appspot.com/searchLocation';

    $.getJSON(url,{
        from,
        to,
    }, function(r){
        console.log(r)
    })
}

function createSpotList(){
    var $tmpl = $('')
}