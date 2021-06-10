<?php

namespace App\DataProvider;

use ApiPlatform\Core\DataProvider\ContextAwareCollectionDataProviderInterface;
use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;
use App\Entity\Recepie;
use Doctrine\ORM\EntityManagerInterface;
use stdClass;

final class getRecepies implements ContextAwareCollectionDataProviderInterface, RestrictedDataProviderInterface
{
  private $em;

  public function __construct(EntityManagerInterface $em)
  {
    $this->em = $em;
  }

  public function supports(string $resourceClass, ?string $operationName = null, array $context = []): bool
  {
    return Recepie::class == $resourceClass;
  }

  public function getCollection(string $resourceClass, ?string $operationName = null, array $context = [])
  {
    $recepies = $this->em->getRepository(Recepie::class)->findAll();
    $formattedResult = [];

    foreach ($recepies as $recepie) {
      $myrecepie = new stdClass();
      $myrecepie->id = $recepie->getId();
      $myrecepie->name = $recepie->getName();
      $myrecepie->persons = $recepie->getPersons();
      $myrecepie->timePrepa = $recepie->getTimePrepa();
      $myrecepie->timeCooking = $recepie->getTimeCooking();

      $steps = [];
      foreach($recepie->getSteps() as $step) {
        $mystep = new stdClass();
        $mystep->number = $step->getNumber();
        $mystep->text = $step->getText();
        array_push($steps, $mystep);
      }
      $myrecepie->steps = $steps;

      $ingredients = [];
      foreach($recepie->getIngredients() as $ingredient) {
        array_push($ingredients, $ingredient->getName());
      }
      $myrecepie->ingredients = $ingredients;

      array_push($formattedResult, $myrecepie);
    }

    return $formattedResult;
  }

}