import ajaxReq from './ajax_User.js';
var socket = io.connect('http://localhost:8080');
var compile = $('#rest-template');

socket.on('newUser',newUser);

function renderRestRecs(restaurants) {
    $('.namesArea').empty();
    let template = Handlebars.compile($('#rest-template').html());
    let newHTML = template(restaurants);
    console.log(newHTML)
    $('.restaurants').append(newHTML);
}
function newUser(name){
    if(name.length > 5){
        ajaxReq.getRestaurants().then((data)=>{
           var array = data.recArray[0];
            renderRestRecs({restaurants:array});
        })
    }else{
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
newUser();
