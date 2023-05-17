import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PortfolioSwe from './PortfolioSwe'


const Views = () => {
  return (
    <Routes >
      <Route path='/' element={ <PortfolioSwe />} />
    </Routes>
  )
}

export default Views