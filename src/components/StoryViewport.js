import React from "react"
import './StoryViewport.scoped.css';


export default class StoryViewport extends React.Component {
    render() {
        // console.log(this.props.project)

        const P = this.props.project;
        const S = P.story;
        console.log(this.props.isActive);
        return (
            <div className="StoryViewport">
                <img src={P.cover} alt={P.name} className="story-bg" />
                <img src={P.icon} alt={this.props.project.name} className="icon" />
                {/* <img src={"https://picsum.photos/256/?" + Date.now()} alt={P.name} className="icon" /> */}
                <div className="project-header">
                    <span className="project-name">{P.name}</span>
                    <span className="project-age">4w</span>
                </div>
                <ul className="pages">
                    <li className="page current">
                        <img src={S[0].src} alt={S[0].src} format={S[0].format} className="scale-to-fit"/>
                        {/* <img src={"https://picsum.photos/300/250?"} alt={S[0].src} format={S[0].format} className="scale-to-fit" /> */}
                    </li>
                </ul>
            </div>
        )
    }
}