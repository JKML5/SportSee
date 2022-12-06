import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import '../css/SessionsDurationChart.css'

function SessionsDurationChart() {
  const data = [
    {
      name: 'L',
      uv: 400,
    },
    {
      name: 'M',
      uv: 300,
    },
    {
      name: 'M',
      uv: 200,
    },
    {
      name: 'J',
      uv: 278,
    },
    {
      name: 'V',
      uv: 189,
    },
    {
      name: 'S',
      uv: 239,
    },
    {
      name: 'D',
      uv: 349,
    },
  ]

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      className="sessionsDurationChart"
    >
      <LineChart
        data={data}
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
          label={{
            value: 'Durée moyenne des sessions',
            position: 'insideBottomLeft',
            offset: 15,
            dy: -175,
            fill: '#ffffff',
            fillOpacity: '0.6',
          }}
        />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="uv"
          stroke="#ffffff"
          dot={false}
          strokeWidth="2"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default SessionsDurationChart
