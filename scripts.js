$(document).ready(function(){

  var $first = $('li:first', 'ul'),
      $last = $('li:last', 'ul');
      $first.addClass('selected');

  $("#next").click(function () {

      var $next, $selected = $(".selected");

      $next = $selected.next('li').length ? $selected.next('li') : $first;
      $selected.removeClass("selected");
      $next.addClass('selected');

  });

  $("#prev").click(function () {
      var $prev, $selected = $(".selected");

      $prev = $selected.prev('li').length ? $selected.prev('li') : $last;
      $selected.removeClass("selected");
      $prev.addClass('selected');
  });



});
