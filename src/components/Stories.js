import React from 'react'
import data from './Stories.json';

import './Stories.css'
import StoryViewport from './StoryViewport';
import { Link } from 'react-router-dom'

export default class Stories extends React.Component {
    state = {
        // The Project data
        J: null
    }


    componentDidMount() {
        this.path = this.props.path;
        this.fetchProjectData();
    }

    /**
     * Project specific json file.
     * ./projects/<path-name>.json
     */
    fetchProjectData() {
        // console.log(`projects/${this.path}.json`);
        fetch(`projects/${this.path}.json`)
            .then(res => {
                return res.json();
            })
            .then(json => {
                this.setState({ J: json });
            })
    }

    /**
     * Close Stories page. 
     * 
     * !! For now, it just go back to the home page
     */
    closeStories() {
        // console.log('close!')
       window.location.pathname = '/'
    }

    render() {
        // const { loading, data } = this.state;
        if (this.state.J === null) {
            return (<div>Still Loading</div>)
        }
        else if (this.state.J.title) {
            return (
                <section className="Stories">
                    <div className="backdrop"></div>
                    <Link to='/' className="close-stories">⨯</Link>
                    {/* <button className="close-stories" onClick={this.closeStories}>⨯</button> */}
                    {console.log(this.state)}
                    {/* <ul className="story-carousel">
                    </ul> */}
                    <ul className="story-viewports">
                        <li className=" current">
                            <StoryViewport project={data.works.projects[0]} />
                        </li>
                    </ul>
                    <h1>Story: {this.state.J.title}</h1>
                    <p>Path: {this.path}</p>
                </section>
            )
        } else {
            return (
                <section>Project Not Found</section>
            )
        }

    }
}