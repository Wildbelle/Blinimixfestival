<?php

namespace App\Controller;

use App\Entity\Participants;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints\Date;

final class PostFormGame extends AbstractController
{

  public function __invoke(Request $request, EntityManagerInterface $em)
  {
    $content = json_decode($request->getContent());
    $date = DateTime::createFromFormat('d/m/Y', $content->dateOfBirth);
    $answers = $content->items;

    $participant = new Participants();
    $participant->setCivility($content->civility);
    $participant->setLastname($content->lastname);
    $participant->setFirstname($content->firstname);
    $participant->setDateOfBirth($date);
    $participant->setEmail($content->email);

    $participant->setAnswer1($answers[0]->text);
    $participant->setAnswer2($answers[1]->text);
    $participant->setAnswer3($answers[2]->text);
    $participant->setAnswer4($answers[3]->text);

    $em->persist($participant);
    return $em->flush();
  }
}