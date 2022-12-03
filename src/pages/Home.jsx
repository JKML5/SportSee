import '../css/Home.css'

function Home() {
  return (
    <>
      <h1 className="title">
        Bonjour <strong>Thomas</strong>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="dashboard">
        <div className="charts">
          <div className="card">Stat</div>
          <div className="card">Stat</div>
          <div className="card">Stat</div>
          <div className="card">Stat</div>
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
