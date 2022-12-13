import { useParams } from 'react-router-dom'
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

function DailyActivityChart() {
  const { userId } = useParams()

  const activities = useFetch(`http://localhost:3000/user/${userId}/activity`)
    .data.sessions

  return (
    <ResponsiveContainer className="card" width="100%" height="100%">
      <BarChart
        width={835}
        height={320}
        data={activities}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis orientation="right" />
        <Tooltip wrapperStyle={{ outline: 'none' }} />
        <Legend />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default DailyActivityChart
