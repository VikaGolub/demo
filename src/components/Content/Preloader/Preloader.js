import React from "react";
import loading from "../../../images/loading.gif";
import './preloader.css'

const Preloader = (props) => {
    return (
        <div className='preloader'>
            <img src={loading}/>
        </div>
    )
}

export default Preloader;
