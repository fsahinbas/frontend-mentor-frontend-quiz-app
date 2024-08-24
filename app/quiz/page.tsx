"use client";
import styles from "./page.module.css";
import data from "@/data/data.json";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Option from "@/components/option/Option";
import Image from "next/image";
import Header from "@/components/header/Header";
type Question = {
  question: string;
  options: string[];
  answer: string;
};
type Quiz = {
  title: string;
  icon: string;
  bgColor: string;
  questions: Question[];
};

const QuizPage = () => {
  const router = useRouter();
  const options = ["A", "B", "C", "D"];
  const [isSubmitBtnShow, setIsSubmitBtnShow] = useState(true);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [isAnswerGiven, setIsAnswerGiven] = useState(false);
  const [score, setScore] = useState(0);
  const [choosenAnswer, setChoosenAnswer] = useState("");
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [quiz, setQuiz] = useState<Quiz>({
    title: "",
    icon: "",
    bgColor: "",
    questions: [],
  });

  useEffect(() => {
    setQuiz(
      data.quizzes.filter(
        (quiz) => quiz.title.toLowerCase() === q?.toLowerCase()
      )[0]
    );
  }, []);

  const handleSelectOption = (answer: string) => {
    setChoosenAnswer(answer);
    if (answer === quiz.questions[questionIndex].answer) {
    }
  };

  const handleSubmitAnswer = () => {
    if (choosenAnswer === "") {
      setIsAnswerGiven(true);
    } else {
      if (choosenAnswer === quiz.questions[questionIndex].answer) {
        setIsAnswerCorrect(true);
        setScore((prev) => prev + 1);
      } else {
        setIsAnswerWrong(true);
      }
      setIsAnswerGiven(false);
      setIsSubmitBtnShow(false);
    }
  };

  const handleNextQuestion = () => {
    if (questionIndex + 1 === quiz.questions.length) {
      console.log(quiz.bgColor);
      router.push(
        `/result?quiz=${quiz.title}&score=${score}&bg=${quiz.bgColor}`
      );
    }
    setIsSubmitBtnShow(true);
    setQuestionIndex(questionIndex + 1);
    setIsAnswerCorrect(false);
    setIsAnswerWrong(false);
    setIsAnswerGiven(false);
    setChoosenAnswer("");
  };

  return (
    { quiz } && (
      <>
        <Header
          title={quiz.title}
          image={quiz.icon}
          isVisible={true}
          bgColor={quiz.bgColor}
        />
        <main className="main">
          <div className="left-side">
            <p className="body-s" style={{ marginBottom: "1.6875rem" }}>
              Question {questionIndex + 1} of {quiz.questions.length}
            </p>
            <p className="heading-md" style={{ lineHeight: "120%" }}>
              {quiz.questions[questionIndex] &&
                quiz.questions[questionIndex].question}
            </p>
            <div className={styles.progressBar}>
              <div
                className={styles.progressBarFill}
                style={{
                  width: `${
                    ((questionIndex + 1) / quiz.questions.length) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="right-side">
            {quiz.questions[questionIndex] &&
              quiz.questions[questionIndex].options.map((option, index) => (
                <Option
                  key={index}
                  body={option}
                  title={options[index]}
                  correctAnswer={quiz.questions[questionIndex].answer}
                  choseAnswer={handleSelectOption}
                  isAnswerCorrect={isAnswerCorrect}
                  isAnswerWrong={isAnswerWrong}
                  choosenAnswer={choosenAnswer}
                />
              ))}
            {isSubmitBtnShow && (
              <button
                className={`${styles.btnSubmit} heading-sm`}
                onClick={handleSubmitAnswer}
              >
                Submit Answer
              </button>
            )}
            {!isSubmitBtnShow && (
              <button
                className={`${styles.btnSubmit} heading-sm`}
                onClick={handleNextQuestion}
              >
                Next Question
              </button>
            )}
            {choosenAnswer === "" && isAnswerGiven && (
              <div className="empty-answer">
                <Image
                  src="/assets/images/icon-error.svg"
                  alt=""
                  width={30}
                  height={30}
                />
                <p className="header-sm">Please select an answer</p>
              </div>
            )}
          </div>
        </main>
      </>
    )
  );
};

export default QuizPage;
