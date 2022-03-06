import $ from "jquery"

$(document).ready(function(){
    // var arr = [
    //     {
    //         "title":"Horizon Forbidden West",
    //         "date" : "February 18, 2022",
    //         "desc" : "Join Aloy in the Forbidden West",
    //         "image" : "https://static.metacritic.com/images/products/games/9/b0962820260857d059a0ce0cebfd99fb-98.jpg",
    //     },
    //     {
    //         "title":"Dynasty Warriors 9 Empires",
    //         "date" : "February 15, 2022",
    //         "desc" : "a unique 'Romance of the Three Kingdoms' experience.",
    //         "image" : "https://static.metacritic.com/images/products/games/5/386a7c5ccab154cc249764de56c2573c-98.jpg",
            
    //     }
    // ];
    // $(arr).each(function(){

    // })
    // $.each(arr, function (index, value) {
    //     $('.out').append('<div class="io movie-' + index + '">' + '<img src="">' + '<h3></h3>' + '<small></small>' + '<p></p>' +'</div>');

    //     $('.out .movie-' + index + ' h3').html(value.title);
    //     $('.out .movie-' + index + ' small').html(value.date);
    //     $('.out .movie-' + index + ' p').html(value.desc);
    //     $('.out .movie-' + index + ' img').attr('src',value.image);
        
    // });

//     var x = 'X'
//     var o = 'O'
//     var  turn = Math.ceil(Math.random()*2);

//     var arr = ['0','0','0','0','0','0','0','0','0'];

//     if(turn==1){
//         $(".turn").html("сейчас ходит игрок: "+x)
//     }
//     else{
//         $(".turn").html("сейчас ходит игрок: "+o)
//     }

    
// $('.slot').each(function(index,value){
//     $(this).on('click',function(){
//         if($(this).text() != x && $(this).text() != o ){
//             if(turn==1){
//                 turn = 2;
//                 arr[index] = x
//                 $(this).html(x);
//                 $(".turn").html("сейчас ходит игрок: "+o)
//                 console.log(arr);

//             }
//             else{
//                 turn = 1;
//                 arr[index] = o
//                 $(this).html(o);
//                 $(".turn").html("сейчас ходит игрок: "+x)
//                 console.log(arr);
//             }
            
//             for(var i =0;i<9;i+=3){
//                 if(arr[i]==arr[i+1]&&arr[i]==arr[i+2]&&arr[i]!='0'){
//                     $(".turn").html("победил игрок "+arr[i])
//                 }
//             }
//             for(var i =0;i<3;i++){
//                 if(arr[i]==arr[i+3]&&arr[i]==arr[i+3]&&arr[i]!='0'){
//                     $(".turn").html("победил игрок "+arr[i])
//                 }
//             }
//             if(arr[0]==arr[4]&&arr[0]==arr[8]&&arr[0]!='0'){
//                 $(".turn").html("победил игрок "+arr[0])
//             }
//             if(arr[2]==arr[4]&&arr[2]==arr[6]&&arr[2]!='0'){
//                 $(".turn").html("победил игрок "+arr[2])
//             }

//         }else{
//             console.log("слот занят");
//         }

//     })

// })

    var x = $('.game').width()/2;
    var y=0;
    
    $('.ship').css("bottom",y)
    $('.ship').css("right",x)

    $('.top').on('click',function(){
        y+=10;
        $('.ship').css("bottom",y)
    })

    $('.bottom').on('click',function(){
        y-=10;
        $('.ship').css("bottom",y)
    })

    $('.right').on('click',function(){
        x-=10;
        $('.ship').css("right",x)
    })

    $('.left').on('click',function(){
        x+=10;
        $('.ship').css("right",x)
    })
});