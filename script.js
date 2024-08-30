$(document).ready(function () {
  $('#toggleMenu').click(function (event) {
    event.stopPropagation();
    var menu = $('#menu');

    if (menu.is(':visible')) {
      menu.removeClass('show').addClass('hidden');
      setTimeout(function () {
        menu.hide();
      }, 300); // Match this timeout with the CSS animation duration
    } else {
      menu.removeClass('hidden').addClass('show').show();
    }
  });

  $('body').click(function () {
    var menu = $('#menu');
    menu.removeClass('show').addClass('hidden');
    setTimeout(function () {
      menu.hide();
    }, 300);
  });
});