<?php

namespace App\Entity;

use App\Repository\RecepieRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RecepieRepository::class)
 */
class Recepie
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     */
    private $persons;

    /**
     * @ORM\Column(type="integer")
     */
    private $timePrepa;

    /**
     * @ORM\Column(type="integer")
     */
    private $timeCooking;

    /**
     * @ORM\ManyToOne(targetEntity=Step::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $steps;

    /**
     * @ORM\ManyToOne(targetEntity=Ingredient::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $ingredients;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPersons(): ?int
    {
        return $this->persons;
    }

    public function setPersons(int $persons): self
    {
        $this->persons = $persons;

        return $this;
    }

    public function getTimePrepa(): ?int
    {
        return $this->timePrepa;
    }

    public function setTimePrepa(int $timePrepa): self
    {
        $this->timePrepa = $timePrepa;

        return $this;
    }

    public function getTimeCooking(): ?int
    {
        return $this->timeCooking;
    }

    public function setTimeCooking(int $timeCooking): self
    {
        $this->timeCooking = $timeCooking;

        return $this;
    }

    public function getSteps(): ?Step
    {
        return $this->steps;
    }

    public function setSteps(?Step $steps): self
    {
        $this->steps = $steps;

        return $this;
    }

    public function getIngredients(): ?Ingredient
    {
        return $this->ingredients;
    }

    public function setIngredients(?Ingredient $ingredients): self
    {
        $this->ingredients = $ingredients;

        return $this;
    }
}
