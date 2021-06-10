<?php

namespace App\DataFixtures;

use App\Entity\Answer;
use App\Entity\Question;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class QuestionFixtures extends Fixture
{
  public function __construct()
  {
    $this->questions = [
      [
        "text" => "A quoi fait référence l’acronyme/nom du groupe VSO ?",
        "answers" => [
          "Vraiment Super Original",
          "Vachement Sexy Oulalalah",
          "Voler Sur Orbite",
          "Un vaisseau enfin"
        ],
        "trueAnswer" => "Un vaisseau enfin"
      ],
      [
        "text" => "Si vous voulez vous déguiser en membre de French Fuse il vous faut ?",
        "answers" => [
          "Des lunettes de soleil et un bonnet",
          "Un tambour et une fleur dans les cheveux",
          "De l’amour et de l’eau fraîche",
          "Une barbe et un tatouage dans le cou"
        ],
        "trueAnswer" => "Des lunettes de soleil et un bonnet"
      ],
      [
        "text" => "Mozambo est une contraction de ?",
        "answers" => [
          "Moby Dick et Rambo",
          "Mozambique et mambo",
          "Mozart et Rimbaud",
          "Maurice et Carambo"
        ],
        "trueAnswer" => "Mozart et Rimbaud"
      ],
      [
        "text" => "Quelle est la recette idéale pour un festival ?",
        "answers" => [
          "Rillettes de Chorizo et Blinis",
          "Fish and Chips au Tzatziki",
          "Nachos au Guacamole",
          "Les 3 bien sûr !"
        ],
        "trueAnswer" => "Les 3 bien sûr !"
      ]
    ];
  }

  public function load(ObjectManager $manager)
  {
    foreach ($this->questions as $question) {
      $newQuestion = new Question();
      $newQuestion->setText($question['text']);
      $manager->persist($newQuestion);
      foreach($question['answers'] as $answer) {
        $newAnswer = new Answer();
        $newAnswer->setText($answer);
        $newAnswer->setQuestion($newQuestion);
        $manager->persist($newAnswer);
        $newQuestion->addAnswer($newAnswer);

        if($answer == $question["trueAnswer"]) {
          $newQuestion->setTrueAnswer($newAnswer);
        }
      }
      
      $manager->persist($newQuestion);
    }


      $manager->flush();
  }
}
