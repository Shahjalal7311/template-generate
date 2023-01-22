$(function() {
  //menu open
  $(".sp-menu-bar").on("click",function(){
    var width = $(window).width();
    if (width < 767) {
      $(".manu-slide-open").animate({ left: "0%" },500)
      $('body').css({'overflow':'hidden', 'position':'fixed','width':'100%'});
    }
    return false;
  });
  // menu close
  $(".menu-close").on("click",function(){
    var width = $(window).width();
    if (width < 767) {
      $('.manu-slide-open').animate({ left: "-100%" }, 500)
      $('body').css({'overflow':'auto', 'position':'relative'});
    }
  });

  // sub-menu  drop down
  $("body").on('click', '.sub-menu.mclose', function(event) {
    event.preventDefault();
    $(this).removeClass('mclose').addClass('mopen')
    $(this).closest('.dropdown-menu-li').find('.sub-menu-dropdown').slideDown('1000')
  });
  $("body").on('click', '.sub-menu.mopen', function(event) {
    event.preventDefault();
    $(this).removeClass('mopen').addClass('mclose')
    $(this).closest('.dropdown-menu-li').find('.sub-menu-dropdown').slideUp('1000')
  });

  $(document).on('click', '.password_event', function() { 
    $('.password_event').toggleClass("fas fa-eye-slash");
    var input = $(".password");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
  });

  $(document).on('click', '.new_password_event', function() { 
    $('.new_password_event').toggleClass("fas fa-eye-slash");
    var input = $(".new_password");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
  });
  
  //submenu display
  $("body").on('click', '.sub-menu-open.mclose', function(event) {
    event.preventDefault();
    $('.sub-menu-open').removeClass('mopen').addClass('mclose')
    $('.sub-menu-open').closest('.dropdown').find('.sub-menu').hide()
    $(this).removeClass('mclose').addClass('mopen')
    $(this).closest('.dropdown').find('.sub-menu').show()
  });
  $("body").on('click', '.sub-menu-open.mopen', function(event) {
    event.preventDefault();
    $(this).removeClass('mopen').addClass('mclose')
    $(this).closest('.dropdown').find('.sub-menu').hide()
  });
  //hide menu click outsite
  $(document).on('click', function(event) {
    if ( $(event.target).closest('.dropdown').length === 0 ) {
      $('.sub-menu-open').removeClass('mopen').addClass('mclose')
      $('.sub-menu-open').closest('.dropdown').find('.sub-menu').hide()
    } 
  });

  // modal show and hide script
  $(document).ready(function(){
    $(".purchase-video-modal").show();
    $('.backdrop_modal').addClass('modal-backdrop fade in');
    $('body').addClass('modal-open');
  });

  $(document).on('click', '.modal-close' , function(event) {
    $('.purchase-video-modal').hide();
    $('.backdrop_modal').removeClass('modal-backdrop fade in');
    $('body').removeClass('modal-open');
  });

  $(document).on('click', function(event) {
    if ( $(event.target).closest('.modal-content').length === 0 ) {
      $('.purchase-video-modal').hide('slow');
      $('.backdrop_modal').removeClass('modal-backdrop fade in');
      $('body').removeClass('modal-open');
    } 
  });


})