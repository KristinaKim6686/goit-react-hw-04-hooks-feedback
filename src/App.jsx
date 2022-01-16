import React from "react";
import { useState } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notifications";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalFeedback = good + neutral + bad;
  const positivePercentage = ((good / totalFeedback) * 100).toFixed(2);
  const controlTitles = ["good", "neutral", "bad"];
  const addVote = (e) => {
    const { name } = e.target;
    switch (name) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Section title="Leave your feedback please">
        <FeedbackOptions
          options={controlTitles}
          onLeaveFeedback={addVote}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          ></Statistics>
        ) : (
          <Notification message="No feedbacks yet"></Notification>
        )}
      </Section>
    </>
  );
}

export default App;
