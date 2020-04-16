$(function(){
  $('#new_post').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
  })
})
