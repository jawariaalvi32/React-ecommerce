import React from 'react'
import Categories from '../components/Categories'
import DialogBox from '../components/DialogBox'
import Hero from '../components/Hero'
import HeroImg from '../images/Online shopping-pana.png'
function Home() {
    return (
        <div>
                        <Categories/>

            <Hero hero={HeroImg}/>
        </div>
    )
}

export default Home
