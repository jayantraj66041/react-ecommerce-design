import React, {useState} from 'react';

const Card = (props) => {
    const [count, setCount] = useState(0);
    return(
        <div className="card">
            <div className="card-header">{props.title}</div>
            <div className="card-body text-center">
                <h3>{props.name}</h3>
                <p className="small text-muted">{props.price}</p>
                {/* <button type="button" onClick={()=>alert(props.name)} className="btn btn-success">Buy Now</button> */}
                <button type="button" onClick={count==0?()=>setCount(count):()=>setCount(count-1)} className="btn btn-outline-danger btn-sm">-</button>
                <span className="text-muted p-1">
                    {count}
                </span>
                <button type="button" onClick={()=>setCount(count+1)} className="btn btn-outline-success btn-sm">+</button>
            </div>
        </div>
    )
}
export default Card;