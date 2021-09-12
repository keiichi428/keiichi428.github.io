import React from 'react'
import data from './Works.json';
import './Works.css'
import { Link } from "react-router-dom"

class Works extends React.Component {


    render() {

        /**
         * Thumbnail
         */
        const projects = data.works.projects.map(project =>
            <li className='project'>
                {/* Render only when {project.path} is provided */}
                {project.path &&
                    <Link to={project.path}>
                        <img src={project.icon} className="icon" key={project.id} />
                    </Link>}
            </li>
        );

        // console.log(projects)
        return (
            <section className="Works">
                {/* <h4>Works</h4> */}
                <ul>
                    {projects}
                </ul>
            </section>
        )
    }
}


export default Works