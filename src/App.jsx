// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notifications';
import Statistics from './components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
  };
  countPositiveFedback = () => {
    const { good } = this.state;
    const rate = good / this.countTotalFeedback();
    return (rate * 100).toFixed(2);
  }
  addVote = (e) => {
    const { name } = e.target;
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      }
    });
  };
  render(){
  const { good, neutral, bad } = this.state;
    const controlTitles = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = +this.countPositiveFedback();
  return (
    <>
      <Section title='Leave your feedback please'>
        <FeedbackOptions
          options={controlTitles}
          onLeaveFeedback={this.addVote}>
        </FeedbackOptions> 
      </Section>
      <Section title='Statistics'>
        {total ? (
          <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}>
          </Statistics>
        ) : (
            <Notification message='No feedbacks yet'></Notification>
        )}
      </Section>
    </>
  )
};
};

export default App;
