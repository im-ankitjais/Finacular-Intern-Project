import React from 'react'

const Pallet = ({dataHead,dataTitle,dataAmt,dataUpdate,dataDate,dataImg}) => {
    return(
        <div className="col-12 col-md-6 col-lg-4 text-left shadow p-2 mb-3 bg-white rounded">
            <div className="head d-flex">
                <span className="head_head">{dataHead}</span>
                <span className="text-right"><i class="dropbox icon"></i></span>
            </div>
            <div className="cont">
            <h6 className="head_title">{dataTitle} </h6>
            <div className="d-flex">
                <div className="col-7">
                    <button className="head_btn btn">{dataAmt}</button><br />
                    <span className="head_update">{dataUpdate}</span> 
                    <span className="head_update">{dataDate}</span>
                </div>
                <div className="col-5">
                    <img className="head_img" src={dataImg} alt=""/>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Pallet;