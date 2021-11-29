import PropTypes from 'prop-types'
import s from './Statistics.module.css'

export default function Statistics({good, neutral, bad, total, positivePercentage}){
    return (
        <>
            <ul className={s.list}>
                <li className = {s.item}>
                    <p className = {s.text}>Good: {good}</p>
                </li>
                <li className = {s.item}>
                    <p className = {s.text}>Neutral: {neutral}</p>
                </li>
                <li className = {s.item}>
                    <p className = {s.text}>Bad: {bad}</p>
                </li>
            </ul>
            <p className = {s.text}>Total: {total}</p>
            <p className = {s.text}>Positive feedback: {positivePercentage || 0}%</p>
        </>

    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };