<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

final class PostFormGame extends AbstractController
{

  public function __invoke(Request $request)
  {
    $content = json_decode($request->getContent());

    dd('PostFormGame', $content);
  }
}