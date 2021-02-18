import React from 'react'
<<<<<<< HEAD
import Categories from '../components/Categories'
=======
import { Box } from '../components/Box'
>>>>>>> 6f407d6f13b7fe0fe605384f6aff9432deb4e9bf
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
                        <Categories/>

            <Hero hero={HeroImg}/>
<<<<<<< HEAD
=======
            <DialogBox/>
            <Box categories={categories}/>
>>>>>>> 6f407d6f13b7fe0fe605384f6aff9432deb4e9bf
        </div>
    )
}

export default Home
