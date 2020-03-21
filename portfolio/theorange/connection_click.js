$(document).ready(function(){
  
  function readyConnectionBenner(){
  $('#sec2').hide()
  ;}
  readyConnectionBenner();
  
  $('figure:eq(0)').click(function(){
  var inner_a_html = '<a href="https://www.facebook.com/%E6%A9%99%E8%89%B2%E5%9C%8B%E9%9A%9B-638675916480268/">';
  var inner_img_html = '<img src="img/connection/Facebook-QR.jpg" alt="" width="100%">';
  var inner_text_html = inner_a_html+'Facebook粉絲團<br>橙色國際</a>';
  $('#sec2').slideDown()
    $('#QR_code_img').html(inner_img_html)
    $('#QR_code_text').html(inner_text_html)
  $('html,body').animate({scrollTop:$('#sec2').offset().top}, 1000);
  ;})
  
  $('figure:eq(1)').click(function(){
  var inner_a_html = '<a href="https://www.instagram.com/the.orange.tw/">';
  var inner_img_html = '<img src="img/connection/Instagram-QR.jpg" alt="" width="100%">';
  var inner_text_html = inner_a_html+'Instagram官方帳號<br>橙色國際</a>';
  $('#sec2').slideDown()
    $('#QR_code_img').html(inner_img_html)
    $('#QR_code_text').html(inner_text_html)
  $('html,body').animate({scrollTop:$('#sec2').offset().top}, 1000);
  ;})
  
  $('figure:eq(2)').click(function(){
  var inner_a_html = '<a href="https://line.me/R/ti/p/%40mkq8969l/">';
  var inner_img_html = '<img src="img/connection/Line-QR.jpg" alt="" width="100%">';
  var inner_text_html = inner_a_html+'Line@生活圈<br>橙色國際</a>';
  $('#sec2').slideDown()
    $('#QR_code_img').html(inner_img_html)
    $('#QR_code_text').html(inner_text_html)
  $('html,body').animate({scrollTop:$('#sec2').offset().top}, 1000);
  ;})
    
  $('figure:eq(3)').click(function(){
  var inner_a_html = '<a href="http://weixin.qq.com/r/qS7x6fTEPqlBrbCK93u7/">';
  var inner_img_html = '<img src="img/connection/WeChat-QR.jpg" alt="" width="100%">';
  var inner_text_html = inner_a_html+'WeChat公眾號<br>橙色國際企業</a>';
  $('#sec2').slideDown()
    $('#QR_code_img').html(inner_img_html)
    $('#QR_code_text').html(inner_text_html)
  $('html,body').animate({scrollTop:$('#sec2').offset().top}, 1000);
  ;})
  
  
  
  
  
  
  
  
  
  
  
  
  
  
})