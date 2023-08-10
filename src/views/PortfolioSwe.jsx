import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Custom.css'
import favicon from '../img/favicon.png'
import english from '../img/flageng.png'
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
import dentist from '../img/dentist.png'
import game from '../img/game.png'


export const PortfolioSwe = () => {
  return (
    <div>

      <nav className='p-1 d-flex justify-content-between'>
       <Link to="/"><img className='logo' src= {favicon} alt='logo'></img></Link>

       <div className='d-flex align-items-center'>

        <ul className='d-flex nav-computer nav-list align-items-center'>
          <li className='p-2 nav-item'><a href='/#techstack' className='text-light'>Kunskaper</a></li>
          <li className='p-2 nav-item'><a href='/#portfolio' className='text-light'>Projekts</a></li>
          <li className='p-2 nav-item'><a href='/#footer' className='text-light'>Kontakta Mig</a></li>
          <Link to="/english/"><img className='lang p-2 nav-item' src= {english} alt='logo'></img></Link>
        </ul>

       </div>

      </nav>

      <nav className='p-1 d-flex flex-row nav-mobile justify-content-between'>
        
        <div className='w-25'>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <li className='p-2 nav-item'><a href='/#techstack' className='text-light'>Kunskaper</a></li>
            <li className='p-2 nav-item'><a href='/#portfolio' className='text-light'>Projekts</a></li>
            <li className='p-2 nav-item'><a href='/#footer' className='text-light'>Kontakta Mig</a></li>
          </div>
        </div>
    
        </div>

        <div className='w-25 d-flex align-items-top'>
          <Link to="/english/"><img className='lang p-2 nav-item' src= {english} alt='logo'></img></Link>
          <Link to="/"><img className='logo-mobile' src= {favicon} alt='logo'></img></Link>
        </div>
      </nav>


      <div className='header'>

        <div className='header-info align-items-center d-flex'>
          <div className='header-left'>
            <h1 className='text-light header-title'>Frontend och System Utvecklare</h1>
            <p className='text-light header-text'>Hej jag heter Casper och är utbildad frontend utvecklare. Jag jobbar som systemutvecklare på Black AA AB i Västerås.</p>
            
            <div className='d-flex pt-2'>
              <Link to='https://www.linkedin.com/in/casper-bjarnetoft/' target='_blank' ><i className="pe-2 fa-brands fa-linkedin fa-2xl text-light"></i></Link>
              <Link to='https://github.com/CasperBjarnetoft' target='_blank' ><i className="ps-2 fa-brands fa-github fa-2xl text-light"></i></Link>
            </div>
          </div>

          <div className='header-right'>
            <div className='ball-1'></div>
            <div className='ball-2'></div>
            <div className='ball-3'></div>
          </div>
        </div>

        <div className='header-about about d-flex'>
          <img className='aboutme-img' src={aboutme} alt="" />

          <div className='ms-4 about-text text-light'>
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

      <div id='portfolio' className='mt-5 mb-5 p-1'>
        <h1 className='text-light mb-5 mt-4 text-center'>Portfolio</h1>
        <div className='portfolio-item d-flex justify-content-center'>
          <img className='projectimg' src={dentist} alt="" />
          <div className='text-light p-1 ms-3 w-35'>
            <h3>Landningssida</h3>
            <p>Projekt från skola där jag har byggt en simpel och snygg landningssida för ett företag eller frilansare. Som är responsiv.</p>
            <div className='d-flex text-center'>
              <h5>HTML</h5>
              <h5 className='ms-4'>CSS</h5>
            </div>
            <div className='mt-4'>
              <Link to='https://github.com/CasperBjarnetoft/html-css-inlupp1' target='_blank'><button className='mt-2 btn bg-secondar-color text-light'><i className="fa-brands fa-github fa-lg text-light me-2"></i>Kod</button></Link>
              <Link to='https://casperbjarnetoft.github.io/html-css-inlupp1/' target='_blank'><button className='mt-2 ms-2 btn bg-secondar-color text-light'><i class="fa-solid fa-up-right-from-square fa-sm me-2"></i>Demo</button></Link>
            </div>
          </div>
        </div>

        <div className='portfolio-item d-flex mt-5 justify-content-center'>
          <img className='projectimg small-display' src={game} alt="" /> 
          <div className='text-light p-1 ms-3 w-35'>
            <div>
              <h3>Sten Sax Påse</h3>
              <p>Har byggt spelet sten sax påse med poängen och oändligt med rundor. Som har en simpel och responsiv design.</p>
              <div className='d-flex text-center'>
                <h5>HTML</h5>
                <h5 className='ms-4'>CSS</h5>
                <h5 className='ms-4'>Javascript</h5>
                <h5 className='ms-4'>Bootstrap</h5>
              </div>
              <div className='mt-4'>
                <Link to='https://github.com/CasperBjarnetoft/onlinegame' target='_blank'><button className='mt-2 btn bg-secondar-color text-light'><i className="fa-brands fa-github fa-lg text-light me-2"></i>Kod</button></Link>
                <Link to='https://casperbjarnetoft.github.io/onlinegame/' target='_blank'><button className='mt-2 ms-2 btn bg-secondar-color text-light'><i class="fa-solid fa-up-right-from-square fa-sm me-2"></i>Demo</button></Link>
              </div>
            </div>
          </div>
          <img className='projectimg big-display' src={game} alt="" />
        </div>

      </div>

      <div id='footer' className='footer mt-4 mb-5'>
        <h1 className='text-light mt-4'>Kontakta Mig</h1>
        
        <div className='d-flex'>
          <div className='w-50 text-light'>
            <p>Om jag låter som en intressant utvecklare som ni vill anställa eller bolla idéer med? Så hör av er!!!</p>
            <p>Email: casper.ason@hotmail.se</p>

            <div className='d-flex pt-2'>
                <Link to='https://www.linkedin.com/in/casper-bjarnetoft/' target='_blank' ><i className="pe-2 fa-brands fa-linkedin fa-2xl text-light"></i></Link>
                <Link to='https://github.com/CasperBjarnetoft' target='_blank' ><i className="ps-2 fa-brands fa-github fa-2xl text-light"></i></Link>
            </div>
          </div>

          <div className='w-50 text-center me'>
            <h1 className='text-light'>Casper Bjarnetoft</h1>
            <h5 className='secondar-color'>Frontend och system utvecklare</h5>

          </div>
        </div>

      </div>
    </div>
  )
}

export default PortfolioSwe;
