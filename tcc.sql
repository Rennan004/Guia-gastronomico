-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07-Dez-2022 às 12:33
-- Versão do servidor: 10.4.20-MariaDB
-- versão do PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `tcc`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacao`
--

CREATE TABLE `avaliacao` (
  `USUARIO_ID` int(11) NOT NULL,
  `USUARIO_TIPOUSUARIO_ID` int(11) NOT NULL,
  `RESTAURANTE_ID` int(11) NOT NULL,
  `ID` varchar(45) NOT NULL,
  `ESTRELAS` int(11) DEFAULT NULL,
  `COMENTARIO` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE `categoria` (
  `ID` int(11) NOT NULL,
  `CATEGORIA` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`ID`, `CATEGORIA`) VALUES
(1, 'Pizzaria'),
(2, 'Japones'),
(3, 'Mexicano'),
(4, 'Padaria'),
(5, 'Hamburgueria');

-- --------------------------------------------------------

--
-- Estrutura da tabela `foto`
--

CREATE TABLE `foto` (
  `ID` int(11) NOT NULL,
  `URL` varchar(100) DEFAULT NULL,
  `RESTAURANTE_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `restaurante`
--

CREATE TABLE `restaurante` (
  `ID` int(11) NOT NULL,
  `NOME` varchar(100) NOT NULL,
  `DESCRICAO` varchar(255) DEFAULT NULL,
  `CEP` varchar(9) NOT NULL,
  `LOGRADOURO` varchar(90) NOT NULL,
  `CIDADE` varchar(100) NOT NULL,
  `UF` varchar(2) NOT NULL,
  `BAIRRO` varchar(50) NOT NULL,
  `NUMERO` int(11) NOT NULL,
  `HORARIO` varchar(45) NOT NULL,
  `TELEFONE1` varchar(24) NOT NULL,
  `TELEFONE2` varchar(24) NOT NULL,
  `FACEBOOK` varchar(100) NOT NULL,
  `INSTAGRAM` varchar(100) NOT NULL,
  `IFOOD` varchar(100) NOT NULL,
  `FOTO` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `restaurante_has_categoria`
--

CREATE TABLE `restaurante_has_categoria` (
  `RESTAURANTE_ID` int(11) NOT NULL,
  `CATEGORIA_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipousuario`
--

CREATE TABLE `tipousuario` (
  `ID` int(11) NOT NULL,
  `NOME` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tipousuario`
--

INSERT INTO `tipousuario` (`ID`, `NOME`) VALUES
(1, 'Administrador'),
(2, 'Propietario'),
(3, 'Gerente'),
(4, 'Usuario');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `ID` int(11) NOT NULL,
  `NOME` varchar(100) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `SENHA` varchar(45) NOT NULL,
  `TIPOUSUARIO_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`ID`, `NOME`, `EMAIL`, `SENHA`, `TIPOUSUARIO_ID`) VALUES
(1, 'Rennan', 'rennan.guilherme63@gmail.com', '202cb962ac59075b964b07152d234b70', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `avaliacao`
--
ALTER TABLE `avaliacao`
  ADD PRIMARY KEY (`USUARIO_ID`,`USUARIO_TIPOUSUARIO_ID`,`RESTAURANTE_ID`,`ID`),
  ADD KEY `fk_USUARIO_has_RESTAURANTE_RESTAURANTE1_idx` (`RESTAURANTE_ID`),
  ADD KEY `fk_USUARIO_has_RESTAURANTE_USUARIO1_idx` (`USUARIO_ID`,`USUARIO_TIPOUSUARIO_ID`);

--
-- Índices para tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`ID`);

--
-- Índices para tabela `foto`
--
ALTER TABLE `foto`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_FOTO_RESTAURANTE1_idx` (`RESTAURANTE_ID`);

--
-- Índices para tabela `restaurante`
--
ALTER TABLE `restaurante`
  ADD PRIMARY KEY (`ID`);

--
-- Índices para tabela `restaurante_has_categoria`
--
ALTER TABLE `restaurante_has_categoria`
  ADD PRIMARY KEY (`RESTAURANTE_ID`,`CATEGORIA_ID`),
  ADD KEY `fk_RESTAURANTE_has_CATEGORIA_CATEGORIA1_idx` (`CATEGORIA_ID`),
  ADD KEY `fk_RESTAURANTE_has_CATEGORIA_RESTAURANTE1_idx` (`RESTAURANTE_ID`);

--
-- Índices para tabela `tipousuario`
--
ALTER TABLE `tipousuario`
  ADD PRIMARY KEY (`ID`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID`,`TIPOUSUARIO_ID`),
  ADD UNIQUE KEY `EMAIL_UNIQUE` (`EMAIL`),
  ADD KEY `fk_USUARIO_TIPOUSUARIO1_idx` (`TIPOUSUARIO_ID`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categoria`
--
ALTER TABLE `categoria`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `restaurante`
--
ALTER TABLE `restaurante`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `tipousuario`
--
ALTER TABLE `tipousuario`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `avaliacao`
--
ALTER TABLE `avaliacao`
  ADD CONSTRAINT `fk_USUARIO_has_RESTAURANTE_RESTAURANTE1` FOREIGN KEY (`RESTAURANTE_ID`) REFERENCES `restaurante` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_USUARIO_has_RESTAURANTE_USUARIO1` FOREIGN KEY (`USUARIO_ID`,`USUARIO_TIPOUSUARIO_ID`) REFERENCES `usuario` (`ID`, `TIPOUSUARIO_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `foto`
--
ALTER TABLE `foto`
  ADD CONSTRAINT `fk_FOTO_RESTAURANTE1` FOREIGN KEY (`RESTAURANTE_ID`) REFERENCES `restaurante` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `restaurante_has_categoria`
--
ALTER TABLE `restaurante_has_categoria`
  ADD CONSTRAINT `fk_RESTAURANTE_has_CATEGORIA_CATEGORIA1` FOREIGN KEY (`CATEGORIA_ID`) REFERENCES `categoria` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_RESTAURANTE_has_CATEGORIA_RESTAURANTE1` FOREIGN KEY (`RESTAURANTE_ID`) REFERENCES `restaurante` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_USUARIO_TIPOUSUARIO1` FOREIGN KEY (`TIPOUSUARIO_ID`) REFERENCES `tipousuario` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
