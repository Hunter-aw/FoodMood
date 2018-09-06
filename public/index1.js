import ajaxReq from './ajax_User.js';
var socket = io.connect('https://food-moood.herokuapp.com');
var compile = $('#rest-template');
var voted = false;

socket.on('newUser',newUser);

function renderRestRecs(restaurants) {
    $('.namesArea').empty();
    let template = Handlebars.compile($('#rest-template').html());
    let newHTML = template(restaurants);
    console.log(newHTML)
    $('.restaurants').append(newHTML);
}
function voteForRestaurant(id){
    return $.ajax({
        type:'GET',
        url:'voted/'+id
    }).catch((err)=>{console.log(err)})
}

function newUser(name){
    if(name.length > 5){
        ajaxReq.getRestaurants().then((data)=>{
            console.log(data)
           var array = data;
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
$('.userName').keypress(function (e) {
    var key = e.which;
    if(key == 13)  {
        $('.addName').click();
        return false;  
    }
});  
    $('#restau').on('click','#restaurant',((event)=>{
       if(voted){
           alert("cant vote twice");
       } else{
        let restaurantId = $(event.currentTarget).data().id;
           voted = true;
           voteForRestaurant(restaurantId);
       }
    }))
   


// events

getNewUser();
newUser();
voteRestaurant();
