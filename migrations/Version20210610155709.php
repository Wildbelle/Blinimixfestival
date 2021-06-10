<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210610155709 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE answer (id INT AUTO_INCREMENT NOT NULL, text LONGTEXT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ingredient (id INT AUTO_INCREMENT NOT NULL, name LONGTEXT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE question (id INT AUTO_INCREMENT NOT NULL, answers_id INT NOT NULL, true_answer_id INT NOT NULL, text LONGTEXT NOT NULL, INDEX IDX_B6F7494E79BF1BCE (answers_id), UNIQUE INDEX UNIQ_B6F7494E619FC1A4 (true_answer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE recepie (id INT AUTO_INCREMENT NOT NULL, steps_id INT NOT NULL, ingredients_id INT NOT NULL, name VARCHAR(255) NOT NULL, persons INT NOT NULL, time_prepa INT NOT NULL, time_cooking INT NOT NULL, INDEX IDX_B1DEA7501EBBD054 (steps_id), INDEX IDX_B1DEA7503EC4DCE (ingredients_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE step (id INT AUTO_INCREMENT NOT NULL, number INT NOT NULL, text LONGTEXT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE question ADD CONSTRAINT FK_B6F7494E79BF1BCE FOREIGN KEY (answers_id) REFERENCES answer (id)');
        $this->addSql('ALTER TABLE question ADD CONSTRAINT FK_B6F7494E619FC1A4 FOREIGN KEY (true_answer_id) REFERENCES answer (id)');
        $this->addSql('ALTER TABLE recepie ADD CONSTRAINT FK_B1DEA7501EBBD054 FOREIGN KEY (steps_id) REFERENCES step (id)');
        $this->addSql('ALTER TABLE recepie ADD CONSTRAINT FK_B1DEA7503EC4DCE FOREIGN KEY (ingredients_id) REFERENCES ingredient (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE question DROP FOREIGN KEY FK_B6F7494E79BF1BCE');
        $this->addSql('ALTER TABLE question DROP FOREIGN KEY FK_B6F7494E619FC1A4');
        $this->addSql('ALTER TABLE recepie DROP FOREIGN KEY FK_B1DEA7503EC4DCE');
        $this->addSql('ALTER TABLE recepie DROP FOREIGN KEY FK_B1DEA7501EBBD054');
        $this->addSql('DROP TABLE answer');
        $this->addSql('DROP TABLE ingredient');
        $this->addSql('DROP TABLE question');
        $this->addSql('DROP TABLE recepie');
        $this->addSql('DROP TABLE step');
    }
}
