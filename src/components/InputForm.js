import React, { useState, useContext } from 'react';
import './InputForm.css';
import {ChartContext} from '../context/ChartContext'

const InputForm = ({setyr}) => {

    const {chartData,inputSet} = useContext(ChartContext);


    const [inputData2, setInputData2] = useState();
    const [inputData1, setInputData1] = useState();
    const [inputData3, setInputData3] = useState();
    const [inputData4, setInputData4] = useState();
    const [inputData5, setInputData5] = useState();
    const [inputData6, setInputData6] = useState();
    const [inputData7, setInputData7] = useState();
    const [inputData8, setInputData8] = useState();
    const [inputData9, setInputData9] = useState();
    const [inputData10, setInputData10] = useState();

    const onFormSubmit =(e)=>{
        e.preventDefault();
        inputSet(
                    inputData1,
                    inputData2,
                    inputData3,
                    inputData4,
                    inputData5,
                    inputData6,
                    inputData7,
                    inputData8,
                    inputData9,
                    inputData10,
        )
        setyr();
        console.log(chartData.chartData1);
    }

    
    return (
        <div onSubmit={onFormSubmit} className="input-form">
            <div className="ui placeholder segment shadow p-2 mb-3 bg-white rounded">
                
                <h2 className="ui header he"><i class="plus square outline icon"></i>Enter 10yrs amount to render the chart:</h2>
            
                    <form className="input-form-10 hei">

                        <div className="ui form">
                            <div className="fields">
                                <div className="seven wide field">
                                    <input type="text" value={inputData1} onChange={(e)=>{setInputData1(parseFloat(e.target.value))}} required placeholder="--- " />
                                </div>
                                <div className="seven wide field">
                                    <input type="text" value={inputData2} onChange={(e)=>{setInputData2(parseFloat(e.target.value))}} required placeholder="--- " />
                                </div>

                                <div className="seven wide field">
                                    <input type="text" value={inputData3} onChange={(e)=>{setInputData3(parseFloat(e.target.value))}} required placeholder="--- " />
                                </div>
                                <div className="seven wide field">
                                    <input type="text" value={inputData4} onChange={(e)=>{setInputData4(parseFloat(e.target.value))}} required placeholder="--- " />
                                </div>
                                
                           


                           
                                <div className="seven wide field">
                                    <input type="text" value={inputData5} onChange={(e)=>{setInputData5(parseFloat(e.target.value))}} required placeholder="--- " />
                                </div>
                                <div className="seven wide field">
                                    <input type="text" value={inputData6} onChange={(e)=>{setInputData6(parseFloat(e.target.value))}} required placeholder="--- " />
                                </div>
                                
                            
                            
                            
                            
                                <div className="seven wide field">
                                    <input type="text" value={inputData7} onChange={(e)=>{setInputData7(parseFloat(e.target.value))}} required placeholder="--- " />
                                </div>
                                <div className="seven wide field">
                                    <input type="text" value={inputData8} onChange={(e)=>{setInputData8(parseFloat(e.target.value))}} required placeholder="--- " />
                                </div>
                                
                           

                            
                          
                                <div className="seven wide field">
                                    <input type="text" value={inputData9} onChange={(e)=>{setInputData9(parseFloat(e.target.value))}} required placeholder="--- " />
                                </div>
                                <div className="seven wide field">
                                    <input type="text" value={inputData10} onChange={(e)=>{setInputData10(parseFloat(e.target.value))}} required placeholder="--- " />
                                </div>
                                
                            </div>
                            <div className="center-button">
                                <button className="positive ui button button-right-pad but" type="submit">Submit</button>
                            </div>
                            
                        </div>
                    </form>
            </div>
        </div>
    );
}
 
export default InputForm;