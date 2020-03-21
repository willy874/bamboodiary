<?php
//連線資料庫系統,指定要使用的資料庫===============================================
$hostname_conn = "localhost";//主機名稱
$database_conn = "bamboodi_db"; //資料庫名稱
$username_conn = "bamboodi_user";//進入資料庫主機的管理者名稱
/* "root" */
/*伺服 "bamboodi_user" */
$password_conn = "cpy775tw7174249";//進入資料庫主機的管理者密碼
/* "12345678" */
/*伺服 "cpy775tw7174249" */

$conn = mysqli_connect($hostname_conn, $username_conn, $password_conn, $database_conn);
if (!$conn) {
  printf("連線資料庫失敗: %s\n", mysqli_connect_error());
  exit();
}
mysqli_set_charset($conn,"utf8"); 
?>