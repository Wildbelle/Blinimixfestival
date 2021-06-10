<?php

namespace App\Entity;

use App\Repository\StepRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass=StepRepository::class)
 * @ApiResource(
 *      collectionOperations={
 *          "GET",
 *      },
 *      itemOperations={
 *          "GET"
 *      }
 * )
 */
class Step
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $number;

    /**
     * @ORM\Column(type="text")
     */
    private $text;

    /**
     * @ORM\ManyToOne(targetEntity=Recepie::class, inversedBy="steps")
     */
    private $recepie;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumber(): ?int
    {
        return $this->number;
    }

    public function setNumber(int $number): self
    {
        $this->number = $number;

        return $this;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(string $text): self
    {
        $this->text = $text;

        return $this;
    }

    public function getRecepie(): ?Recepie
    {
        return $this->recepie;
    }

    public function setRecepie(?Recepie $recepie): self
    {
        $this->recepie = $recepie;

        return $this;
    }
}
