import React from "react";
import resume from "../../Assets/resume/CV_Eng.pdf";

const Resume = () => {
    return (
        <div class="card text-center bg-dark text-white">
            <div class="card-header">
                <h1>&#128195; RESUME &#128220;</h1>
            </div>
            <div class="card-body">
                <h4 class="card-title">Aptitudes</h4>
                <p class="card-text">
                    I studied civil engineering at Instituto Politécnico Nacional in Mexico City. 
                    <br />
                    Knowledgeable in structure design area, Computer-Aided Designd (AutoCAD 2D & 3D) and Earthquake engineering.
                    <br />
                    <br />
                    Currently i'm learning Full-Stack Web Development, specialized in JavaScript, HTML, CSS, APIs (web,third-party and server-side), OOP, NodeJS, ExpressJS, SQL, ORM, NoSQL, MERN and React.
                    <br />
                    Studying at Tecnológico de Monterrey <strong>CODING BOOTCAMP</strong>
                </p>
            </div>
            <div class="card-footer text-white d-grid gap-2 col-6 mx-auto">
                <h6>If you want more details, click the button below to download my <strong>RESUME</strong></h6>
                <a href={resume} class="btn btn-primary" download="CV_Eng.pdf">Download Resume</a>
            </div>
        </div>
    )
}

export default Resume