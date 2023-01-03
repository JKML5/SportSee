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
import performanceChartMockedData from '../_mocks_/PerformanceChartData'

/**
 * Load & Format chart's data from backend or mock
 * @param number userId User's Id
 * @returns array Formatted data e.g. [ { subject: "cardio", value: 80 }, { ... } ]
 */
function getFormattedData(userId) {
  const URL = `http://localhost:3000/user/${userId}/performance`
  const data = useFetch(URL)

  if (data !== 'undefied' && data.data.userId !== undefined) {
    const formattedData = []
    data.data.data.forEach((obj, i) => {
      formattedData.push({
        subject: data.data.kind[i + 1],
        value: obj.value,
      })
    })

    return formattedData
  }

  return performanceChartMockedData
}

function PerformanceChart({ userId }) {
  if (userId === undefined || userId <= 0) {
    return <Navigate to="/error404" />
  }

  const performanceChartData = getFormattedData(userId)

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
