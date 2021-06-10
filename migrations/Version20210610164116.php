<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210610164116 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE ingredient ADD recepie_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE ingredient ADD CONSTRAINT FK_6BAF78708AD03ECC FOREIGN KEY (recepie_id) REFERENCES recepie (id)');
        $this->addSql('CREATE INDEX IDX_6BAF78708AD03ECC ON ingredient (recepie_id)');
        $this->addSql('ALTER TABLE recepie DROP FOREIGN KEY FK_B1DEA7501EBBD054');
        $this->addSql('ALTER TABLE recepie DROP FOREIGN KEY FK_B1DEA7503EC4DCE');
        $this->addSql('DROP INDEX IDX_B1DEA7501EBBD054 ON recepie');
        $this->addSql('DROP INDEX IDX_B1DEA7503EC4DCE ON recepie');
        $this->addSql('ALTER TABLE recepie DROP steps_id, DROP ingredients_id');
        $this->addSql('ALTER TABLE step ADD recepie_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE step ADD CONSTRAINT FK_43B9FE3C8AD03ECC FOREIGN KEY (recepie_id) REFERENCES recepie (id)');
        $this->addSql('CREATE INDEX IDX_43B9FE3C8AD03ECC ON step (recepie_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE ingredient DROP FOREIGN KEY FK_6BAF78708AD03ECC');
        $this->addSql('DROP INDEX IDX_6BAF78708AD03ECC ON ingredient');
        $this->addSql('ALTER TABLE ingredient DROP recepie_id');
        $this->addSql('ALTER TABLE recepie ADD steps_id INT NOT NULL, ADD ingredients_id INT NOT NULL');
        $this->addSql('ALTER TABLE recepie ADD CONSTRAINT FK_B1DEA7501EBBD054 FOREIGN KEY (steps_id) REFERENCES step (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE recepie ADD CONSTRAINT FK_B1DEA7503EC4DCE FOREIGN KEY (ingredients_id) REFERENCES ingredient (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_B1DEA7501EBBD054 ON recepie (steps_id)');
        $this->addSql('CREATE INDEX IDX_B1DEA7503EC4DCE ON recepie (ingredients_id)');
        $this->addSql('ALTER TABLE step DROP FOREIGN KEY FK_43B9FE3C8AD03ECC');
        $this->addSql('DROP INDEX IDX_43B9FE3C8AD03ECC ON step');
        $this->addSql('ALTER TABLE step DROP recepie_id');
    }
}
