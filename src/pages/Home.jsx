import '../css/Home.css'
import { useParams } from 'react-router-dom'
import SessionsDurationChart from '../components/SessionsDurationChart'
import DailyActivityChart from '../components/DailyActivityChart'
import PerformanceChart from '../components/PerformanceChart'
import TodayScoreChart from '../components/TodayScoreChart'
import SimpleStat from '../components/SimpleStat'
import useFetch from '../utils/hooks'

function Home() {
  const { userId } = useParams()

  const data = []

  const generalData = useFetch(`http://localhost:3000/user/${userId}`).data
  if (
    generalData !== undefined &&
    generalData.keyData !== undefined &&
    (generalData.todayScore !== undefined || generalData.score !== undefined)
  ) {
    data.firstName = generalData.userInfos.firstName
    data.caloriesTitle = `${generalData.keyData.calorieCount}kCal`
    data.proteinTitle = `${generalData.keyData.proteinCount}g`
    data.carbohydrateTitle = `${generalData.keyData.carbohydrateCount}g`
    data.lipidTitle = `${generalData.keyData.lipidCount}g`
    data.score =
      generalData.todayScore !== undefined
        ? parseFloat(generalData.todayScore) * 100
        : 0

    data.score =
      generalData.score !== undefined
        ? parseFloat(generalData.score) * 100
        : data.score
  } else {
    data.caloriesTitle = '0 kCal'
    data.proteinTitle = '0 g'
    data.carbohydrateTitle = '0 g'
    data.lipidTitle = '0 g'
    data.score = 0
  }

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
