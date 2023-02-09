import React from 'react'
import '../styles/Hero.css'
import avatar from '../avatar.png'

export const Hero = () => {
    return (
        <div className='container'>
            <div className='avatar'>
                <img src={avatar} alt="" srcset="" />
            </div>
            <div className='about'>
                <h4>Hi, my name is <span>Ousseini</span> 😊</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nostrum, quos magnam iste recusandae facere porro explicabo cupiditate nobis commodi enim illum obcaecati in deleniti nisi ad vitae? Laudantium, consequuntur voluptatibus facilis quod voluptas ipsam corrupti officia incidunt unde eaque necessitatibus vel! Ab, eligendi quidem officiis vitae dolores mollitia non.</p>
            </div>
        </div>
    )
}
