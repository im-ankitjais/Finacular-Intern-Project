import React, { useState, useContext } from 'react';
import './InputForm.css';
import {ChartContext} from '../context/ChartContext'

const InputForm = ({setData}) => {

    const {chartData,setChartData} = useContext(ChartContext);


    const [inputData2, setInputData2] = useState(0);
    const [inputData1, setInputData1] = useState(0);
    const [inputData3, setInputData3] = useState(0);
    const [inputData4, setInputData4] = useState(0);
    const [inputData5, setInputData5] = useState(0);
    const [inputData6, setInputData6] = useState(0);
    const [inputData7, setInputData7] = useState(0);
    const [inputData8, setInputData8] = useState(0);
    const [inputData9, setInputData9] = useState(0);
    const [inputData10, setInputData10] = useState(0);

    const onFormSubmit =(e)=>{
        e.preventDefault();
        setChartData(prevState =>({
            data2:[
                ...prevState.data2
            ],
            data3:[
                ...prevState.data3
            ],
            data1:[
                {
                    Noofyears : 1,  amt: inputData1,
                 },
                 {
                    Noofyears : 2, amt: inputData2,
                 },
                 {
                    Noofyears : 3, amt: inputData3,
                 },
                 {
                    Noofyears : 4, amt: inputData4,
                 },
                 {
                    Noofyears : 5, amt: inputData5,
                 },
                 {
                    Noofyears : 6, amt: inputData6,
                 },
                 {
                    Noofyears : 7, amt: inputData7,
                 },
                 {
                     Noofyears : 8, amt: inputData8,
                 },
                 {
                      Noofyears : 9, amt: inputData9,
                 },
                 {
                     Noofyears : 10, amt: inputData10,
                 }
            ]   
                  
        })
        )
        setData();
        console.log(chartData.data1);
    }

    
    return (
        <div onSubmit={onFormSubmit} className="input-form ">
            <div className="ui placeholder segment">
                
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