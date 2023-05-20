import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Custom.css'
import favicon from '../img/favicon.png'
import swedish from '../img/svenska.png'
import aboutme from '../img/ommig.jpg'
import html5 from '../img/html5.svg'
import css3 from '../img/css3.svg'
import javascript from '../img/javascript.svg'
import react from '../img/react.svg'
import vuejs from '../img/vuejs.svg'
import wordpress from '../img/wordpress.svg'
import net from '../img/net.svg'
import nodejs from '../img/nodejs.svg'
import php from '../img/php.svg'
import bootstrap from '../img/bootstrap.svg'
import mongodb from '../img/mongodb.svg'
import postman from '../img/postman.svg'
import visualstudicode from '../img/visualstudiocode.svg'
import visualstudio from '../img/visualstudio.svg'


export const PortfolioSwe = () => {
  return (
    <div>

      <nav className='p-1 d-flex justify-content-between'>
       <Link to="/"><img className='logo' src= {favicon} alt='logo'></img></Link>

       <div className='d-flex align-items-center'>

        <ul className='d-flex nav-list align-items-center'>
          <li className='p-2 nav-item'><a href='/#techstack' className='text-light'>Kunskaper</a></li>
          <li className='p-2 nav-item'><a href='/' className='text-light'>Projekts</a></li>
          <li className='p-2 nav-item'><a href='/' className='text-light'>Kontakta Mig</a></li>
          <Link to="/"><img className='lang p-2 nav-item' src= {swedish} alt='logo'></img></Link>
        </ul>

       </div>
      </nav>

      <div className='header '>

        <div className='header-info align-items-center d-flex'>
          <div className='header-left'>
            <h1 className='text-light header-title'>Frontend och System Utvecklare</h1>
            <p className='text-light header-text'>Hej jag heter Casper och är utbildad frontend utvecklare. Jag jobbar som systemutvecklare på Black AA AB i Västerås.</p>
            
            <div className='d-flex pt-2'>
              <i className="pe-2 fa-brands fa-linkedin fa-2xl text-light"></i>
              <i className="ps-2 fa-brands fa-github fa-2xl text-light"></i>
            </div>
          </div>

          <div className='header-right'>
            <div className='ball-1'></div>
            <div className='ball-2'></div>
            <div className='ball-3'></div>
          </div>
        </div>

        <div className='header-info d-flex'>
          <img className='aboutme-img' src={aboutme} alt="" />

          <div className='ms-4 text-light'>
            <h1>Om mig</h1>
            <p>Mitt namn är Casper Bjarnetoft och  jag utbildar mig till frontend utvecklare på EC utbildning i Västerås. Jag jobbar som system utvecklare på Black AA AB i västerås.</p>
            <p>Jag är en drivande, noggrann och ordningsam person som gillar problemlösning och utmaningar. Jag ser både problemlösning och utmaningar som ett sätt att utvecklas inom arbetsrollen. Jag kan jobba bra både självständigt och i grupp. Jag gillar när arbetet är bra strukturerat och man har tydliga mål.</p>
            <button className='mt-2 btn bg-secondar-color text-light'>Kolla in mina projekt</button>
          </div>
        </div>

      </div>
      
      <div className='mb-4' id='techstack'>
        <h1 className='text-light text-center mt-4'>Kunskaper</h1>
        <div className='row text-center'>
          <div className='col-md mt-2 p-1'>
            <h3 className='secondar-color'>Frontend</h3>
            <div>
              <img src={html5} alt="html" />
              <img className='ms-3' src={css3} alt="html" />
              <img className='ms-3' src={javascript} alt="html" />
              <img className='ms-3' src={react} alt="html" />
              <img className='ms-3' src={vuejs} alt="html" />
              <img className='ms-3' src={wordpress} alt="html" />
            </div>
          </div>

          <div className='col-md mt-2 p-1'>
            <h3 className='secondar-color'>Backend</h3>
            <div>
              <img src={net} alt="html" />
              <img className='ms-3' src={nodejs} alt="html" />
              <img className='ms-3' src={php} alt="html" />
            </div>
          </div>

          <div className='col-md mt-2 p-1'>
            <h3 className='secondar-color'>Redskap</h3>
            <div>
              <img src={bootstrap} alt="html" />
              <img className='ms-3' src={mongodb} alt="html" />
              <img className='ms-3' src={postman} alt="html" />
              <img className='ms-3' src={visualstudicode} alt="html" />
              <img className='ms-3' src={visualstudio} alt="html" />
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default PortfolioSwe;
