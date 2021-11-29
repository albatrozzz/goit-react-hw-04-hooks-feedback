import { useState } from "react"
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions"
import Statistics from "./components/Statistics/Statistics"
import Section from "./components/Section/Section"

function App(){
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
}

const [good, setGood] = useState(0)
const [neautral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)


clickButton = (event) => {
    const eventName = event.target.name
    this.setState((prev) => {
        return {[eventName]: prev[eventName] + 1}
    })
}

countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    const result = good + neutral + bad
    return result
}

countPositiveFeedbackPercentage = () => {
    const result = Math.round(this.state.good / (this.countTotalFeedback()) * 100);
    return result
}


render(){
    return(
    <>
        <Section sectionName = 'Please leave feedback'>
          <FeedbackOptions onClick = {this.clickButton} />
        </Section>
        <Section sectionName = 'Statistics'>
          {!this.countTotalFeedback() ? <p>There is no feedback</p> : <Statistics 
            good = {this.state.good} 
            neutral = {this.state.neutral}
            bad = {this.state.bad}
            total = {this.countTotalFeedback()}
            positivePercentage = {this.countPositiveFeedbackPercentage()}
          />}


        </Section>
      </>
    )
}
}

export default App;
