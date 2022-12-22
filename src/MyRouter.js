import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Entire from './Entire'


const MyRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Entire />}></Route>
        </Routes>
    )
}

export default MyRouter