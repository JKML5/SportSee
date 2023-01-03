import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Text,
} from 'recharts'
import useFetch from '../utils/hooks'
import '../css/SessionsDurationChart.css'
import sessionsDurationChartMockedData from '../_mocks_/SessionsDurationChartData'

/**
 * Load & Format chart's data from backend or mock
 * @param number userId User's Id
 * @returns array Formatted data e.g. [ { name: 1, sessionLength: 30 }, { ... } ]
 */
function getFormattedData(userId) {
  const URL = `http://localhost:3000/user/${userId}/average-sessions`
  const data = useFetch(URL)

  if (data !== undefined && data.data.sessions !== undefined) {
    return data.data.sessions.map((obj) => {
      const newObj = obj
      newObj.name = obj.day
      return newObj
    })
  }

  return sessionsDurationChartMockedData
}

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}`} min</p>
      </div>
    )
  }

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(PropTypes.objectOf),
  }

  CustomTooltip.defaultProps = {
    active: true,
    payload: null,
  }

  return null
}

function CustomizedLabel() {
  return (
    <Text
      x={30}
      y={60}
      width={150}
      fill="#ffffff"
      fillOpacity="0.6"
      fontSize={16}
    >
      Durée moyenne des sessions
    </Text>
  )
}

function SessionsDurationChart({ userId }) {
  if (userId === undefined || userId <= 0) {
    return <Navigate to="/error404" />
  }

  const sessionsDurationChartData = getFormattedData(userId)

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      className="sessionsDurationChart"
    >
      <LineChart
        data={sessionsDurationChartData}
        margin={{ top: 100, left: 15, right: 15, bottom: 15 }}
      >
        <XAxis
          dataKey="name"
          axisLine={false}
          tick={{ fill: '#ffffff' }}
          tickLine={false}
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: '12px',
            opacity: '0.6',
          }}
          label={<CustomizedLabel />}
        />
        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{ outline: 'none' }}
        />

        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#ffffff"
          dot={false}
          strokeWidth="2"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

SessionsDurationChart.propTypes = {
  userId: PropTypes.number.isRequired,
}

export default SessionsDurationChart
