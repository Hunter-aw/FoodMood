var socket = io.connect('http://localhost:8080');

socket.on('newUser',newUser);

function newUser(name){
    console.log(name);
    $('.namesArea').empty();
    for (let x in name) {
        $('.namesArea').append('<h1 class="boxName">'+name[x]+'</h1>');
      }
      $('.boxName').each(function() {
        $(this).css({
            left: Math.random() * ($('.namesArea').width() - $(this).width()),
            top: Math.random() * ($('.namesArea').height() - $(this).height())
          });
      });
}


function getNewUser(){
   $('.addName').on('click',function(){
       let name = $('.userName').val();
       if(name.length < 2){
        $('.alert').css("display","block");
       }else{
        socket.emit('getNewUser',name);
       }
   })
}
   


// events

getNewUser();

