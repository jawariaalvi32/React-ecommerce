import React from 'react'
import DialogBox from '../components/DialogBox'
import Hero from '../components/Hero'
import HeroImg from '../images/Online shopping-pana.png'
function Home() {
    return (
        <div>
            <Hero hero={HeroImg}/>
            <DialogBox/>
        </div>
    )
}

export default Home
