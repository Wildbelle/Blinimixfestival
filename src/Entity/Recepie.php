<?php

namespace App\Entity;

use App\Repository\RecepieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass=RecepieRepository::class)
 * @ApiResource(
 *      collectionOperations={
 *          "GET",
 *      },
 *      itemOperations={
 *          "GET"
 *      }
 * )
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
     * @ORM\OneToMany(targetEntity=Step::class, mappedBy="recepie")
     */
    private $steps;

    /**
     * @ORM\OneToMany(targetEntity=Ingredient::class, mappedBy="recepie")
     */
    private $ingredients;

    public function __construct()
    {
        $this->steps = new ArrayCollection();
        $this->ingredients = new ArrayCollection();
    }

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

    /**
     * @return Collection|Step[]
     */
    public function getSteps(): Collection
    {
        return $this->steps;
    }

    public function addStep(Step $step): self
    {
        if (!$this->steps->contains($step)) {
            $this->steps[] = $step;
            $step->setRecepie($this);
        }

        return $this;
    }

    public function removeStep(Step $step): self
    {
        if ($this->steps->removeElement($step)) {
            // set the owning side to null (unless already changed)
            if ($step->getRecepie() === $this) {
                $step->setRecepie(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Ingredient[]
     */
    public function getIngredients(): Collection
    {
        return $this->ingredients;
    }

    public function addIngredient(Ingredient $ingredient): self
    {
        if (!$this->ingredients->contains($ingredient)) {
            $this->ingredients[] = $ingredient;
            $ingredient->setRecepie($this);
        }

        return $this;
    }

    public function removeIngredient(Ingredient $ingredient): self
    {
        if ($this->ingredients->removeElement($ingredient)) {
            // set the owning side to null (unless already changed)
            if ($ingredient->getRecepie() === $this) {
                $ingredient->setRecepie(null);
            }
        }

        return $this;
    }
}
