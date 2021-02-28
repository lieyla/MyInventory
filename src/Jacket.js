import './Jacket.css';
function Jacket(props){

    let StartCount= props.StartCount;
    let IdealCount= props.IdealCount;
    let difference= props.IdealCount - props.StartCount;
    return(

        <div className="Jacket">
            <h2> Jacket</h2>
            <div>
                <h3>StartCount: {StartCount}</h3>
            </div>
            <div>
                <h3>IdealCount:{IdealCount}</h3></div>
                <div> 
                    <h3>{difference}</h3>
                </div>

        </div>
    )

}
export default Jacket;
   