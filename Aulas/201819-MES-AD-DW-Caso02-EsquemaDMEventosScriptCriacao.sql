-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Dim-Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Dim-Cliente` (
  `Cliente` INT NOT NULL,
  `Designacao` VARCHAR(75) NOT NULL,
  `Atividade` VARCHAR(75) NOT NULL,
  PRIMARY KEY (`Cliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Dim-Calendario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Dim-Calendario` (
  `Data` DATE NOT NULL,
  `Semana` CHAR(7) NOT NULL,
  `DiaSemana` VARCHAR(25) NOT NULL,
  `Mes` CHAR(25) NOT NULL,
  `Trimestre` CHAR(6) NOT NULL,
  `Ano` INT NOT NULL,
  PRIMARY KEY (`Data`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Dim-Equipa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Dim-Equipa` (
  `Equipa` INT NOT NULL,
  PRIMARY KEY (`Equipa`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`TF-Pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`TF-Pedidos` (
  `DataPedido` DATE NOT NULL,
  `DataInicio` DATE NOT NULL,
  `DataFim` DATE NOT NULL,
  `Cliente` INT NOT NULL,
  `Equipa` INT NOT NULL,
  PRIMARY KEY (`DataFim`, `DataPedido`, `DataInicio`, `Cliente`, `Equipa`),
  INDEX `fk_TF-Pedidos_Dim-Cliente_idx` (`Cliente` ASC) VISIBLE,
  INDEX `fk_TF-Pedidos_Dim-Calendario1_idx` (`DataPedido` ASC) VISIBLE,
  INDEX `fk_TF-Pedidos_Dim-Calendario2_idx` (`DataInicio` ASC) VISIBLE,
  INDEX `fk_TF-Pedidos_Dim-Equipa1_idx` (`Equipa` ASC) VISIBLE,
  CONSTRAINT `fk_TF-Pedidos_Dim-Cliente`
    FOREIGN KEY (`Cliente`)
    REFERENCES `mydb`.`Dim-Cliente` (`Cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TF-Pedidos_Dim-Calendario1`
    FOREIGN KEY (`DataPedido`)
    REFERENCES `mydb`.`Dim-Calendario` (`Data`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TF-Pedidos_Dim-Calendario2`
    FOREIGN KEY (`DataInicio`)
    REFERENCES `mydb`.`Dim-Calendario` (`Data`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TF-Pedidos_Dim-Calendario3`
    FOREIGN KEY (`DataFim`)
    REFERENCES `mydb`.`Dim-Calendario` (`Data`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TF-Pedidos_Dim-Equipa1`
    FOREIGN KEY (`Equipa`)
    REFERENCES `mydb`.`Dim-Equipa` (`Equipa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Dim-Tecnico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Dim-Tecnico` (
  `Tecnico` INT NOT NULL,
  `Designacao` VARCHAR(75) NOT NULL,
  `Categoria` VARCHAR(75) NOT NULL,
  PRIMARY KEY (`Tecnico`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Brd-EquipaTecnico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Brd-EquipaTecnico` (
  `Equipa` INT NOT NULL,
  `Tecnico` INT NOT NULL,
  PRIMARY KEY (`Equipa`, `Tecnico`),
  INDEX `fk_Brd-EquipaTecnico_Dim-Tecnico1_idx` (`Tecnico` ASC) VISIBLE,
  CONSTRAINT `fk_Brd-EquipaTecnico_Dim-Equipa1`
    FOREIGN KEY (`Equipa`)
    REFERENCES `mydb`.`Dim-Equipa` (`Equipa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Brd-EquipaTecnico_Dim-Tecnico1`
    FOREIGN KEY (`Tecnico`)
    REFERENCES `mydb`.`Dim-Tecnico` (`Tecnico`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
