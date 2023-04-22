import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Chottabheem = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className='grid py-[50px] grid-cols-2 gap-5 px-[100px]'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kPO5u99IsuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RNeMCP3qD60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/eTVYvG44cNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lt-REfYqHLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/aft_4xudlbI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wdOf8ovJ-FM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <Footer/>
    </div>
  )
}

export default Chottabheem