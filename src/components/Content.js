import React, { useState, useContext, useEffect} from 'react';
import './Content.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import InputForm from './InputForm';
import Pallets from './Pallets';
import {ChartContext} from '../context/ChartContext'

const Content = () => {
    
    const {chartData} = useContext(ChartContext);
    const [data, setData] = useState(chartData.data1);

    const [deviceWidth , setDeviceWidth] = useState({
        width:window.innerWidth
    });
    const handleResize = (e) => {
        setDeviceWidth({ width: window.innerWidth });
    };
    console.log(deviceWidth.width);
    const setyr = () => {
        setData(chartData.data1);
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize);
      });
    return (
        <div className = "chart" >
        <div className="chart_button">
                <button 
                    className="chartbutton"
                    onClick={() => setData(chartData.data1) } 
                >   
                    10y
                </button>
                <button
                    className="chartbutton"
                    onClick={() => setData(chartData.data2) }
                >
                    20y
                </button>
                <button
                    className="chartbutton"
                    onClick={() => setData(chartData.data3)}
                >
                    30y
                </button>
            </div>
            <BarChart
                    width={deviceWidth.width>992? 700: 300}
                    height={300}
                    data={data}
                    className="barchart"
                    
            >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="Noofyears"/>
                <YAxis dataKey="amt" />
                <Tooltip />
                <Legend />
                
                <Bar dataKey="amt" fill="rgba(0, 0, 128,0.8)" />
            </BarChart>
                
            <InputForm setData={setyr} />
            <Pallets />
            
      </div>
    )
}
export default Content;
