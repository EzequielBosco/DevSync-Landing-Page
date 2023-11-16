import './home.css'

const Home = () => {
  return(
    <>
      <main> 
        <h1 id='title'>DEVSYNC SOLUTIONS</h1>
        <div className='div-home'>
          <div class="loading">
            <span class="carga"></span>
          </div>
          <h2>Sitio en Mantenimiento...</h2>
        </div>
          <h3>Por favor, vuelva más tarde</h3>
        <br />
        <span class="loader"></span>
      </main>
    </>
  )
}

export default Home