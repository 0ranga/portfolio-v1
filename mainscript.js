$(document).ready(function() {

  //random positioning of projectelement
  // function position() {
  //   $(".projectelement").each(function() {
  //     $(this).children().first().removeClass("left");
  //     $(this).children().first().removeClass("center");
  //     $(this).children().first().removeClass("right");
  //     var i = Math.floor(Math.random() * 3);
  //     if (i == 0) {
  //       $(this).children().first().addClass("left");
  //     }
  //     if (i == 1) {
  //       $(this).children().first().addClass("center");
  //     }
  //     if (i == 2) {
  //       $(this).children().first().addClass("right");
  //     }
  //   });
  // }

  //shuffle order of div inside #shuffle
  // function shuffle() {
  //   var parent = $("#shuffle");
  //   var divs = parent.children();
  //   while (divs.length) {
  //     parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
  //   }
  // }

  //scroll back to top when images inside #shuffle are loaded
  function totop() {
    $('#shuffle').imagesLoaded(function() {
      window.scrollTo(0, 0);
    });
  }

  //only shows the category that has been clicked in the navigation bar
  $("nav ul p, nav ul a").click(function() {
    //position();
    //shuffle();
    if(window.location.pathname!="/"){
      window.location="/";
    }

    var category = $(this).attr("id");
    $(".project").each(function() {
      if (!$(this).hasClass(category)) {
        $(this).css({'display':'none'});
      }
      if ($(this).hasClass(category)) {
        $(this).css({'display':'flex'});
      }
    });
    totop();
  });

  //only shows the project that has been clicked
  // $(".projectelement").click(function() {
  //   position();
  //   var projectname = $(this).parent().attr("id");
  //   $(".project").each(function() {
  //     if ($(this).attr("id") != projectname) {
  //       $(this).css({'display':'none'});
  //     }
  //     if ($(this).attr("id") == projectname) {
  //       $(this).css({'display':'block'});
  //     }
  //   });
  //   $(this).parent().children().css({'display':'block'});
  //   totop();
  // });

  //when homepage is loaded
  position();
  shuffle();
  // $(".project .projectelement").css({'display':'none'});
  // $(".projectelement:first-child").css({'display':'flex'});

});
