import React, {Component} from "react";
import './Suits.css';
class Suits extends Component{

    render (props){
    let StartCount= this.props.StartCount;
    let IdealCount= this.props.IdealCount;
    let difference= props.IdealCount - props.StartCount;
    return (
        <div className="Suits">
        <h2> Suits</h2>
        <div>
            <h3>StartCount: {StartCount}</h3>
        </div>
        <div>
            <h3>IdealCount:{IdealCount}</h3></div>
            <div> 
                <h3>difference:{difference}</h3>
            </div>

    </div>

    )
}
}export default Suits;
