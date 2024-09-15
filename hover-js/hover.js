$(document).ready(function(){

    $("button").hover
    (
      function()
      {
        $("div").hide(2000,function(){
             $("span").hide();
             
        }
        );

      }
        , 
      function()
      {
         $("p").hide();
      }

    );
 });
 