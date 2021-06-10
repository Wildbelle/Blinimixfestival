<?php

namespace App\DataFixtures;

use App\Entity\Ingredient;
use App\Entity\Recepie;
use App\Entity\Step;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class RecepieFixtures extends Fixture
{
  public function __construct()
  {
    $this->recepies = [
      [
        "name" => "Nachos au guacamole, haricots, tomate & cheddar",
        "persons" => 2,
        "timePrepa" => 25,
        "timeCooking" => 15,
        "steps" => [
          [
            "number" => 1,
            "text" => "Rincez, coupez la tomate en petits dés. Emincez le piment jalapeno. Réchauffez les haricots rouges à la poêle. "
          ],
          [
            "number" => 2,
            "text" => "Placez les tortillas dans un plat à emporter, recouvrez de haricots, de dés de tomate et de maïs."
          ],
          [
            "number" => 3,
            "text" => "Préparez la sauce cheddar. Faites chauffer le lait et la crème dans une petite casserole. Ajoutez - y le cheddar râpé et laissez cuire à feu doux jusqu’à ce qu’il soit bien fondu. Versez le cheddar fondu sur les tortillas. "
          ],
          [
            "number" => 4,
            "text" => "Placez une boule de guacamole Blini au centre. Parsemez de coriandre hachée et de jalapeno. Poivrez au goût. Servez avec des quartiers de citron et de tabasco au goût."
          ]
        ],
        "ingredients" => [
          "1 pot de guacamole Blini",
          "100 g de chips tortillas",
          "50 g de haricots rouges cuits",
          "50 g de maïs",
          "1 tomate bien mûre",
          "1 piment jalapeno",
          "1 citron vert coupé en quartiers",
          "5 brins de coriandre frais",
          "Poivre et sel et tabasco au goût",
          '<span class="underline">Pour la Sauce Cheddar :</span>',
          "50 g de cheddar",
          "5 cl de lait",
          "3 cl de crème liquide"
        ]
      ],
      [
        "name" => "Sandwich pita d'aubergines, épinards, houmous & harissa",
        "persons" => 4,
        "timePrepa" => 15,
        "timeCooking" => 20,
        "steps" => [
          [
            "number" => 1,
            "text" => "Préchauffez le four à 180 °C."
          ],
          [
            "number" => 2,
            "text" => "Badigeonnez les tranches d'aubergine d'huile d'olive et étalez- les sur un plat allant au four tapissé de papier sulfurisé. Saupoudrez de graines de cumin, salez, poivrez au goût. Faites griller 15 à 20 min. ou jusqu'à ce qu'elles soient tendres."
          ],
          [
            "number" => 3,
            "text" => "Pendant ce temps, rincez bien le concombre et coupez- le en fins bâtonnets."
          ],
          [
            "number" => 4,
            "text" => "Rincez les épinards.  Faites chauffer 1 cuil. à soupe d'huile d'olive dans une grande poêle à feu moyen. Ajoutez l'ail et faites suer environ 1 min. Incorporez les épinards et faites-les faner.  Salez, poivrez au goût."
          ],
          [
            "number" => 5,
            "text" => "Au moment de servir, faites griller sur un gril électrique (ou à la poêle) les pains pita. Garnissez-les d'une généreuse couche de houmous, d’aubergines grillées, d’épinards, de concombre , de tomates marinées et de harissa au goût. Servez chaud."
          ],
        ],
        "ingredients" => [
          "1 pot de houmous Blini",
          "100 g de tomates marinées",
          "4 pains pita",
          "1 mini concombre",
          "Harissa au goût",
          '<span class="underline">Pour l\'aubergine :</span>',
          "1 aubergine tranchée finement sur la largeur",
          "3 cuil. à soupe d'huile d'olive",
          "Sel et poivre noir au goût",
          "1/2 cuil. à café de graines de cumin",
          '<span class="underline">Pour les épinards :</span>',
          "1 cuil. à soupe d'huile d'olive",
          "2 gousses d'ail émincées",
          "3 poignées de pousses d’épinards",
          "Sel et poivre noir au goût",
        ]
      ],
      [
        "name" => "Sandwich de tarama, saumon fumé, avocat",
        "persons" => 4,
        "timePrepa" => 10,
        "timeCooking" => 0,
        "steps" => [
          [
            "number" => 1,
            "text" => "Faites griller sur un gril électrique (ou à la poêle) les tranches de pain."
          ],
          [
            "number" => 2,
            "text" => "Étalez une généreuse couche de tarama sur les tranches de pain."
          ],
          [
            "number" => 3,
            "text" => "Découpez les avocats en fines tranches et arrosez -les de jus de citron. Puis placez-les à part égale sur les tranches de pain."
          ],
          [
            "number" => 4,
            "text" => "Posez deux tranches de saumon fumé pliées en deux sur 4 tranches de pain, poivrez légèrement, puis placez les radis coupés en fines rondelles et les feuilles de salade. Fermez avec les  tranches de pain restantes pour former 4 sandwichs et c'est prêt!"
          ],
        ],
        "ingredients" => [
          "8 grandes tranches de saumon fumé Delpierre",
          "2 poignées de feuilles de salade de saison",
          "8 tranches de pain complet aux graines",
          "1 pot de tarama Blini",
          "4 radis ",
          "2 avocats",
          "1 citron vert",
          "Poivre noir au goût",
        ]
      ],
      [
        "name" => "Spicy Fish & Chips avec du Tzatziki",
        "persons" => 4,
        "timePrepa" => 45,
        "timeCooking" => 8,
        "steps" => [
          [
            "number" => 1,
            "text" => "Placez les quartiers de pommes de terre dans un bol d'eau glacée pendant environ 30 min."
          ],
          [
            "number" => 2,
            "text" => "Dans une poêle profonde ou dans une friteuse à 185 ° C, chauffez l’huile."
          ],
          [
            "number" => 3,
            "text" => "Égouttez les pommes de terre et séchez-les bien avec un torchon. Faites une première cuisson des pommes de terre dans l'huile chaude pendant environ 3 min. Réservez sur du papier absorbant."
          ],
          [
            "number" => 4,
            "text" => "Augmentez la température de l'huile à 190° C. Pendant ce temps, préparez la pâte à frire, dans un grand bol, mélangez 125 g de farine, la fécule de maïs, la levure, la poudre d’oignon, le piment d’espelette, le sel et le poivre.  Fouettez bien jusqu'à ce que le mélange soit lisse et homogène.  Puis ajoutez l'œuf et la bière. Réservez."
          ],
          [
            "number" => 5,
            "text" => "Salez, poivrez au goût les morceaux de poisson. Étalez la farine restante sur un plat. Enrobez les morceaux de poisson un par un dans la farine, secouez pour retirer l’excédent de farine et puis, passez-les dans la pâte à frire en les enrobant bien. Égouttez et faites frire dans une poêle avec de l’huile d’olive pendant environ 4 min. en remuant de temps en temps pour éviter qu'ils ne collent au fond. Retirez le poisson et laissez égoutter sur une grille."
          ],
          [
            "number" => 6,
            "text" => "Faites une deuxième cuisson des pommes de terre dans l'huile chaude pendant 1 min. Réservez sur un papier absorbant."
          ],
          [
            "number" => 7,
            "text" => "Servez rapidement avec du tzatziki, du persil haché et des quartiers de citron vert."
          ],
        ],
        "ingredients" => [
          "1 pot de tzatziki Blini",
          "1 cuil. à café de piment d’espelette ou piment moulu",
          "650 g de filets de cabillaud Delpierre coupés en morceaux",
          "6 pommes de terre moyennes, coupées en 8 quartiers chacune ",
          "1/2 cuil. à café de poivre noir moulu",
          "1/2 cuil. à café de levure chimique",
          "1/2 cuil. à café de poudre d’oignon ",
          "125 g de farine tout usage + 75 g ",
          "2 cuil. à soupe de fécule de maïs",
          "Huile végétale pour la friture",
          "25 cl de bière blonde",
          "1/2 cuil. à café de sel",
          "1 oeuf légèrement battu",
          "4 brins de persil",
          "1 citron vert",
        ]
      ],
      [
        "name" => "Rillettes de chorizo, poivrons piquillos & citron vert servies avec des Blinis",
        "persons" => 6,
        "timePrepa" => 15,
        "timeCooking" => 0,
        "steps" => [
          [
            "number" => 1,
            "text" => "Retirez la peau du chorizo puis coupez-le en petits morceaux. Mixez- le avec le fromage frais, les poivrons piquillos, le jus et le zeste du citron."
          ],
          [
            "number" => 2,
            "text" => "Transférez ce mélange dans un bol et ajoutez le paprika, le piment d’ Espelette, le sel et le poivre au goût."
          ],
          [
            "number" => 3,
            "text" => "Rincez bien le concombre et coupez-le en fines tranches. Rincez et hachez la ciboulette."
          ],
          [
            "number" => 4,
            "text" => "Au moment de servir, faites chauffer les blinis selon les indications de l’emballage."
          ],
          [
            "number" => 5,
            "text" => "Servez les rillettes avec des Blinis et garnissez de concombre, de zestes de citron, et de la ciboulette."
          ],
        ],
        "ingredients" => [
          "2 barquettes de blinis Blini",
          "250 g de chorizo",
          "200 g de Philadelphia",
          "125 g de poivrons piquillos ",
          "Zeste et jus d’un citron vert (réservez un peu de zeste pour le dressage)",
          "1 pincée de paprika",
          "1 pincée de piment d’Espelette ",
          "1 mini concombre",
          "1 bouquet de ciboulette",
          "Sel et poivre au goût ",
        ]
      ]
    ];
  }

  public function load(ObjectManager $manager)
  {
    foreach ($this->recepies as $recepie) {
      $newRecepie = new Recepie();
      $newRecepie->setName($recepie['name']);
      $newRecepie->setPersons($recepie['persons']);
      $newRecepie->setTimePrepa($recepie['timePrepa']);
      $newRecepie->setTimeCooking($recepie['timeCooking']);
      $manager->persist($newRecepie);

      foreach ($recepie['steps'] as $step) {
        $newStep = new Step();
        $number = $step['number'];
        $text = $step['text'];
        $newStep->setNumber($number);
        $newStep->setText($text);
        $manager->persist($newStep);
        $newRecepie->addStep($newStep);
      }
      
      foreach ($recepie['ingredients'] as $ingredient) {
        $newIngredient = new Ingredient();
        $newIngredient->setName($ingredient);
        $manager->persist($newIngredient);
        $newRecepie->addIngredient($newIngredient);
      }

      $manager->persist($newRecepie);
    }


      $manager->flush();
  }
}
