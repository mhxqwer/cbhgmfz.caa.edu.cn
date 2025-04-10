
$('#btn').click(function() {
    var url = $('#btn').attr('data_url');
    var logout = $('#btn').attr('logout_url');
    var name = $('input[name=name]').val();
    var passwd = $('input[name=password]').val();

    $.post(url, {name: name, password: passwd}, function(data) { 
      if(data.info){
          alert(data.info);
      }else{
          $('#con').html('<li>欢迎您，'+data.name+'</li><li><a href="'+logout+'">退出</a></li>');          
      }
    }, 'json');
});

$('#Register').click(function() {
    var url = $('#Register').attr('reg_url');
    window.location.href=url;
});

$('#Apply').click(function() {
    var url = $('#Apply').attr('url');
    window.location.href=url;
});

$('#Roll').click(function() {
    var url = $('#Roll').attr("url");
    window.location.href=url;
});

$('#Transcript').click(function () {
    var url = $('#Transcript').attr("url");
    window.location.href=url;
})