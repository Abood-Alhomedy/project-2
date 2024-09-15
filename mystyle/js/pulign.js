// var navbar = $(".navbar");
// $(window).scroll(function () {
//   if ($(this).scrollTop() >= 100) {
//     navbar.css("background-Color", "black");
//     navlink.css("color", "white");
//   }
// });

// var navitem=$(".nav-item ");
// var navlink=$(".nav-link");
// $("a").hover
// (
//     function(){
//         navlink.css("color","red");
//     },
//     function(){
//         navlink.css("color","black");
//     }
// );

// $(window).scroll(function(){
//     if($(this).scrollTop()>=100){
//         navbar.css("background-Color","black");
//         navlink.css("color","white");
//         $("a").hover
//         (
//             function(){
//                 navlink.css("color","red");
//             },
//             function(){
//                 navlink.css("color","white");
//             }
//         );

//     }
//     else if($(this).scrollTop()<100){
//         navbar.css("background-Color","rgba(0,0,0,0");
//         navlink.css("color","black");
//         $("a").hover
// (
//     function(){
//         navlink.css("color","red");
//     },
//     function(){
// navlink.css("color","black");
//     }
// );

//     }
// });
$(document).ready(function () {
  $(".active")
    .first()
    .hover(function () {
      $(".nav-item").children(":first").toggleClass("abood");
    });
});
$(window).scroll(function () {
  if ($(this).scrollTop() >= 100) {
    $(".navbar").css("background-Color", "white");
  } else if ($(this).scrollTop() < 100) {
    $(".navbar").css("background-Color", "rgba(1,1,1,0)");
  }
});

//لجعل الخطوط التي تحت العناوين يتغير لونها عند النقر عليها
$(".parent").children(":first").addClass("clicked"); //لجعل الخط تحت العنوان الاول لونه مختلف من البدايه
$(document).ready(function () {
  $(".fea")
    .first()
    .click(function () {
      $(".parent").children(":first").next().removeClass("clicked");

      $(".parent").children(":last").prev().removeClass("clicked");

      $(".parent").children(":last").removeClass("clicked");

      $(".parent").children(":first").addClass("clicked");
      $(".all-fea").css("display", "contents");
      $(".all-fea2").css("display", "none");
      $(".all-fea3").css("display", "none");
      $(".all-fea4").css("display", "none");
    });

  $(".fea")
    .first()
    .next()
    .click(function () {
      $(".parent").children(":first").removeClass("clicked");

      $(".parent").children(":last").prev().removeClass("clicked");

      $(".parent").children(":last").removeClass("clicked");

      $(".parent").children(":first").next().addClass("clicked");
      $(".all-fea").css("display", "none");
      $(".all-fea2").css("display", "contents");
      $(".all-fea3").css("display", "none");
      $(".all-fea4").css("display", "none");
    });

  $(".fea")
    .last()
    .prev()
    .click(function () {
      $(".parent").children(":first").removeClass("clicked");

      $(".parent").children(":first").next().removeClass("clicked");

      $(".parent").children(":last").removeClass("clicked");

      $(".parent").children(":last").prev().addClass("clicked");
      $(".all-fea").css("display", "none");
      $(".all-fea2").css("display", "none");
      $(".all-fea4").css("display", "none");
      $(".all-fea3").css("display", "contents");
    });

  $(".fea")
    .last()
    .click(function () {
      $(".parent").children(":first").removeClass("clicked");

      $(".parent").children(":first").next().removeClass("clicked");

      $(".parent").children(":last").prev().removeClass("clicked");

      $(".parent").children(":last").addClass("clicked");
      $(".all-fea").css("display", "none");
      $(".all-fea2").css("display", "none");
      $(".all-fea3").css("display", "none");
      $(".all-fea4").css("display", "contents");
    });
});
// $(".active-proj").children(":first").addClass("act-proj");
$(".active-proj").children(":first").addClass("act-proj");
$(document).ready(function () {
  $(".li")
    .first()
    .click(function () {
      $(".active-proj").children(":first").addClass("act-proj");
      $(".active-proj").children(":first").next().removeClass("act-proj");
      $(".active-proj")
        .children(":first")
        .next()
        .next()
        .removeClass("act-proj");
      $(".active-proj").children(":last").prev().removeClass("act-proj");
      $(".active-proj").children(":last").removeClass("act-proj");
      $(".all-proj").css("display", "contents");
      $(".Construction").css("display", "none");
      $(".Remodeling").css("display", "none");
      $(".Repairs").css("display", "none");
      $(".Design").css("display", "none");
    });

  $(".li")
    .first()
    .next()
    .click(function () {
      $(".active-proj").children(":first").next().addClass("act-proj");
      $(".active-proj").children(":first").removeClass("act-proj");
      $(".active-proj")
        .children(":first")
        .next()
        .next()
        .removeClass("act-proj");
      $(".active-proj").children(":last").prev().removeClass("act-proj");
      $(".active-proj").children(":last").removeClass("act-proj");
      $(".Remodeling").css("display", "contents");
      $(".all-proj").css("display", "none");
      $(".Construction").css("display", "none");
      $(".Repairs").css("display", "none");
      $(".Design").css("display", "none");
    });

  $(".li")
    .first()
    .next()
    .next()
    .click(function () {
      $(".active-proj").children(":first").next().next().addClass("act-proj");
      $(".active-proj").children(":first").removeClass("act-proj");
      $(".active-proj").children(":first").next().removeClass("act-proj");
      $(".active-proj").children(":last").prev().removeClass("act-proj");
      $(".active-proj").children(":last").removeClass("act-proj");
      $(".Construction").css("display", "contents");
      $(".Remodeling").css("display", "none");
      $(".all-proj").css("display", "none");
      $(".Repairs").css("display", "none");
      $(".Design").css("display", "none");
    });

  $(".li")
    .last()
    .prev()
    .click(function () {
      $(".active-proj").children(":last").prev().addClass("act-proj");
      $(".active-proj")
        .children(":first")
        .next()
        .next()
        .removeClass("act-proj");
      $(".active-proj").children(":first").removeClass("act-proj");
      $(".active-proj").children(":first").next().removeClass("act-proj");
      $(".active-proj").children(":last").removeClass("act-proj");
      $(".Repairs").css("display", "contents");
      $(".Construction").css("display", "none");
      $(".Remodeling").css("display", "none");
      $(".all-proj").css("display", "none");
      $(".Design").css("display", "none");
    });

  $(".li")
    .last()
    .click(function () {
      $(".active-proj").children(":last").addClass("act-proj");
      $(".active-proj")
        .children(":first")
        .next()
        .next()
        .removeClass("act-proj");
      $(".active-proj").children(":first").removeClass("act-proj");
      $(".active-proj").children(":first").next().removeClass("act-proj");
      $(".active-proj").children(":last").prev().removeClass("act-proj");
      $(".Design").css("display", "contents");
      $(".Construction").css("display", "none");
      $(".Remodeling").css("display", "none");
      $(".all-proj").css("display", "none");
    });
});

// $(document).ready(function(){
//     $(".fea").last().click(function(){

//         $(".parent").children(":last").toggleClass("clicked")
//     });
// });

// $(document).ready(function(){
//     $(".fea").first().next().click(function(){

//         $(".parent").children(":first").next().toggleClass("clicked")
//     });
// });

// $(".body-Services").hover
// (
//     function(){
//         $(".read-more").css("color","yellow");
//         $("line").css("color","yellow");
//     },
//     function(){
//         $("line").css("color","black");
//         $(".read-more").css("color","black");
//     }
// );
