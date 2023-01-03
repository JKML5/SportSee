import PropTypes from 'prop-types'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import useFetch from '../utils/hooks'
import '../css/DailyActivityChart.css'
import dailyActivityChartMockedData from '../_mocks_/DailyActivityChartData'

/**
 * Load & Format chart's data from backend or mock
 * @param number userId User's Id
 * @returns array Formatted data e.g. [ { name: '01', kilogram: 80, calories: 240 }, { ... } ]
 */
function getFormattedData(userId) {
  const URL = `http://localhost:3000/user/${userId}/activity`
  const data = useFetch(URL)

  if (data !== undefined && data.data.sessions !== undefined) {
    const formattedData = []

    data.data.sessions.forEach((obj) => {
      formattedData.push({
        name: obj.day.slice(8, 10),
        kilogram: obj.kilogram,
        calories: obj.calories,
      })
    })

    return formattedData
  }

  return dailyActivityChartMockedData
}

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}`} kg</p>
        <p className="label">{`${payload[1].value}`} KCal</p>
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

function DailyActivityChart({ userId }) {
  const dailyActivityChartData = getFormattedData(userId)

  return (
    <ResponsiveContainer
      className="dailyActivityChart"
      width="100%"
      height="100%"
    >
      <BarChart
        width={835}
        height={320}
        data={dailyActivityChartData}
        margin={{
          top: 60,
          right: 30,
          left: 30,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <XAxis
          dataKey="name"
          tick={{ fill: '#9B9EAC' }}
          stroke="#DEDEDE"
          dy={15}
        />
        <YAxis
          orientation="right"
          tick={{ fill: '#9B9EAC' }}
          stroke="#FBFBFB"
          dx={20}
        />
        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{ outline: 'none' }}
        />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          iconType="circle"
          iconSize={8}
          align="right"
          wrapperStyle={{ top: 20 }}
        />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          radius={[10, 10, 0, 0]}
          name="Poids (kg)"
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[10, 10, 0, 0]}
          name="Calories brûlées (kCal)"
        />
        <text x="30" y="40" fontSize="15" fontWeight="500" fill="#20253A">
          Activité quotidienne
        </text>
      </BarChart>
    </ResponsiveContainer>
  )
}

DailyActivityChart.propTypes = {
  userId: PropTypes.number.isRequired,
}

export default DailyActivityChart
