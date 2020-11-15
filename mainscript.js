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

fetch('./header.html').then(response => {
  return response.text();
}).then(data => {
  document.querySelector('header').innerHTML = data;
});


//scroll back to top when images inside #shuffle are loaded
function totop() {
  $('#shuffle').imagesLoaded(function() {
    window.scrollTo(0, 0);
  });
}

function showCategory(category) {
  $(".project").each(function() {
    if (!$(this).hasClass(category)) {
      $(this).css({
        'display': 'none'
      });
    }
    if ($(this).hasClass(category)) {
      $(this).css({
        'display': 'block'
      });
    }
  });
  if (!$("#myDropdown").hasClass("hidden")) {
    $("#myDropdown").toggleClass("hidden flexbox");
    $(".men-icon").toggleClass("no-display");
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
  $("#myDropdown").toggleClass("hidden flexbox");
  $(".men-icon").toggleClass("no-display");
}

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     console.log($(".dropdown-content").is(":visible"));
//     if ($(".dropdown-content").is(":visible"))
//     {
//       $(".dropdown-content").toggle();
//     }
//   }
// }

$(document).ready(function() {

  // if fragment exists
  if (window.location.hash) {
    var hash = window.location.hash;
    hash = hash.split("=");
    category = hash[1];
    //alert(hash[1]);
    showCategory(category);
  }


  //only shows the category that has been clicked in the navigation bar
  // $("nav ul p, nav ul a").click(function() {
  //   //position();
  //   //shuffle();
  //   var category = $(this).attr("id");
  //   if (window.location.pathname != "/index.html") {
  //     window.location = "/index.html#category=" + category;
  //   } else {
  //     totop();
  //     showCategory(category);
  //   }
  //
  // });

  $("nav .outside, nav .inside").click(function() {
    //position();
    //shuffle();
    var category = $(this).attr("id");
    if (window.location.pathname != "/index.html") {
      window.location = "/index.html#category=" + category;
    } else {
      totop();
      showCategory(category);
    }

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
  // position();
  // shuffle();
  // $(".project .projectelement").css({'display':'none'});
  // $(".projectelement:first-child").css({'display':'flex'});

});
