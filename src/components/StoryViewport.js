import React from "react"
import './StoryViewport.scoped.css';

// Time formatter
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'


const CL_DONE = 'done';
const CL_PRE = 'pre';
const CL_CURRENT = 'current';

const NODE_IMG = "IMG";
const EVENT_ANIMATION_END = 'animationend';

const INTERVAL_NEXT_PAGE = 3000;
export default class StoryViewport extends React.Component {

    constructor(props) {
        super(props);
        this.state = { currentPage: 0 };

        this.showNextPage = this.showNextPage.bind(this);
        this.setProgressBar = this.setProgressBar.bind(this);

        this.progressBarRef = React.createRef();
        this.pagesRef = React.createRef();
        // Date formatter
        TimeAgo.addLocale(en);
    }


    // componentDidMount() {
    //     const HOLD_STILL = 3000; // 3000ms hold to move onto the next page.
    //     this.pageTimer = setInterval(this.showNextPage, HOLD_STILL)
    // }

    // componentWillUnmount() {
    //     clearInterval(this.pageTimer)
    // }


    /**
     * Show next page. May need to be refactored to gotoPage with parameters.
     * @returns 
     */
    showNextPage() {
        clearTimeout(this.pageTimeout)
        // If it's not active (selected, focused) ignore
        if (!this.props.isActive) {
            this.setProgressBar(0);
            return;
        }

        // If it reaches to the last page, ignore
        if (this.props.project.story.length - 1 <= this.state.currentPage) {
            this.setProgressBar(-1);
            return;
        }

        // Page Prorgression
        this.setState({ currentPage: this.state.currentPage + 1 });

        // Start bar animation
        this.setProgressBar(this.state.currentPage, INTERVAL_NEXT_PAGE);
    
    }


    setProgressBar(index, interval) {
        // index 0 = empty all
        // index -1 = fill all

        let i;

        // collection of bars
        const bars = this.progressBarRef.current;
        // how many bars in this account?
        const len = bars && bars.children ? bars.children.length : 0;
        // console.log("setProgressBar ", index, len);

        // Reference to the contents
        const pages = this.pagesRef.current;
        // current page number
        const currentPage = pages ? pages.children[this.state.currentPage] : null;
        const pageContent = currentPage ? currentPage.querySelector('.content') : null;

        // console.log(pageContent, pageContent.nodeName)


        for (i = len - 1; i >= 0; i -= 1) {
            const wrapper = bars.children[i];
            const bar = wrapper ? wrapper.querySelector('div') : null;
            // console.log(bar.style.width = '100%');

            if (bar) {
                bar.classList = [];
            }

            if (i < this.state.currentPage)
                bar.classList.add(CL_DONE)
            else if (i > this.state.currentPage)
                bar.classList.add(CL_PRE)
            else {
                if (pageContent.nodeName === NODE_IMG) {
                    bar.classList.add(CL_CURRENT)
                    bar.style.animationDuration = `${interval}ms`;
                    bar.addEventListener(EVENT_ANIMATION_END, this.showNextPage)
                }
            }
            // node.children[i].querySelector('div').style.width = 100;
        }


    }



    render() {
        // console.log(this.props.project)
        const FORMAT_IMAGE = 'image';
        const P = this.props.project;
        const S = P.story;
        const KEY_CURRENT = "current";


        if (this.props.isActive) {
            // this.showNextPage();
            this.setProgressBar(1, 3500);
        } else if (this.state.currentPage !== 0) {
            this.setState({ currentPage: 0 })
        }

        // console.log(`rendering ${P.name} `)

        // TimeAgo formatter 
        const timeAgo = new TimeAgo('en-US');
        // Published date in timeago format
        const published = P.published ? timeAgo.format(new Date(P.published), 'mini') : "";

        // page contents
        const pages = this.props.project.story.map((page, i) =>
            <li className={"page" + (i === this.state.currentPage ? " " + KEY_CURRENT : '')} key={i}>

                {/* Static Image */}
                {page.format === FORMAT_IMAGE &&
                    <img src={page.src} alt={page.src} format={page.format} className="scale-to-fit content" />}
            </li>);

        this.pagelist = pages;

        // Page progress bars
        const progress = this.props.project.story.map((page, i) =>
            <li key={i} className={"progress "} ><div></div></li>
        );

        this.progresslist = progress;



        return (
            <div className="StoryViewport">
                <ul className="page-progress" ref={this.progressBarRef}>{progress}</ul>
                <img src={P.cover || ""} alt={P.name} className="story-bg" />
                <img src={P.icon || ""} alt={this.props.project.name} className="icon" />
                <div className="project-header">
                    <span className="project-name">{P.name}</span>
                    <span className="project-age">{published}</span>
                </div>
                <ul className="pages" ref={this.pagesRef}>
                    {pages}
                </ul>
            </div>
        )
    }
}

