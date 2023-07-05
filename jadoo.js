
$(document).ready(function () {

  document.querySelector('.hamburger').addEventListener("click", () => {
    console.log("clicked");

    if (document.querySelector(".out").style.display === "flex") {
      console.log("Not showing");
      document.querySelector(".out").style.display = "none";
      
      $(".hamimg").css("background-color", "#F9FAFD00");
      $(".Topnav").css("background-color", "#F9FAFD00");
      $('.Topnav').css({ "padding-top": 10 });
      setTimeout(() => {
        document.querySelector(".out").style.opacity = "0";
      }, 20);
    } else {
      console.log("showing");

      document.querySelector(".out").style.display = "flex";
      
      document.querySelector(".out").style.position = "relative";
      $(".hamimg").css("background-color", "#F0F4F9");
      $(".Topnav").css("background-color", "#F0F4F9");
      setTimeout(() => {
        document.querySelector(".out").style.opacity = "1";
      }, 20);

    }

  });
  let nav = document.querySelector(".Topnav");
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  }





  $(window).resize(function () {
    // This will fire each time the window is resized:
    if ($(window).width() >= 970) {
      // if larger or equal
      $('.Topnav').css({ "padding-top": 40 });
      if (document.querySelector(".out").style.display === "flex") {
        document.querySelector(".out").style.display = "none";
        $('.Topnav').css({ "background-color": "#F9FAFD00" });
        $('.Topnav').css({ "background-color": "#F9FAFD00" });
      }
    } else {
      $('.Topnav').css({ "padding-top": 10 });
    }
  }).resize();



  document.querySelector(".heart").addEventListener("mouseover", () => {
    console.log("Showpop");
    document.querySelector(".popup").style.display = "block";


    document.querySelector(".heart").addEventListener("mouseleave", () => {
      console.log("hidepop");
      document.querySelector(".popup").style.display = "none";
    })
  });


  // card5 code********************************************************


  // slide to start. should always be 1 as it's also the lower bound to the number of slides. corresponds to [pos] attribute on html element
  let active_slide = 1;

  // last slide. should be the upper bound to the number of slides. corresponds to [pos] attribute on html element
  let slide_count = 3;

  // speed of animations (ms)
  let speed = 250;


  // hide all slides that aren't starting active slide
  $(".slide[pos!='" + active_slide + "']").each(function () {
    $(this).hide();
  })


  $(".slide-toggle[direction='next']").click(function () {

    // non active slides moved down so they can slide up when activated
    $(".slide[pos!='" + active_slide + "']").each(function () {
      $(this).css("top", "10px");
    })


    let next_slide = active_slide + 1;


    if (next_slide <= slide_count) {

      /*   
      Note: delay only works if .hide() or .show() are in its internal queue. Therefore you need to pass an argument to it, even if it's 0. (praise be to stackoverflow)
      */

      $(".slide[pos='" + active_slide + "']").animate({ opacity: 0, top: "-10px" }, { duration: speed }).hide(0).animate({ top: "10px" });

      $(".slide[pos='" + next_slide + "']").delay(speed).show(0).animate({ opacity: 1, top: "0px" }, { duration: speed });


    } else {

      next_slide = 1;

      $(".slide[pos='" + active_slide + "']").animate({ opacity: 0, top: "-10px" }, { duration: speed }).hide(0).animate({ top: "10px" });

      $(".slide[pos='" + next_slide + "']").delay(speed).show(0).animate({ opacity: 1, top: "0px" });

    }

    // once animations are done, set new active slide
    active_slide = next_slide;

  })


  $(".slide-toggle[direction='prev']").click(function () {

    // non active slides moved up so they can slide down when activated
    $(".slide[pos!='" + active_slide + "']").each(function () {
      $(this).css("top", "-10px");
    })


    let next_slide = active_slide - 1;


    if (next_slide < 1) {

      next_slide = slide_count;

      $(".slide[pos='" + active_slide + "']").animate({ opacity: 0, top: "10px" }, { duration: speed }).hide(0).animate({ top: "10px" });

      $(".slide[pos='" + next_slide + "']").delay(speed).show(0).animate({ opacity: 1, top: "0px" }, { duration: speed });

    } else {

      $(".slide[pos='" + active_slide + "']").animate({ opacity: 0, top: "10px" }, { duration: speed }).hide(0).animate({ top: "10px" });

      $(".slide[pos='" + next_slide + "']").delay(speed).show(0).animate({ opacity: 1, top: "0px" });

    }

    // once animations are done, set new active slide
    active_slide = next_slide;

  })
  // ++++++++++++++++++++++++++++++++++++++++++++








});