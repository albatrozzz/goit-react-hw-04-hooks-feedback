import PropTypes from 'prop-types'
import s from './Section.module.css'

export default function Section({sectionName, children}){
return(
    <section className = {s.section}>
        <h2 className = {s.title}>{sectionName}</h2>
        {children}
    </section>
)
}

Section.propTypes = {
    sectionName: PropTypes.string,
    
}