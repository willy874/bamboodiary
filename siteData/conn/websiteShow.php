<?php
$add_db_sheet = mysqli_query($conn, "SELECT * FROM website ORDER BY website_id ASC");
while( $row_website_db = mysqli_fetch_assoc($add_db_sheet) ){
  $website_content[ $row_website_db['website_id'] ] = $row_website_db['website_content'];
  $website_title[ $row_website_db['website_id'] ] = $row_website_db['website_titleName'];
  //$value [ $row_website_db[ website_db sheet ]]
}
//id1 = title ;website_title
$bd_website_title = $website_content[1];
//id2 = name  ;website_name
$bd_website_name = $website_content[2];
//id3 = description  ;website_description
$bd_website_description = $website_content[3];
//id4 = url = http://bamboodiary.com.tw/ ;website_url
$bd_website_url = $website_content[4];

function bd_website_title(){
  global $bd_website_title;
  echo $bd_website_title;
}
function bd_website_name(){
  global $bd_website_name;
  echo $bd_website_name;
}
function bd_website_description(){
  global $bd_website_description;
  echo $bd_website_description;
}
function bd_website_url(){
  global $bd_website_url;
  echo $bd_website_url;
}
//INSERT INTO website (website_id ,website_titleName, website_content) VALUES ('4', 'url' , 'http://bamboodiary.com.tw/')

//modify
if( isset($_POST['website_content']) && $_POST['website_content'] != ''){
  $website_content = $_POST['website_content'];//$value = $_POST[name]
  $website_id = $_POST['website_id'];
  $order_db_update = "UPDATE website SET website_content='$website_content' WHERE website_id = $website_id";//SQL order
  $result = mysqli_query($conn, $order_db_update);//db_sheet
  header('Location:admin.php');//result
}


?>