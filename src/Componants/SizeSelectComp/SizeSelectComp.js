import React from 'react';
import './SizeSelectComp.css'

class SizeSelectComp extends React.Component{
    //console.log('rating===>',props.ratingStar)
    constructor(props){
        super(props);
        this.state={
            selectedVal:'S'
        }
    }
    handlechange=(e)=>{
        this.setState({selectedVal:e.target.value});
        if(this.props.selectSize)
        {
            this.props.selectSize(e.target.value);
        }
    }
    componentDidMount(){
       // console.log('compo did mount in size select====>',this.props.selectedCartSize)
        if(this.props.selectedCartSize)
        {
            this.setState({selectedVal:this.props.selectedCartSize});
        }
    }
    render(){
        console.log('value changed...!!!',this.state.selectedVal)
    return(
        <div>
            <b>Size:</b> 
            <select
            value={this.state.selectedVal}
            onChange={this.handlechange}
            >
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
                <option value='XL'>XL</option>
            </select>
        </div>
    )
    }
}

export default SizeSelectComp;