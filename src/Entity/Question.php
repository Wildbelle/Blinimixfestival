<?php

namespace App\Entity;

use App\Repository\QuestionRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=QuestionRepository::class)
 */
class Question
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     */
    private $text;

    /**
     * @ORM\ManyToOne(targetEntity=Answer::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $answers;

    /**
     * @ORM\OneToOne(targetEntity=Answer::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $trueAnswer;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getAnswers(): ?Answer
    {
        return $this->answers;
    }

    public function setAnswers(?Answer $answers): self
    {
        $this->answers = $answers;

        return $this;
    }

    public function getTrueAnswer(): ?Answer
    {
        return $this->trueAnswer;
    }

    public function setTrueAnswer(Answer $trueAnswer): self
    {
        $this->trueAnswer = $trueAnswer;

        return $this;
    }
}
