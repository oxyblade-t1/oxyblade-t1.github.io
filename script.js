$('.tab-link-tyopliy-pol').click(function () {
  let target = $(this.hash);
  if (target.length) {
    $('html,body').animate({
      scrollTop: target.offset().top - 0,
    }, 1);
  }
});

jQuery(function () {

  jQuery('.tab-link-tyopliy-pol-fade').click(function () {
    jQuery('.tab-tyopliy-pol-fade').hide().animate(
        {opacity: 0},
        0);
    jQuery('#content' + jQuery(this).attr('changeTab')).show().animate(
        {opacity: 1},
        400);
  });
});

jQuery(document).ready(function () {

  jQuery("#back-top").hide();

  jQuery(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 100) {
        jQuery('#back-top').fadeIn();
      } else {
        jQuery('#back-top').fadeOut();
      }
    });

    jQuery('#back-top a').click(function () {
      jQuery('body,html').animate({
        scrollTop: 0
      }, 0);
      return false;
    });
  });
});
