-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema dw_onroad
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `dw_onroad` ;

-- -----------------------------------------------------
-- Schema dw_onroad
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dw_onroad` DEFAULT CHARACTER SET utf8 ;
USE `dw_onroad` ;

-- -----------------------------------------------------
-- Table `dw_onroad`.`Dim-Veiculo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dw_onroad`.`Dim-Veiculo` (
  `IdVeiculo` INT NOT NULL,
  `Matricula` VARCHAR(45) NOT NULL,
  `NrKms` DECIMAL(9) NOT NULL,
  `Modelo` VARCHAR(20) NOT NULL,
  `Marca` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`IdVeiculo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dw_onroad`.`Dim-Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dw_onroad`.`Dim-Cliente` (
  `IdCliente` INT NOT NULL,
  `Nome` VARCHAR(45) NOT NULL,
  `Telemovel` INT(9) NOT NULL,
  `DataNascimento` DATE NOT NULL,
  `Cidade` VARCHAR(45) NOT NULL,
  `Pais` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`IdCliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dw_onroad`.`Dim-Calendario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dw_onroad`.`Dim-Calendario` (
  `Data` DATE NOT NULL,
  `Mes` VARCHAR(25) NOT NULL,
  `Trimestre` VARCHAR(25) NOT NULL,
  `Ano` INT NOT NULL,
  PRIMARY KEY (`Data`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dw_onroad`.`TF-Aluguer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dw_onroad`.`TF-Aluguer` (
  `idAluguer` INT NOT NULL AUTO_INCREMENT,
  `DataAluguer` DATE NOT NULL,
  `Cliente` INT NOT NULL,
  `Veiculo` INT NOT NULL,
  `PrecoAluguer` DECIMAL(8,2) NOT NULL,
  PRIMARY KEY (`idAluguer`, `DataAluguer`, `Cliente`, `Veiculo`),
  INDEX `fk_TF-Aluguer_Dim-Veiculo_idx` (`Veiculo` ASC),
  INDEX `fk_TF-Aluguer_Dim-Cliente1_idx` (`Cliente` ASC),
  CONSTRAINT `fk_TF-Aluguer_Dim-Veiculo`
    FOREIGN KEY (`Veiculo`)
    REFERENCES `dw_onroad`.`Dim-Veiculo` (`IdVeiculo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TF-Aluguer_Dim-Cliente1`
    FOREIGN KEY (`Cliente`)
    REFERENCES `dw_onroad`.`Dim-Cliente` (`IdCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TF-Aluguer_Dim-Calendario1`
    FOREIGN KEY (`DataAluguer`)
    REFERENCES `dw_onroad`.`Dim-Calendario` (`Data`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
