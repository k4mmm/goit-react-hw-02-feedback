import { Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map((option) => (
        <Button
          type="button"
          option={option}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </>
  );
};
