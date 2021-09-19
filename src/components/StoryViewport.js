import React from "react"
import './StoryViewport.scoped.css';

// Time formatter
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'


export default class StoryViewport extends React.Component {
    constructor(props) {
        super(props)
        // Date formatter
        TimeAgo.addLocale(en);
    }



    render() {
        // console.log(this.props.project)
        const FORMAT_IMAGE = 'image';
        const P = this.props.project;
        const S = P.story;
        // Not sure if I'm going to use this, but this is prop for the selection state.
        let isActive = this.props.isActive

        const timeAgo = new TimeAgo('en-US');
        const published = P.published ? timeAgo.format(new Date(P.published), 'mini') : "";



        // contents
        const pages = this.props.project.story.map((page, i) =>
            <li className="page" key={i}>

                {/* Static Image */}
                {page.format === FORMAT_IMAGE &&
                    <img src={page.src} alt={page.src} format={page.format} className="scale-to-fit" />}
            </li>);

        // Page progress
        const progress = this.props.project.story.map((page, i) =>
                    <li key={i}></li>
        );

        return (
            <div className="StoryViewport">
                <ul className="page-progress">{progress}</ul>
                <img src={P.cover || ""} alt={P.name} className="story-bg" />
                <img src={P.icon || ""} alt={this.props.project.name} className="icon" />
                <div className="project-header">
                    <span className="project-name">{P.name}</span>
                    <span className="project-age">{published}</span>
                </div>
                <ul className="pages">
                    {pages}
                </ul>
            </div>
        )
    }
}

