import PropTypes from 'prop-types'
import React from 'react'

export const Level1Component = ({ title, text }) => (
   <section>
       <h2>{title}</h2>
       <p>{text}</p>
   </section>
)

Level1Component.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

