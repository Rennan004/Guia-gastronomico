-- -----------------------------------------------------
-- Table `LOCAL`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LOCAL` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NOME` VARCHAR(90) NOT NULL,
  `DESCRICAO` VARCHAR(45) NOT NULL,
  `TELEFONE` VARCHAR(45) NOT NULL,
  `CEP` VARCHAR(45) NOT NULL,
  `BAIRRO` VARCHAR(45) NOT NULL,
  `RUA` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TIPO_LOCAL`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TIPO_LOCAL` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `DESCRICAO` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AVALIACAO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AVALIACAO` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `COMENTARIO` VARCHAR(45) NULL,
  `STAR` INT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `USUARIO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `USUARIO` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NOME` VARCHAR(100) NOT NULL,
  `EMAIL` VARCHAR(45) NOT NULL,
  `TELEFONE` INT NOT NULL,
  `SEMHA` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TIPO_USUARIO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TIPO_USUARIO` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `DESCRICAO_TIPO_USUARIO` VARCHAR(45) NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FOTO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FOTO` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `DESCRICAO` VARCHAR(45) NULL,
  `URL` VARCHAR(255) NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;