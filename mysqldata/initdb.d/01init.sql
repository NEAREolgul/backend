-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema NEAREolgul
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema NEAREolgul
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `NEAREolgul` DEFAULT CHARACTER SET utf8 ;
USE `NEAREolgul` ;

-- -----------------------------------------------------
-- Table `NEAREolgul`.`t_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NEAREolgul`.`t_user` (
  `user_id` VARCHAR(255) NOT NULL,
  `user_nm` VARCHAR(255) NOT NULL,
  `user_pw` VARCHAR(255) NOT NULL,
  `near_addr` VARCHAR(255) NULL,
  `is_artist` TINYINT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `modified_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `near_wallet_UNIQUE` (`near_addr` ASC) VISIBLE)
ENGINE = InnoDB
COMMENT = '니어얼굴 회원 엔티티\n';


-- -----------------------------------------------------
-- Table `NEAREolgul`.`t_content`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NEAREolgul`.`t_content` (
  `content_id` CHAR(36) NOT NULL,
  `user_id` VARCHAR(255) NOT NULL,
  `content_title` VARCHAR(255) NOT NULL,
  `content_desc` TEXT NULL,
  `content_price` INT NULL,
  `is_sell` TINYINT NOT NULL DEFAULT 0,
  `content_paint` TEXT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `modified_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`content_id`),
  INDEX `fk_t_content_t_user_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_content_t_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `NEAREolgul`.`t_user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NEAREolgul`.`t_auction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NEAREolgul`.`t_auction` (
  `auction_id` CHAR(36) NOT NULL,
  `content_id` CHAR(36) NOT NULL,
  `auction_title` VARCHAR(255) NOT NULL,
  `auction_desc` TEXT NULL,
  `auction_start` DATETIME NOT NULL,
  `auction_deadline` DATETIME NOT NULL,
  `min_price` VARCHAR(45) NOT NULL,
  `purchase_price` VARCHAR(45) NOT NULL,
  `contract_address` VARCHAR(255) NULL,
  PRIMARY KEY (`auction_id`),
  INDEX `fk_t_auction_t_content1_idx` (`content_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_auction_t_content1`
    FOREIGN KEY (`content_id`)
    REFERENCES `NEAREolgul`.`t_content` (`content_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NEAREolgul`.`t_bid`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NEAREolgul`.`t_bid` (
  `user_id` VARCHAR(255) NOT NULL,
  `auction_id` CHAR(36) NOT NULL,
  `bid_price` VARCHAR(45) NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `modified_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `is_sold` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`user_id`, `auction_id`),
  INDEX `fk_t_user_has_t_auction_t_auction1_idx` (`auction_id` ASC) VISIBLE,
  INDEX `fk_t_user_has_t_auction_t_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_user_has_t_auction_t_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `NEAREolgul`.`t_user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_t_user_has_t_auction_t_auction1`
    FOREIGN KEY (`auction_id`)
    REFERENCES `NEAREolgul`.`t_auction` (`auction_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NEAREolgul`.`t_proposal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NEAREolgul`.`t_proposal` (
  `user_id` VARCHAR(255) NOT NULL,
  `content_id` CHAR(36) NOT NULL,
  `proposal_msg` TEXT NULL,
  `proposal_price` VARCHAR(45) NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `modified_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `is_accept` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`user_id`, `content_id`),
  INDEX `fk_t_user_has_t_content_t_content1_idx` (`content_id` ASC) VISIBLE,
  INDEX `fk_t_user_has_t_content_t_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_user_has_t_content_t_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `NEAREolgul`.`t_user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_t_user_has_t_content_t_content1`
    FOREIGN KEY (`content_id`)
    REFERENCES `NEAREolgul`.`t_content` (`content_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
