$(document).ready(function() {
    var $body = $("body");

$(".hiddenImg").attr("src","gif2.gif");
// $(".hiddenImg").hide();
// $(".hiddenImg").css("height","300px");
// $(".hiddenImg").css("width","300px");


    $(document).on("mousemove", function(event) {

        $(".navContainer").css("background", "linear-gradient(" + event.pageX + "deg, red, purple)");
          $(".navContainer").css("color", "black").text();
      //  $(".navContainer").css("color", "rgb(255,0," + event.pageX + ")").text;
    });

    $("li").hover(
        function() {
            $(this).css("opacity", "0.5").text();
        }).mouseout(function() {
        $(this).css("opacity", "1").text();
    });

    $("li").click(
        function() {
            $(this).css("background-color", "#909090");
            $(this).css("color", "#fff");
            var gifNumber = $(this).text().split(" ");
            $(this).text(">CLICKED!!");
            $(".hiddenImg").attr("src","gif" + gifNumber[1] + ".gif");
            console.log(gifNumber[1]);
            // $(".hiddenImg").toggle();
        }).on("mouseout", function() {
          $(".hiddenImg").attr("src","gif2.gif");

    //    $(this).css("background-color", "#fff");
        $(this).css("color", "#fff");
        $(this).text();
    });
});
