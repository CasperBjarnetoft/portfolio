import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Custom.css'
import favicon from '../img/favicon.png'
import swedish from '../img/svenska.png'
import aboutme from '../img/ommig.jpg'

export const PortfolioSwe = () => {
  return (
    <div>

      <nav className='p-1 d-flex justify-content-between'>
       <Link to="/"><img className='logo' src= {favicon} alt='logo'></img></Link>

       <div className='d-flex align-items-center'>

        <ul className='d-flex nav-list align-items-center'>
          <li className='p-2 nav-item'><Link className='text-light'>Om mig</Link></li>
          <li className='p-2 nav-item'><Link className='text-light'>Projekts</Link></li>
          <li className='p-2 nav-item'><Link className='text-light'>Kontakta Mig</Link></li>
          <Link to="/"><img className='lang p-2' src= {swedish} alt='logo'></img></Link>
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


    </div>
  )
}

export default PortfolioSwe;
