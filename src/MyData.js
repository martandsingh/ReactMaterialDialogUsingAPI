import React from 'react'
import SimpleDialogDemo from './CustomDialog'
import PositionedSnackbar from './SnackBar'
var body = '123';
export class MyData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }

    handleListItemClick = (player) => {
        this.setState({
            player,
            open: true
        })
    }

    render(){
        return(
            <div>
                <SimpleDialogDemo handleListItemClick={this.handleListItemClick}/>
                <PositionedSnackbar open = {this.state.open} vertical = {this.state.vertical} horizontal = {this.state.horizontal}/>
            </div>
        );
    }
} 

export default MyData;