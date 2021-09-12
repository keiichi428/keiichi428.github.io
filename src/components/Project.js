import React from "react"

export default class Project extends React.Component {

    render() {
        const path = this.props.path;
        console.log(`projects/${path}.json`);
        fetch(`projects/${path}.json`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data)
            })
        return (
            <section>
                <h1>Project Page</h1>
                <p>Path: {path}</p>
            </section>
        )
    }
}