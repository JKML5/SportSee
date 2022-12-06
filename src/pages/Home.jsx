import '../css/Home.css'
import SessionsDurationChart from '../components/SessionsDurationChart'
import DailyActivityChart from '../components/DailyActivityChart'
import RadarChart from '../components/RadarChart'
import SimpleRadarBarChart from '../components/SimpleRadialBarChart'

function Home() {
  return (
    <>
      <h1 className="title">
        Bonjour <strong>Thomas</strong>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="dashboard">
        <div className="charts">
          <DailyActivityChart />
          <div className="card">
            <SessionsDurationChart />
          </div>
          <div className="card">
            <RadarChart />
          </div>
          <div className="card">
            <SimpleRadarBarChart />
          </div>
        </div>
        <div className="stats">
          <div className="card">Stat</div>
          <div className="card">Stat</div>
          <div className="card">Stat</div>
          <div className="card">Stat</div>
        </div>
      </div>
    </>
  )
}

export default Home
