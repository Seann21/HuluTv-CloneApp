$(document).ready(function() {
  let modal = $('.modal');
  let loginBtn = $('.login-btn');
  let closeBtn = $('.close');
  let btnfree = $('.btn-cta');
  
  loginBtn.on('click', function() {
    modal.css('display', 'block');
  });
  
  btnfree.on('click', function() {
    modal.css('display', 'block');
  });
  
  closeBtn.on('click', function() {
    modal.css('display', 'none');
  });
  
  $(window).on('click', function(e) {
    if (e.target == modal[0]) {
      modal.css('display', 'none');
    }
  });
});