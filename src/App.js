import { useState } from "react"
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions"
import Statistics from "./components/Statistics/Statistics"
import Section from "./components/Section/Section"

function App(){

const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)


const clickButton = (event) => {
    const eventName = event.target.name

    switch (eventName){
      case 'good':
        console.log('pressed good')
        setGood(good + 1)
        break
      case 'bad':
        console.log('pressed bad')
        setBad(bad + 1)
        break
      case 'neutral':
        console.log('pressed neutral')
        setNeutral(neutral + 1)
        break
      default: return
    }


}

const countTotalFeedback = () => {
    const result = good + neutral + bad
    return result
}

const countPositiveFeedbackPercentage = () => {
    const result = Math.round(good / (countTotalFeedback()) * 100);
    return result
}



    return(
    <>
        <Section sectionName = 'Please leave feedback'>
          <FeedbackOptions onClick = {clickButton} />
        </Section>
        <Section sectionName = 'Statistics'>
          {!countTotalFeedback() ? <p>There is no feedback</p> : <Statistics 
            good = {good} 
            neutral = {neutral}
            bad = {bad}
            total = {countTotalFeedback()}
            positivePercentage = {countPositiveFeedbackPercentage()}
          />}


        </Section>
      </>
    )

}

export default App;
