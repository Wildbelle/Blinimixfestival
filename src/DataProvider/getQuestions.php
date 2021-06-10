<?php

namespace App\DataProvider;

use ApiPlatform\Core\DataProvider\ContextAwareCollectionDataProviderInterface;
use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;
use App\Entity\Question;
use Doctrine\ORM\EntityManagerInterface;
use stdClass;

final class getQuestions implements ContextAwareCollectionDataProviderInterface, RestrictedDataProviderInterface
{
  private $em;

  public function __construct(EntityManagerInterface $em)
  {
    $this->em = $em;
  }

  public function supports(string $resourceClass, ?string $operationName = null, array $context = []): bool
  {
    return Question::class == $resourceClass;
  }

  public function getCollection(string $resourceClass, ?string $operationName = null, array $context = [])
  {
    $questions = $this->em->getRepository(Question::class)->findAll();
    $formattedResult = [];

    foreach ($questions as $question) {
      $myquestion = new stdClass();
      $myquestion->text = $question->getText();

      $answers = [];
      foreach($question->getAnswers() as $answer) {
        array_push($answers, $answer->getText());
      }
      $myquestion->answers = $answers;
      
      array_push($formattedResult, $myquestion);
    }

    return $formattedResult;
  }

}