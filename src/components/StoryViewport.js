import React from "react"
import './StoryViewport.css';


export default class StoryViewport extends React.Component{
    render(){
        console.log(this.props.project)

        const P = this.props.project;
        const S = P.story;
        return(
            <div className="StoryViewport">
                <img src={P.cover} alt={P.name} className="story-bg"/>
                <img src={P.icon} alt={this.props.project.name} className="icon"/>
                <ul className="pages">
                    <li className="page current">
                        {/* <img src={S[0].src} alt={S[0].src} format={S[0].format} className="scale-to-fit"/> */}
                        <img src="https://picsum.photos/853/853" alt={S[0].src} format={S[0].format} className="scale-to-fit"/>
                    </li>
                </ul>
            </div>
        )
    }
}