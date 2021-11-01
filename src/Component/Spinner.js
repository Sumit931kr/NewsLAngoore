import React  from "react";
import loading from '../image/ajax-loader.gif'

const Spinner = ()=> {
           return (
            <div className="text-center ">
                <img className="my-3" src={loading} alt="loading" />
            </div>
        )
    
}
export default Spinner