import React from 'react'
import data from './Stories.json';

import './Stories.scoped.css'
import StoryViewport from './StoryViewport';
import { Link } from 'react-router-dom'

export default class Stories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // The Project data
            J: null,

            // Current story index
            current: 3
        }

        this.onNextButtonClick = this.onNextButtonClick.bind(this);
        this.onPrevButtonClick = this.onPrevButtonClick.bind(this);
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
                <section className="Stories desktop">
                    <div className="backdrop"></div>
                    <Link to='/' className="close-stories">⨯</Link>
                    {/* <button className="close-stories" onClick={this.closeStories}>⨯</button> */}
                    {console.log(this.state)}
                    {/* <ul className="story-carousel">
                    </ul> */}
                    <ul className="story-viewports">
                        {this.generateTempStoryList()}
                    </ul>
                    <button className="btn-prev"
                        onClick={this.onPrevButtonClick} >
                        <span className="material-icons">
                            navigate_before
                        </span>
                    </button>
                    <button className="btn-next"
                        onClick={this.onNextButtonClick} >
                        <span className="material-icons">
                            navigate_next
                        </span>
                    </button>
                    <h1>Story: {this.state.J.title}</h1>
                    <p>Path: {this.path}</p>
                    {console.log('can I stll write here?')}
                </section>
            )
        } else {
            return (
                <section>Project Not Found</section>
            )
        }

    }


    /**
     * 
     Make multiple story list for testing
     */
    generateTempStoryList() {
        const len = 10;
        let list = [];
        for (let i = len; i > 0; i -= 1) {
            const index = i - 1;
            const li = <li className={
                "story-wrapper "
                + (this.state.current === index ? "current " : "")
                + (this.state.current - 1 === index ? "l1 " : "")
                + (this.state.current - 2 === index ? "l2 " : "")
                + (this.state.current - 3 === index ? "l3 " : "")
                + (this.state.current + 1 === index ? "r1 " : "")
                + (this.state.current + 2 === index ? "r2 " : "")
                + (this.state.current + 3 === index ? "r3 " : "")
            } index={index}>
                <StoryViewport project={data.works.projects[0]} isActive={this.state.current === index}/>
            </li>;
            // li.index = index;
            list.push(li);
            console.log(li)
        }

        console.log(`this.state.current: ${this.state.current}`)
        // list[current].current.classList.add('current');
        // list[current - 1] && list[current - 1].current.className.add('m1');
        // list[current - 2] && list[current - 2].current.className.add('m2');
        // list[current + 1] && list[current + 1].current.className.add('p1');
        // list[current + 2] && list[current + 2].current.className.add('p2');

        return list;
    }

    onNextButtonClick(e) {
        // console.log(this)
        console.log(`this.state.current: ${this.state.current}`)
        this.setState({ current: this.state.current + 1 })
    }
    onPrevButtonClick(e) {
        // console.log(this)
        this.setState({ current: this.state.current - 1 })
    }
}