//h2 hover變色
$('header h2').hover(
  function(){$(this).css('color','#ff8400');},
  function(){$(this).css('color','#fff');})

//nav_menu
$(document).ready(function(){
  function readyMenu(){
    $('#nav_menu').hide()
    $('#nav_menu ul').hide()
    ;}
  readyMenu();
  //滑鼠點擊nav開啟menu_area
  $('#nav_ul h2').click(function(){
    $('#nav_menu').slideDown();
    if(navigator.userAgent.match(/Android|iPhone|iPad/i)) 
    {$('#menu_benner').hide();}
  })
  //滑鼠點擊nav修改menu_area
  for (var i=0; i<4; i++){
  $('#nav_ul h2:eq(i)').click(function(){
    $('#nav_menu ul').hide()
    $('#menu_area ul:eq(i)').slideDown();
    if(navigator.userAgent.match(/Android|iPhone|iPad/i)) 
    {$('#nav_ul').hide();}
  })
  }
 //滑鼠滑入nav修改menu_area
 // for (var i=0; i<4; i++){
  $('#nav_ul h2:eq(0)').hover(function(){
    if($(window).width() > 600){
      $('#nav_menu ul').hide()
      $('#menu_area ul:eq(0)').show();}
  })
  $('#nav_ul h2:eq(1)').hover(function(){
    if($(window).width() > 600){
      $('#nav_menu ul').hide()
      $('#menu_area ul:eq(1)').show();}
  })
  $('#nav_ul h2:eq(2)').hover(function(){
    if($(window).width() > 600){
      $('#nav_menu ul').hide()
      $('#menu_area ul:eq(2)').show();}
  })
  $('#nav_ul h2:eq(3)').hover(function(){
    if($(window).width() > 600){
      $('#nav_menu ul').hide()
      $('#menu_area ul:eq(3)').show();}
  })
  //滑鼠滑出header隱藏menu_area
  $('header').mouseleave(function(){
    $('#nav_menu').slideUp()
    $('#nav_menu ul').slideUp()
    if(navigator.userAgent.match(/Android|iPhone|iPad/i)) 
    {$('#nav_ul').hide();}else{$('#nav_ul').show();}
  })
  //滑鼠滑入menu_area li修改menu_benner
  //li:eq(00)
  function menu_area_list_hover(){ $('#benner_content').html('<img src="img/LOGO2.jpg" alt="" height="170px">'); }

  $('#menu_area li:eq(0)').hover(function(){
    //li:eq(00)
    var inner_string_html = '<div id="about_the_company"><h1 id="menu_benner_title1">關於橙色國際  The Orange</h1><div id="menu_benner_boder"></div><h2 id="menu_benner_title2">為什麼要選擇橙色國際?</h2></div>';
    /*<div id="about_the_company">
        <h1 id="menu_benner_title1">關於橙色國際  The Orange</h1>
        <div id="menu_benner_boder"></div>
        <h2 id="menu_benner_title2">為什麼要選擇橙色國際?</h2>
      </div>*/
    $('#benner_content').html(inner_string_html);},function(){  menu_area_list_hover()  ;})
  //li:eq(01)
  $('#menu_area li:eq(1)').hover(function(){
    var inner_string_html = '<div id="unmanned_store"><h1 id="menu_benner_title1">關於無人商店  Unmanned Store</h1><div id="menu_benner_boder"></div><h2 id="menu_benner_title2">為什麼要轉型自動化無人商店?</h2></div>';
    /*<div id="about_the_company">
        <h1 id="menu_benner_title1">關於無人商店  Unmanned Store</h1>
        <div id="menu_benner_boder"></div>
        <h2 id="menu_benner_title2">為什麼要轉型自動化無人商店?</h2>
      </div>*/
    $('#benner_content').html(inner_string_html);},function(){  menu_area_list_hover()  ;})
  //li:eq(04)
  $('#menu_area li:eq(4)').hover(function(){
    var inner_string_html = '<div id="cooperation_process"><h1 id="menu_benner_title1">合作流程  Cooperation Process</h1><div id="menu_benner_boder"></div><h2 id="menu_benner_title2">要如何加入橙色國際的團隊?</h2></div>';
    /*<div id="about_the_company">
        <h1 id="menu_benner_title1">合作流程  Cooperation Process</h1>
        <div id="menu_benner_boder"></div>
        <h2 id="menu_benner_title2">要如何加入橙色國際的團隊?</h2>
      </div>*/
    $('#benner_content').html(inner_string_html);},function(){  menu_area_list_hover()  ;})
  //li:eq(05)
  $('#menu_area li:eq(5)').hover(function(){
    var inner_string_html = '<div id="cooperation_process"><h1 id="menu_benner_title1">產品介紹  Product Description</h1><div id="menu_benner_boder"></div><h2 id="menu_benner_title2">橙色國際擁有什麼樣的產品?</h2></div>';
    /*<div id="about_the_company">
        <h1 id="menu_benner_title1">產品介紹  Product Description</h1>
        <div id="menu_benner_boder"></div>
        <h2 id="menu_benner_title2">橙色國際擁有什麼樣的產品?</h2>
      </div>*/
    $('#benner_content').html(inner_string_html);},function(){  menu_area_list_hover()  ;})
  //li:eq(07)
  $('#menu_area li:eq(7)').hover(function(){
    var inner_string_html = '<div id="cooperation_process"><h1 id="menu_benner_title1">問題回答  Question Answer</h1><div id="menu_benner_boder"></div><h2 id="menu_benner_title2">你還有什麼樣的問題呢?</h2></div>';
    /*<div id="about_the_company">
        <h1 id="menu_benner_title1">問題回答  Question Answer</h1>
        <div id="menu_benner_boder"></div>
        <h2 id="menu_benner_title2">你還有什麼樣的問題呢?</h2>
      </div>*/
    $('#benner_content').html(inner_string_html);},function(){  menu_area_list_hover()  ;})
  //li:eq(11)
  $('#menu_area li:eq(11)').hover(function(){
    var inner_string_html = '<div id="connection"><h1 id="menu_benner_title1">門市據點 Store Location</h1><div id="menu_benner_boder"></div><h2 id="menu_benner_title2">在哪裡找到營運的地方?</h2></div>';
    /*<div id="about_the_company">
        <h1 id="menu_benner_title1">門市據點 Store Location</h1>
        <div id="menu_benner_boder"></div>
        <h2 id="menu_benner_title2">在哪裡找到營運的地方?</h2>
      </div>*/
    $('#benner_content').html(inner_string_html);},function(){  menu_area_list_hover()  ;})  
  //li:eq(12)
  $('#menu_area li:eq(12)').hover(function(){
    var inner_string_html = '<div id="connection"><h1 id="menu_benner_title1">聯繫我們  Customer Service</h1><div id="menu_benner_boder"></div><h2 id="menu_benner_title2">要怎麼聯絡與追蹤橙色國際?</h2></div>';
    /*<div id="about_the_company">
        <h1 id="menu_benner_title1">聯繫我們  Customer Service</h1>
        <div id="menu_benner_boder"></div>
        <h2 id="menu_benner_title2">要怎麼聯絡與追蹤橙色國際?</h2>
      </div>*/
    $('#benner_content').html(inner_string_html);},function(){  menu_area_list_hover()  ;})


})    


