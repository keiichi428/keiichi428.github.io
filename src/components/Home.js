import React from "react"
import Works from './Works'

export default class Home extends React.Component {

    render() {
        return (
            <section className="home">
                {/* <h1>Home</h1> */}
                <Works />
            </section>
        )
    }
}