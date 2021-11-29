import PropTypes from 'prop-types'
import s from './Button.module.css'

export default function Button({name, onClick}){
    return (
        <button className={s.button} name={name} onClick = {onClick}>{name}</button>
    )
}

Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func
}