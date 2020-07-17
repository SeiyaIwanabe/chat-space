$(function(){
  function buildHTML(message) {
    if ( message.image ) {
      let html =
        `<div class="MessageBox">
          <div class="MessageInfo">
            <div class="MessageInfo__userName">
              $#{message.user_name}
            </div>
            <div class="MessageInfo__date>">
              ${message.created_at}
            </div>
          </div>
          <div class="Message-content">
            <p class="Message-content__content">
              ${message.content}
            </p>
            <img class="Message-content__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="MessageBox">
        <div class="MessageInfo">
          <div class="MessageInfo__userName">
            ${message.user_name}
          </div>
          <div class="MessageInfo__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Message-content">
          <p class="Message-content__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('#new_post').on('submit', function(e) {
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      let html = buildHTML(data);
      $('.Main-chat__message-list').append(html);
      $('.Main-chat__message-list').animate({ scrollTop: $('.Main-chat__message-list')[0].scrollHeight});      
      $('form')[0].reset();
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  });
});