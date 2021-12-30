import PropTypes from 'prop-types'
import React from 'react'

export const Radio = ({value, name, id, label, onChange, state}) => {
    return (
        <div>
            <input type="radio" id={id} name={name} value={value} onChange={onChange} checked={value === state}/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

Radio.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    state: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}