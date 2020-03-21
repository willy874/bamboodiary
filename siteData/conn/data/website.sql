-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- 主機: localhost
-- 產生時間： 2019-07-07 17:19:43
-- 伺服器版本: 5.7.17-log
-- PHP 版本： 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `bamboodi_db`
--

-- --------------------------------------------------------

--
-- 資料表結構 `website`
--

CREATE TABLE `website` (
  `website_id` int(11) NOT NULL,
  `website_titleName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `website_content` text COLLATE utf8_unicode_ci NOT NULL,
  `website_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 資料表的匯出資料 `website`
--

INSERT INTO `website` (`website_id`, `website_titleName`, `website_content`, `website_time`) VALUES
(1, 'title', '竹子日誌Bamboodiary', '2019-07-05 16:58:35'),
(2, 'name', '竹子日誌Bamboodiary 工作就是生活,為了夢想前進', '2019-07-05 17:01:44'),
(3, 'description', '生活、美食、旅遊、創業、水電、程式，多采多姿的生活，讓竹子帶你一起體驗!', '2019-07-05 17:07:20'),
(4, 'url', 'http://bamboodiary.com.tw/', '2019-07-05 17:28:05');

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `website`
--
ALTER TABLE `website`
  ADD PRIMARY KEY (`website_id`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `website`
--
ALTER TABLE `website`
  MODIFY `website_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
