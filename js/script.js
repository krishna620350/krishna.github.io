$(document).ready(function () {
    var typed = new Typed("#name", {
        strings: [
          "My name Is Krishna",
          "I am a software developer",
          "Feel free to contact me"
        ],
        typeSpeed: 80,
        backSpeed: 60,
        loop:true,
    });
    $(".read-cont").hide();
    $("#read-end").hide();
    $(".read-start").on("click",function() {
      $(".read-cont").fadeToggle("slow");
      $(".read-start").hide();
      $("#read-end").show();
    })
    $("#read-end").on("click",function() {
      $(".read-cont").fadeToggle("slow");
      $(".read-start").show();
      $("#read-end").hide();
    });
})