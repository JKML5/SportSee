import React from 'react'
import PropTypes from 'prop-types'
import '../css/SimpleStat.css'

function SimpleStat({ color, title, description }) {
  return (
    <div className={`card simpleStat ${color}`}>
      <div className="thumbnail" />
      <div className="description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

SimpleStat.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default SimpleStat
