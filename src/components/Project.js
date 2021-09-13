import React from "react"

export default class Project extends React.Component {
    state = {
        // Project data
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


    render() {
        // const { loading, data } = this.state;
        if (this.state.J === null) {
            return (<div>Still Loading</div>)
        }
        else if(this.state.J.title){
            return (
                <section>
                    {console.log(this.state)}
                    <h1>{this.state.J.title}</h1>
                    <p>Path: {this.path}</p>
                </section>
            )
        }else{
            return(
                <section>Project Not Found</section>
            )
        }

    }
}