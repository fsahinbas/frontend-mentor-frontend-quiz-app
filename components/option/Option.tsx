"use client";
import React, { useEffect, useState } from "react";
import styles from "./option.module.css";
import Image from "next/image";
type OptionProps = {
  title: string;
  body: string;
  correctAnswer: string;
  choosenAnswer: string;
  isAnswerCorrect: boolean;
  isAnswerWrong: boolean;
  choseAnswer: (body: string) => void;
};

const Option = ({
  title,
  body,
  correctAnswer,
  choosenAnswer,
  isAnswerCorrect,
  isAnswerWrong,
  choseAnswer,
}: OptionProps) => {
  const [hasAnswered, setHasAnswered] = useState(false);
  const handleClick = () => {
    if (!isAnswerCorrect && !isAnswerWrong) {
      choseAnswer(body);
      setHasAnswered(true);
    }
  };

  useEffect(() => {
    setHasAnswered(false);
  }, [choosenAnswer]);

  return (
    <div
      className={[
        styles.optionWrapper,
        choosenAnswer === body ? styles.hasAnswered : "",
        isAnswerCorrect ? styles.correctAnswer : "",
        isAnswerWrong ? styles.wrongAnswer : "",
      ].join(" ")}
      data-title={title}
      onClick={handleClick}
    >
      <div className={styles.optionTitle}>
        <p className="heading-sm">{title}</p>
      </div>
      <div className={styles.optionBody}>
        <p className="heading-sm">{body}</p>
        <Image
          src="/assets/images/icon-correct.svg"
          alt=""
          width={30}
          height={30}
          style={{
            display:
              (isAnswerCorrect && choosenAnswer === body) ||
              (!isAnswerCorrect && isAnswerWrong && correctAnswer === body)
                ? "block"
                : "none",
          }}
        />
        <Image
          src="/assets/images/icon-error.svg"
          alt=""
          width={30}
          height={30}
          style={{
            display: isAnswerWrong && choosenAnswer === body ? "block" : "none",
          }}
        />
      </div>
    </div>
  );
};

export default Option;
