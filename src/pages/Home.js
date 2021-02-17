import React from 'react'
import { Box } from '../components/Box'
import DialogBox from '../components/DialogBox'
import Hero from '../components/Hero'
import HeroImg from '../images/Online shopping-pana.png'
import men from '../images/men.jpeg'
import women from '../images/women.jpeg'
import jewel from '../images/jewel.jpeg'

function Home() {
    const categories = [
        {
            title : "MEN'S WEAR",
            text : 'Shop for winter fabrics and beautiful prints that can be tailored as per your style.',
            image : men
        },
        {
            title : "JEWELRY",
            text : 'Shop for winter fabrics and beautiful prints that can be tailored as per your style.',
            image : jewel
        },
        {
            title : "WOMEN'S WEAR",
            text : 'Shop for winter fabrics and beautiful prints that can be tailored as per your style.',
            image : women
        },
    ]
    return (
        <div>
            <Hero hero={HeroImg}/>
            <DialogBox/>
            <Box categories={categories}/>
        </div>
    )
}

export default Home
