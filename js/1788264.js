function loadData(request, targetId, sourceId){
    $.ajax({
        url: 'https://web1-api.herokuapp.com/api/'+request,
        cache: false,
        success: function(data){
            let jsonData = {
                data: data
            };
            let target = $(targetId);
            let template = Handlebars.compile($(sourceId).html());
            target.html(template(jsonData));
        }
    })
}