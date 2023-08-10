import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PortfolioSwe from './PortfolioSwe'
import Portfolioeng from './Portfolioeng'


const Views = () => {
  return (
    <Routes >
      <Route path='/' element={ <PortfolioSwe />} />
      <Route path='/english/' element={ <Portfolioeng />} />
    </Routes>
  )
}

export default Views