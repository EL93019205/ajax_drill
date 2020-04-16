$(function(){

  function buildPost(post){
    var html = `<div class="content">
                  ${post.hogehoge}
                </div>`;
    return html;
  }

  $('#new_post').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'JSON',
      processData: false,
      contentType: false

    })
    .done(function(post){
      var html = buildPost(post);
      $('.contents').append(html);
      $('#post_text').val('');
      $('.form_submit').prop('disabled',false);
    })
    .fail(function(){

    })
  })
})
