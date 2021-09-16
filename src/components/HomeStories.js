import React from 'react'
import data from './Stories.json';
import './HomeStories.scoped.css'
import { Link } from "react-router-dom"

class Works extends React.Component {

    render() {

        /**
         * Thumbnail
         */
        const projects = data.works.projects.map(project =>
            <li className='project' key={project.path}>
                {/* Render only when {project.path} is provided */}
                {project.path &&
                    <Link to={project.path}>
                        <img src={project.icon} className="icon" key={project.id} />
                        <p className="project-name">{project.name}</p>
                    </Link>}
            </li>
        );

        // console.log(projects)
        return (
            <section className="HomeStories">
                {/* <h4>Works</h4> */}
                <ul className="icons-featured">
                    {projects}
                </ul>
            </section>
        )
    }
}


export default Works