import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import useFetch from '../utils/hooks'
import '../css/PerformanceChart.css'

function PerformanceChart({ userId }) {
  if (userId === undefined || userId <= 0) {
    return <Navigate to="/error404" />
  }

  let performanceChartData = useFetch(
    `http://localhost:3000/user/${userId}/performance`
  )

  if (
    performanceChartData !== undefined &&
    performanceChartData.data.userId !== undefined
  ) {
    const newArray = []
    performanceChartData.data.data.forEach((obj, i) => {
      newArray.push({
        subject: performanceChartData.data.kind[i + 1],
        value: obj.value,
      })
    })
    performanceChartData = newArray
  }

  return (
    <ResponsiveContainer className="performanceChart">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="70%"
        data={performanceChartData}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#FFFFFF' }} />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

PerformanceChart.propTypes = {
  userId: PropTypes.number.isRequired,
}

export default PerformanceChart
