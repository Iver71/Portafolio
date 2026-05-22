import { useNavigate } from 'react-router-dom'

import '../styles/portfolio.css'

function Home() {

  const navigate = useNavigate()

  const projects = [

    {
      title:'Dashboard Ecommerce',
      description:'Dashboard realizado en Power BI para análisis de ventas.',
      route:'/sales-dashboard'
    },

    {
      title:'Predicción de Mora',
      description:'Modelo ML para riesgo crediticio.',
      route:'/sales-dashboard'
    },

    {
      title:'Sistema RAG',
      description:'Proyecto usando embeddings y LLM.',
      route:'/sales-dashboard'
    }

  ]

  return (

    <>

      {/* HERO */}

      <header className="hero">

        <div className="hero-overlay">

          <h1>Iver Castro</h1>

          <p>
            Data Analytics • Machine Learning • React 19
          </p>

        </div>

      </header>

      {/* MAIN */}

      <main className="container">

        {/* ABOUT */}

        <section className="about glass">

          <h2>Sobre mí</h2>

          <p>
            Especializado en Data Analytics,
            visualización y Machine Learning.
          </p>

          <p>
            Desarrollo soluciones modernas usando
            React 19, Power BI, Python y GCP.
          </p>

        </section>

        {/* PROYECTOS */}

        <section>

          <h2 className="section-title">

            Mis Proyectos

          </h2>

          <div className="projects-grid">

            {
              projects.map((project,index)=>(

                <div
                  key={index}
                  className="card"
                >

                  <div className="card-glow"></div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <button
                    onClick={()=>navigate(project.route)}
                  >
                    Ver Proyecto
                  </button>

                </div>

              ))
            }

          </div>

        </section>

        {/* SKILLS */}

        <section className="skills glass">

          <h2>Tecnologías</h2>

          <div className="skills-list">

            <span className="skill">React 19</span>
            <span className="skill">Node.js</span>
            <span className="skill">Power BI</span>
            <span className="skill">Python</span>
            <span className="skill">GCP</span>
            <span className="skill">Spark</span>
            <span className="skill">Airflow</span>

          </div>

        </section>

      </main>

      {/* FOOTER */}

      <footer>

        © 2026 Iver Castro | Portfolio React 19

      </footer>

    </>

  )
}

export default Home