import React from 'react';

const Skills = () => {
    return (
        <section className = "skills section" id="skills">
            <h2 className='skill_title'>Skills</h2>
            <div className='HardSkill'>
                <h4>Hard Skills</h4>
                <ul>
                    <li><strong>Advanced:</strong> HTML, CSS, Java, React, Python</li>
                    <li><strong>Intermediate:</strong> JavaScript, SQL, Node.js, C#</li>
                    <li><strong>Basic:</strong> PHP, MySQL, Git</li>
                </ul>
            </div>
            <div className='SoftSkill'>
                <h4>Soft Skills</h4>
                <ul>
                    <li>Time management</li>
                    <li>Creativity</li>
                    <li>Teamwork</li>
                    <li>Pitching</li>
                    <li>Adaptability</li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;
