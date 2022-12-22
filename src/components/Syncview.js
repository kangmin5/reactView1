import React from 'react'
import Iframe from 'react-iframe'

const Syncview = () => {
  return (
    <Iframe url='http://127.0.0.1:5501/syncView_klac.html' className="w-full h-full  block relative" id="myId"   ></Iframe>
  )
}

export default Syncview
