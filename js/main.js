var windowHeight = $(window).height();

var newHeight = windowHeight - 50;

$('#container').css({
  width: newHeight + 'px',
  height: newHeight + 'px'
});


var radius1 = 130; // adjust to move out items in and out
var fields = $('.orbit1'),
  container = $('#container'),
  width = container.width(),
  height = container.height();
var angle = 0,
  step = (2 * Math.PI) / fields.length;
fields.each(function() {
  var x = Math.round(width / 2 + radius1 * Math.cos(angle) - $(this).width() / 2);
  var y = Math.round(height / 2 + radius1 * Math.sin(angle) - $(this).height() / 2);
  $(this).css({
    left: x + 'px',
    top: y + 'px'
  });
  angle += step;
});

var radius2 = 210;
var fields = $('.orbit2'),
  container = $('#container'),
  width = container.width(),
  height = container.height();
var angle = 45,
  step = (2 * Math.PI) / fields.length;
fields.each(function() {
  var x = Math.round(width / 2 + radius2 * Math.cos(angle) - $(this).width() / 2);
  var y = Math.round(height / 2 + radius2 * Math.sin(angle) - $(this).height() / 2);
  $(this).css({
    left: x + 'px',
    top: y + 'px'
  });
  angle += step;
});


var radius3 = 290;
var fields = $('.orbit3'),
  container = $('#container'),
  width = container.width(),
  height = container.height();
var angle = 0,
  step = (2 * Math.PI) / fields.length;
fields.each(function() {
  var x = Math.round(width / 2 + radius3 * Math.cos(angle) - $(this).width() / 2);
  var y = Math.round(height / 2 + radius3 * Math.sin(angle) - $(this).height() / 2);
  $(this).css({
    left: x + 'px',
    top: y + 'px'
  });
  angle += step;
});
