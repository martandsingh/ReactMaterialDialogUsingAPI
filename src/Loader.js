import React from 'react'

export class Loader extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show : false
        }
    }
    render(){
        return(
            <div>
                <img src='200_d.gif' style = {{display : this.props.show}}/>
            </div>
        );
    }
}

export default Loader;