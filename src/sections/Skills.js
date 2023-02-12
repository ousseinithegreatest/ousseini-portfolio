import React, { useEffect, useState } from "react";
import SkillsData from "../data/Skills"
import '../styles/Skills.css'

export const Skills = () => {
    const [skills, setSkills] = useState([])


    useEffect(() => {
        setSkills(SkillsData)
    }, []);
    return (
        <div className='skills-container'>
            <h2>My skills</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae vero qui iure quidem sit itaque consectetur libero blanditiis nulla earum voluptas quaerat nostrum, aspernatur sapiente impedit ratione quia ducimus enim placeat consequuntur est, eos ut. Cumque, quasi id dolor ut nam fugit dicta cupiditate, deserunt voluptatem facere doloremque ipsam deleniti quos mollitia. Eveniet tenetur debitis ad, alias cupiditate nostrum voluptatibus quas quos perferendis. Provident corporis autem quam odio esse?</p>
            <ul className="items">
                {
                    skills.map((item) => {
                        return (

                            <li key={item.id}><img src={item.img} alt={item.id} /></li>

                        );
                    })
                }
            </ul>
        </div>

    )
}
