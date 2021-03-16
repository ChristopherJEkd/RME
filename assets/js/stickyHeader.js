// When the user scrolls the page, execute myFunction
window.onscroll = function() { stickyMainMenuBarFunction() };

// Get the header
var header = document.getElementById("headerId");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyMainMenuBarFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("stickyMainMenuBar");
  } else {
    header.classList.remove("stickyMainMenuBar");
  }
  
  
	var position = $(this).scrollTop();
	$('.section').each(function() {
		var target = $(this).offset().top-135;
		var id = $(this).attr('id');

		if (position >= target) {
                    $('#myTopnav > a').removeClass('active');
//                    $('#myTopnav > a[href=#' + id + ']').addClass('active');
                    var clickId = document.getElementById("h1"+id);
                    clickId.classList.add("active");            
                }
	});
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function scrollto(div) {
  $('html,body').animate({
     scrollTop: $("#"+div).offset().top-120
   },
   'slow'
  );

    $('#myTopnav').find("*").remove("active");
  
//  var navId = document.getElementById("myTopnav");
//  navId.classList.remove("active");

//  $('#myTopnav').find(div).add("active");
  
//    $('#myTopnav > a').removeClass('active');
//    $('#myTopnav').find("#"+div).addClass("active");
}
