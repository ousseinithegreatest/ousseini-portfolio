import React, { useEffect, useState } from "react";
import SkillsData from "../data/Skills"
import '../styles/Skills.css'

export const Skills = () => {
    const [frontendSkills, setFrontendSkills] = useState([])
    const [backendSkills, setBackendSkills] = useState([])
    const [languageSkills, setLanguageSkills] = useState([])

    useEffect(() => {
        let frontend = [];
        SkillsData.forEach((skill) => {
            frontend = [...frontend, ...skill.frontend];
        });
        setFrontendSkills(frontend)

        let backend = []
        SkillsData.forEach((skill) => {
            backend = [...backend, ...skill.backend];
        });
        setBackendSkills(backend)

        let languages = []
        SkillsData.forEach((skill) => {
            languages = [...languages, ...skill.languages];
        });
        setLanguageSkills(languages)
    }, []);
    return (
        <div className='skills-container'>
            <h2>My skills</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae vero qui iure quidem sit itaque consectetur libero blanditiis nulla earum voluptas quaerat nostrum, aspernatur sapiente impedit ratione quia ducimus enim placeat consequuntur est, eos ut. Cumque, quasi id dolor ut nam fugit dicta cupiditate, deserunt voluptatem facere doloremque ipsam deleniti quos mollitia. Eveniet tenetur debitis ad, alias cupiditate nostrum voluptatibus quas quos perferendis. Provident corporis autem quam odio esse?</p>
            <h3>Front-end</h3>
            <ul className="items">
                {
                    frontendSkills.map((item) => {
                        return (

                            <li key={item.id}><img src={item.img} alt={item.id} srcSet="ok" /></li>

                        );
                    })
                }
            </ul>
            <h3>Back-end</h3>
            <ul className="items">
                {
                    backendSkills.map((item) => {
                        return (

                            <li key={item.id}><img src={item.img} alt={item.id} srcSet="ok" /></li>

                        );
                    })
                }
            </ul>
            <h3>Languages</h3>
            <ul className="items">
                {
                    languageSkills.map((item) => {
                        return (

                            <li key={item.id}><img src={item.img} alt={item.id} srcSet="ok" /></li>

                        );
                    })
                }
            </ul>

        </div>
    )
}
