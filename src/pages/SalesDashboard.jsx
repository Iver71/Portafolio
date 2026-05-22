import { useNavigate } from 'react-router-dom'

import '../styles/portfolio.css'

function SalesDashboard(){

  const navigate = useNavigate()

  return(

    <div className="dashboard-page">

      <header className="hero-small">

        <h1>Sales Dashboard</h1>

        <p>
          Power BI • Data Visualization • Business Analytics
        </p>

      </header>

      <main className="container">

        <section className="glass dashboard-content">

          <h2>Descripción del Proyecto</h2>

          <p>
            Dashboard interactivo desarrollado
            para análisis de ventas,
            rentabilidad y KPIs.
          </p>

          <div className="dashboard-preview">

            <div className="fake-chart"></div>

            <div className="fake-chart"></div>

            <div className="fake-chart"></div>

          </div>

          <button
            onClick={()=>navigate('/')}
          >
            Volver al Inicio
          </button>

        </section>

      </main>

    </div>

  )
}

export default SalesDashboard