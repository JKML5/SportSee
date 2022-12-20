import React from 'react'
import PropTypes from 'prop-types'
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'

function TodayScoreChart({ score }) {
  const data = [
    {
      value: score,
      fill: '#FF0000',
    },
  ]

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      className="SimpleRadialBarChart"
    >
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius={80}
        outerRadius={80}
        barSize={12}
        data={data}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />

        <RadialBar
          background
          clockWise
          dataKey="value"
          cornerRadius={50}
          fill="#82ca9d"
        />
        <text x="30" y="40" fontSize="15" fontWeight="500" fill="#20253A">
          Score
        </text>

        <text
          x="50%"
          y="45%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={26}
          fontWeight={700}
          fill="#282D30"
        >
          {score}%
        </text>

        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={15}
          fontWeight={700}
          fill="#74798C"
        >
          de votre objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

TodayScoreChart.propTypes = {
  score: PropTypes.number.isRequired,
}

export default TodayScoreChart
