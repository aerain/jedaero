$(function() {

  $('.sidebar').materialSidebar({
    settings: {
      opener: '#open-sb',
      wrapper: '.wrapper'
    },
    sidebar: {
      align: 'left',
      closingLinks: '#closeButton2'
    }
  });

});

function closeSidebar() {
  var nsbw = $('.sidebar').width();
  var duration = 500;
  var easing = 'swing';
  var overflowFalse = function() {
    $('body, html').css({
      overflow: 'auto'
    });
  };

  animationReset = {
    marginRight: '+=' + nsbw,
    marginLeft: '-=' + nsbw
  };

  $('.sidebar').animate(animationReset, {
    duration: duration,
    easing: easing,
    complete: overflowFalse
  });

  var maskDiv = $('body').children().filter(function() {
    return $(this).data('ssbplugin') === 'mask';
  });

  maskDiv.fadeOut();

  //$('.sidebar').hide();
}
