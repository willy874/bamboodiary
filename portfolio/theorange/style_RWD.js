$(document).ready(function(){
  var load_header_html = '<div id="nav"><div id="showMenu"><img src="img/LOGO_MENU.jpg" alt="" height="60px"></div><div id="LOGO"><a href="index.html"><img src="img/LOGO7(png).png" alt="" width="180px" height="76px" ></a></div><div id="LOGO_mobile"><a href="index.html"><img src="img/LOGO_index.jpg" alt="" width="100%" ></a></div><ul id="nav_ul"><li><h2>關於橙色</h2></li><li><h2>服務說明</h2></li><li><h2>最新消息</h2></li><li><h2>聯繫我們</h2></li></ul></div><div id="nav_menu"><div id="menu_area"><ul><a href="about_the_company.html"><li>關於我們</li></a><a href="unmanned_store.html"><li>關於無人</li></a><a><li>團隊介紹</li></a><a><li>服務經驗</li></a></ul><ul><a href="cooperation_process.html"><li>合作流程</li></a><a href="product_description.html"><li>產品介紹</li></a><a><li>品牌優勢</li></a><a href="question_answer.html"><li>問題回答</li></a></ul><ul><a><li>近期活動</li></a><a><li>文章分享</li></a><a><li>相關職缺</li></a></ul><ul><a href="store_location.html"><li>門市據點</li></a><a href="connection.html"><li>關注我們</li></a></ul><div id="menu_benner"><div id="benner_content"><img src="img/LOGO2.jpg" alt="" height="170px"></div></div></div></div>';
  /*
        <div id="nav">
        <div id="showMenu"><img src="img/LOGO_MENU.jpg" alt="" height="60px"></div>
        <div id="LOGO"><a href="index.html"><img src="img/LOGO7(png).jpg" alt="" width="180px" height="76px"></a></div>
        <div id="LOGO_mobile"><a href="index.html"><img src="img/LOGO_index.jpg" alt="" width="100%" ></a></div>
        <ul id="nav_ul">
          <li><h2>關於橙色</h2></li>
          <li><h2>服務說明</h2></li>
          <li><h2>最新消息</h2></li>
          <li><h2>聯繫我們</h2></li>
        </ul>
      </div>
      <div id="nav_menu">
        <div id="menu_area">
          <ul>
            <a href="about_the_company.html"><li>關於我們</li></a>
            <a href="unmanned_store.html"><li>關於無人</li></a>
            <a><li>團隊介紹</li></a>
            <a><li>服務經驗</li></a>
          </ul>
          <ul>
            <a href="cooperation_process.html"><li>合作流程</li></a>
            <a href="product_description.html"><li>產品介紹</li></a>
            <a><li>品牌優勢</li></a>
            <a href="question_answer.html"><li>問題回答</li></a>
          </ul>
          <ul>
            <a><li>近期活動</li></a>
            <a><li>文章分享</li></a>
            <a><li>相關職缺</li></a>
          </ul>
          <ul>
            <a href="store_location.html"><li>門市據點</li></a>
            <a href="connection.html"><li>關注我們</li></a>
          </ul>
          <div id="menu_benner">
            <div id="benner_content"><img src="img/LOGO2.jpg" alt="" height="170px"></div>
          </div>
        </div></div>
  */
  var load_footer_html = '<div id="footer_top"><img src="img/footer_top_background.jpg" alt="" width="100%"></div><div id="footer_main"><div id="footer_QR"><img src="img/QR.png" alt="" width="160px"></div><div id="font_text"><ul><li><a>服務電話：<br class="footer_text_ul">02-27468427</a></li><li><a>電子郵件：<br class="footer_text_ul">the.orange.tw@gmail.com</a></li><li><a>服務地址：<br class="footer_text_ul">台北市松山區八德路四段604號2樓之5</a></li></ul></div> </div><div id="Copyright">© Copyright 2018-2019 theorange.com All rights reserved.</div>';
  /*
    <div id="main">
      <a href="index.html"><section id="sec1">
        <div class="slider" id="slider">
          <div><img src="img/slider/slider01.jpg" alt="" width="100%"></div>
          <div><img src="img/1orange.jpg" alt="" width="100%"></div>
          <div><img src="img/3orange.jpg" alt="" width="100%"></div>
        </div>
        </section></a>
      <section id="sec2">
        <div id="content">
        </div>
      </section>
    </div> 
    <footer>
      <div id="footer_top"><img src="img/footer_top_background.jpg" alt="" width="100%"></div>
      <div id="footer_main">
        <div id="footer_QR">
          <img src="img/QR.png" alt="" width="160px">
        </div>
        <div id="font_text"><ul>
          <li>服務電話：<br class="footer_text_ul">02-27468427</li>
          <li>電子郵件：<br class="footer_text_ul">the.orange.tw@gmail.com</li>
          <li>服務地址：<br class="footer_text_ul">台北市松山區八德路四段604號2樓之5</li>
          </ul></div> 
      </div>
      <div id="Copyright">© Copyright 2018-2019 theorange.com All rights reserved.</div>
  */
    $('header').html(load_header_html);//header load
    $('footer').html(load_footer_html);//footer load
  
    //網頁載入判斷
  function checkMenu(){
    if($('#showMenu').is(':visible')){ 
      $('#nav_ul').hide(); 
    }else{
      $('#nav_ul').show().css('display','flex'); 
    }
  }
  checkMenu();
  //視窗調整大小判斷
  $(window).resize(function(){ 
    checkMenu();
    //window.location.reload();
  });

  //showMenu開關
  $('#showMenu').click(function(){
    $('#nav_ul').slideToggle();
    $('#nav_menu').hide();
    if($('#nav_ul').is(':visible')){ $('#nav_ul').css('display','block');  }
  });
  
})



var filename = location.href; 
filename = filename.substr(filename.lastIndexOf('/')+1);  //取得文件名稱
filename = filename.substring(0, filename.length-5);      //清除字尾

//Page RWD style 加載

if(navigator.userAgent.match(/Android|iPhone|iPad/i)) 
{ var style_net_name = 'mobile_'+ filename +'_style.css'; 
  $('head').append('<link rel="stylesheet" type="text/css" href="mobile_style.css">');}
else{
  var style_net_name = 'table_'+ filename +'_style.css';
  $('head').append('<link rel="stylesheet" type="text/css" href="table_style.css">');
}
$('head').append('<link rel="stylesheet" type="text/css" href="'+ style_net_name +'">');

//head data 加載
$('head').append('<link rel="Shortcut Icon" type="image/x-icon" href="img/LOGO2.jpg" />'); //net icon
$('head').append('<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css"> />'); //icon img
 