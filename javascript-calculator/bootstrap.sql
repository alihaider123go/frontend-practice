-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2021 at 10:40 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `form123`
--

-- --------------------------------------------------------

--
-- Table structure for table `bootstrap`
--

CREATE TABLE `bootstrap` (
  `id` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Department` varchar(30) NOT NULL,
  `Message` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bootstrap`
--

INSERT INTO `bootstrap` (`id`, `Name`, `Email`, `Department`, `Message`) VALUES
(1, 'Hafiz Aamir Iqbbal', 'hafizaamir786@gmail.com', 'Manufacturing', '12345'),
(2, 'Amjad Iqbal', 'amjad@gmail.com', 'Manufacturing', 'hello'),
(3, 'irfan iqbal', 'irfaniqbal@gmail.com', 'Adminitration', 'hello new id');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bootstrap`
--
ALTER TABLE `bootstrap`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bootstrap`
--
ALTER TABLE `bootstrap`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
