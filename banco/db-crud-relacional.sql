-- MySQL Script generated by MySQL Workbench
-- Sat Mar 16 21:55:22 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema crud_relacional
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema crud_relacional
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `crud_relacional` DEFAULT CHARACTER SET utf8 ;
USE `crud_relacional` ;

-- -----------------------------------------------------
-- Table `crud_relacional`.`pessoa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crud_relacional`.`pessoa` (
  `id_pessoa` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_pessoa`),
  UNIQUE INDEX `id_pessoa_UNIQUE` (`id_pessoa` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `crud_relacional`.`endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crud_relacional`.`endereco` (
  `id_endereco` INT NOT NULL AUTO_INCREMENT,
  `rua` VARCHAR(45) NOT NULL,
  `bairro` VARCHAR(45) NOT NULL,
  `pessoa_id_pessoa` INT NOT NULL,
  PRIMARY KEY (`id_endereco`, `pessoa_id_pessoa`),
  INDEX `fk_endereco_pessoa_idx` (`pessoa_id_pessoa` ASC) VISIBLE,
  CONSTRAINT `fk_endereco_pessoa`
    FOREIGN KEY (`pessoa_id_pessoa`)
    REFERENCES `crud_relacional`.`pessoa` (`id_pessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;