-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Fornecedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Fornecedor` (
  `idFornecedor` INT NOT NULL,
  `nomeFornece` VARCHAR(20) NOT NULL,
  `enderecoFornecedor` VARCHAR(45) NOT NULL,
  `cnpjFornecedor` BIGINT(14) NOT NULL,
  PRIMARY KEY (`idFornecedor`),
  UNIQUE INDEX `idProduto_UNIQUE` (`idFornecedor` ASC),
  UNIQUE INDEX `nomeFornece_UNIQUE` (`nomeFornece` ASC),
  UNIQUE INDEX `cnpjFornecedor_UNIQUE` (`cnpjFornecedor` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Produto` (
  `idProduto` INT NOT NULL,
  `nomeMedicamen` VARCHAR(45) NOT NULL,
  `codigoBarras` BIGINT(13) NOT NULL,
  `prinAtivo` VARCHAR(45) NOT NULL,
  `classeTerapeu` VARCHAR(45) NOT NULL,
  `tipoMedicamen` VARCHAR(10) NOT NULL,
  `registroMs` BIGINT(9) NOT NULL,
  `Fornecedor_idFornecedor` INT NOT NULL,
  PRIMARY KEY (`idProduto`),
  UNIQUE INDEX `idProduto_UNIQUE` (`idProduto` ASC),
  UNIQUE INDEX `nomeMedicamen_UNIQUE` (`nomeMedicamen` ASC),
  UNIQUE INDEX `CodigoBarras_UNIQUE` (`codigoBarras` ASC),
  UNIQUE INDEX `PrinAtivo_UNIQUE` (`prinAtivo` ASC),
  UNIQUE INDEX `classeTerapeu_UNIQUE` (`classeTerapeu` ASC),
  UNIQUE INDEX `tipoMedicamen_UNIQUE` (`tipoMedicamen` ASC),
  UNIQUE INDEX `registroMs_UNIQUE` (`registroMs` ASC),
  INDEX `fk_Produto_Fornecedor_idx` (`Fornecedor_idFornecedor` ASC),
  CONSTRAINT `fk_Produto_Fornecedor`
    FOREIGN KEY (`Fornecedor_idFornecedor`)
    REFERENCES `mydb`.`Fornecedor` (`idFornecedor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
