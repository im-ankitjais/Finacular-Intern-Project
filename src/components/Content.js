import React, { useState, useContext, useEffect} from 'react';
import './Content.css';
import InputForm from './InputForm';
import Pallets from './Pallets';
import {ChartContext} from '../context/ChartContext'
import {Bar} from 'react-chartjs-2';

const Content = () => {
    
    const {chartData} = useContext(ChartContext);
    
    const [data, setData] = useState(chartData.chartData1);

    const [deviceWidth , setDeviceWidth] = useState({
        width:window.innerWidth
    });
    const handleResize = (e) => {
        setDeviceWidth({ width: window.innerWidth });
    };
    console.log(deviceWidth.width);
    const setyr = () => {
        setData(chartData.chartData1);
    }
    useEffect(() => {
        setData(chartData.chartData1);
        window.addEventListener("resize", handleResize);
      },[chartData]);


    return (
        <div className="contain">
        <div className = "chart" >
            <div className="head_chart">
                <h4>Annual Projection</h4>
        <div className="chart_button">
        
                <button 
                    className="chartbutton but_one"
                    onClick={() => setData(chartData.chartData1) } 
                >   
                    10y
                </button>
                <button
                    className="chartbutton but_two but_active"
                    onClick={() => setData(chartData.chartData2) }
                >
                    20y
                </button>
                <button
                    className="chartbutton but_three"
                    onClick={() => setData(chartData.chartData3)}
                >
                    30y
                </button>
            </div>
            </div>
            <Bar
                data={data}
                width={deviceWidth.width>992?60:30}
                height={deviceWidth.width>992?35:20}
                options={{
                    title:{
                    display:false,
                    text:'Annual Projection',
                    fontSize:25
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            },
                            barPercentage: 0.6
                        }],
                        yAxes: [{
                            gridLines: {
                                color: "#f2f2f2",
                            }   
                        }]
                    },
                    legend:{
                    display:true,
                    position:'bottom'
                    }
                }}
                />
                </div>
            <Pallets />

            <InputForm setyr={setyr} />
            
      
      </div>
    )
}
export default Content;
