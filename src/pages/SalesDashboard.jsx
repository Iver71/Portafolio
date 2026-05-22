import { useNavigate }
from 'react-router-dom'

import '../styles/portfolio.css'


import dashboardImg1 from '../assets/projects/dashboard-preview.png'

function SalesDashboard(){

  const navigate = useNavigate()

  const dashboardUrl =
    'https://app.fabric.microsoft.com/view?r=eyJrIjoiODA5MTY0YTEtZDljOS00MjI2LWJjYjgtNjg0NWQwMTFjMjIyIiwidCI6IjYxYTFjNDA3LWM2NTgtNDhkNS05MjgwLTdiZTEzODhkMTIyZCIsImMiOjR9'

  return(

    <div className="dashboard-page">

      {/* HERO */}

      <header className="hero-small">

        <h1>
          Sales Dashboard
        </h1>

        <p>
          Power BI • Data Visualization •
          Business Analytics
        </p>

      </header>

      {/* MAIN */}

      <main className="container">

        <section
          className="
          glass dashboard-content
          "
        >

          {/* TITULO */}

          <h2>
            Descripción del Proyecto
          </h2>

          {/* DESCRIPCION */}

          <p>

            Dashboard interactivo
            desarrollado para análisis
            de ventas, rentabilidad
            y KPIs comerciales.

          </p>

          {/* STACK */}

          <div className="tech-stack">

            <span>Power BI</span>

            <span>SQL</span>

            <span>Python</span>

            <span>Pandas</span>

            <span>Business Intelligence</span>

          </div>

          {/* PREVIEW */}

          <div className="dashboard-preview">

            <img

              src="public/dashboard-preview.png"              

              alt="Sales Dashboard"

              className="dashboard-image"

            />
            <img
              src={`${import.meta.env.BASE_URL}dashboard-preview.png`}              
              alt="Sales Dashboard"
              className="dashboard-image"
            />

            <img
              src={`${import.meta.env.BASE_URL}dashboard-preview.png`}              
              alt="Sales Dashboard"
              className="dashboard-image"
            />

            <img

                src={dashboardImg1}

                alt="Sales Dashboard"

                className="dashboard-image"

              />

          </div>

          <div
              className="dashboard-card"

              onClick={()=>
                window.open(
                  dashboardUrl,
                  '_blank'
                )
              }
            >

              <img

                src={dashboardImg1}

                alt="Sales Dashboard"

                className="dashboard-image"

              />

              <div className="dashboard-overlay">

                <h3>
                  Executive Overview
                </h3>

                <p>
                  Revenue • KPIs • Sales
                </p>

              </div>

            </div>

          {/* BOTONES */}

          <div className="dashboard-buttons">

            <button

              onClick={()=>
                window.open(
                  dashboardUrl,
                  '_blank'
                )
              }

            >

              Abrir Dashboard

            </button>

            <button
              className="secondary-btn"

              onClick={()=>
                navigate('/')
              }
            >

              Volver al Inicio

            </button>

          </div>

          {/* IFRAME OPCIONAL */}

          <div className="iframe-container">

            <iframe

              src={dashboardUrl}

              title="Sales Dashboard"

              width="100%"

              height="500"

              frameBorder="0"

              allowFullScreen

            />

          </div>

        </section>

      </main>

    </div>

  )
}

export default SalesDashboard