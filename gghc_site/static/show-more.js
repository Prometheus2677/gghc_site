//  Show more letters

$ShowHideMoreLetters = $('.letters');
$ShowHideMoreLetters.each(function() {
  var $times = $(this).children('.letter');

  if ($times.length > 3) {
    $ShowHideMoreLetters.children(':nth-of-type(n+4)').addClass('moreShown').hide();
    $(this).find('p.message span').addClass('more-times overflow').html('Show All Letters');
  }
});

$(document).on('click', '.letters > p > span', function() {
  var that = $(this);
  var thisParent = that.closest('.letters');

  if (that.hasClass('more-times')) {
    thisParent.find('.moreShown').show();
    that.toggleClass('more-times', 'less-times').html('Show Fewer Letters');
  }
  else {
    thisParent.find('.moreShown').hide();
    that.toggleClass('more-times', 'less-times').html('Show All Letters');
  }
});

// Show more podcasts

$ShowHideMorePodcasts = $('.podcasts');
$ShowHideMorePodcasts.each(function() {
  var $times = $(this).children('.podcast');

  if ($times.length > 2) {
    $ShowHideMorePodcasts.children(':nth-of-type(n+3)').addClass('moreShown').hide();
    $(this).find('p.message span').addClass('more-times overflow').html('Show All Videos');
  }
});

$(document).on('click', '.podcasts > p > span', function() {
  var that = $(this);
  var thisParent = that.closest('.podcasts');

  if (that.hasClass('more-times')) {
    thisParent.find('.moreShown').show();
    that.toggleClass('more-times', 'less-times').html('Show Fewer Videos');
  }
  else {
    thisParent.find('.moreShown').hide();
    that.toggleClass('more-times', 'less-times').html('Show All Videos');
  }
});
