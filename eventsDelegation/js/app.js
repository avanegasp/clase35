$(document).ready(function(){
  // Events delegation
  $('ul').on('click', 'li', function(){
    $(this).remove()
  })
})
