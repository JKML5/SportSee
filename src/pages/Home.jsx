import '../css/Home.css'
import { useParams } from 'react-router-dom'
import SessionsDurationChart from '../components/SessionsDurationChart'
import DailyActivityChart from '../components/DailyActivityChart'
import PerformanceChart from '../components/PerformanceChart'
import TodayScoreChart from '../components/TodayScoreChart'
import SimpleStat from '../components/SimpleStat'
import useFetch from '../utils/hooks'
import todayScoreChartMockedData from '../_mocks_/TodayScoreChartData'

/**
 * Load & Format chart's data from backend or mock
 * @param number userId User's Id
 * @returns array Formatted data e.g. [ { name: '01', kilogram: 80, calories: 240 }, { ... } ]
 */
function getFormattedData(userId) {
  const URL = `http://localhost:3000/user/${userId}`
  const { data } = useFetch(URL).data
  const formattedData = []

  if (
    data !== undefined &&
    data.keyData !== undefined &&
    (data.todayScore !== undefined || data.score !== undefined)
  ) {
    formattedData.firstName = data.userInfos.firstName
    formattedData.caloriesTitle = `${data.keyData.calorieCount}kCal`
    formattedData.proteinTitle = `${data.keyData.proteinCount}g`
    formattedData.carbohydrateTitle = `${data.keyData.carbohydrateCount}g`
    formattedData.lipidTitle = `${data.keyData.lipidCount}g`

    /**
     * @todo fix backend data variable name todayScore & score
     */
    formattedData.score =
      data.todayScore !== undefined
        ? parseFloat(data.todayScore) * 100
        : todayScoreChartMockedData

    formattedData.score =
      data.score !== undefined
        ? parseFloat(data.score) * 100
        : formattedData.score
  } else {
    return ''
  }

  return formattedData
}

function Home() {
  const { userId } = useParams()

  const data = getFormattedData(userId)

  // if (data === '') return <Navigate to="/error404" />
  console.log(data)

  if (data !== '')
    return (
      <>
        <h1 className="title">
          Bonjour <strong>{data.firstName}</strong>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <div className="dashboard">
          <div className="charts">
            <DailyActivityChart userId={parseInt(userId, 10)} />
            <SessionsDurationChart userId={parseInt(userId, 10)} />
            <PerformanceChart userId={parseInt(userId, 10)} />
            <TodayScoreChart score={data.score} />
          </div>
          <div className="stats">
            <SimpleStat
              color="red"
              title={data.caloriesTitle}
              description="Calories"
            />
            <SimpleStat
              color="blue"
              title={data.proteinTitle}
              description="Protéines"
            />
            <SimpleStat
              color="yellow"
              title={data.carbohydrateTitle}
              description="Glucides"
            />
            <SimpleStat
              color="pink"
              title={data.lipidTitle}
              description="Lipides"
            />
          </div>
        </div>
      </>
    )
}

export default Home
