import logo from '../assets/Logo.png'
import { ImLinkedin } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io";
import './home.css'

const Home = () => {
  return(
    <>
      <main> 
        <div className='left'>
          <div className='div-name'>
            <img src={logo} alt='Logo Devsync' />
            <h1 className='vertical-text'>DEVSYNC</h1>
          </div>
          <div className='div-media'>
            <a href='https://www.linkedin.com/company/devsync-solutions/' target='_blank'>
              <ImLinkedin />
            </a>
            <a href='https://github.com/DevSync-Solutions' target='_blank'>
              <IoLogoGithub />
            </a>
          </div>
        </div>
        <div className='right'>   
          <div className='div-home'>
            <div className="loading">
              <span className="carga"></span>
            </div>
            <h2>Mantenimiento...</h2>
          </div>
            <h3>Por favor, vuelva más tarde</h3>
          <br />
          <span className="loader"></span>
        </div>
      </main>
    </>
  )
}

export default Home