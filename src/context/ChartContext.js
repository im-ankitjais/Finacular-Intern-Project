import {useState,createContext} from 'react'

export const ChartContext = createContext();


export const ChartProvider = (props) => {

      const getData  = (canvas) => {
      const ctx = canvas.getContext("2d")
      var gradient = ctx.createLinearGradient(0,250,0,0);
      gradient.addColorStop(0, 'rgb(54, 162, 235)');
      gradient.addColorStop(0.4,'#0d53b7');
      gradient.addColorStop(1, '#21209c');
      return {
         color:gradient
      }
   }

      const canvas = document.createElement('canvas');
      const gradient_color = getData(canvas);
      

    const [chartData, setChartData] = useState({
      chartData1:{
         labels: ['1','2','3','4','5','6','7','8','9','10'],
         datasets:[
           {
             label:'Asset Balance (In Lakhs)',
             data:[
               350,
               476,
               344,
               386,
               550,
               450,
               320,
               360,
               508,
               580
             ],
             backgroundColor:gradient_color.color
           }
         ]
       },
       chartData2:{
         labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','18','19','20'],
         datasets:[
           {
             label:'Asset Balance (In Lakhs)',
             data:[
              350,
              196,
              244,
              386,
              550,
              450,
              320,
              360,
              508,
              680,
              546,
               255,
               364,
               276,
               654,
               450,
               320,
               748,
               382,
               294
             ],
             backgroundColor:gradient_color.color
           }
         ]
       },
       chartData3:{
         labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','18','19','20','21','22','23','24','25','26','27','28','29','30'],
         datasets:[
           {
             label:'Asset Balance (In Lakhs)',
             data:[
              350,
              196,
              244,
              386,
              550,
              450,
              320,
              360,
              508,
              680,
              546,
               255,
               364,
               276,
               654,
               450,
               320,
               748,
               382,
               294,
               523,
               543,
               324,
               124,
               532,
               321,
               432,
               233,
               421,
               532
             ],
             backgroundColor:gradient_color.color
           }
         ]
       }
    })


   const inputSet = (...data) => {
    setChartData({
      
      chartData1:{
          labels: ['1','2','3','4','5','6','7','8','9','10'],
          datasets:[
              {
                  label:'Asset Balance (In Lakhs)',
                  data:[
                      data[0],
                      data[1],
                      data[2],
                      data[3],
                      data[4],
                      data[5],
                      data[6],
                      data[7],
                      data[8],
                      data[9]
                  ],
                  backgroundColor:gradient_color.color    
     }
   ]
  },
  chartData2:{
    labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','18','19','20'],
    datasets:[
      {
        label:'Asset Balance (In Lakhs)',
        data:[
          data[0],
                      data[1],
                      data[2],
                      data[3],
                      data[4],
                      data[5],
                      data[6],
                      data[7],
                      data[8],
                      data[9],
          546,
           255,
           364,
           276,
           654,
           450,
           320,
           748,
           382,
           294
         ],
        backgroundColor:gradient_color.color
      }
    ]
  },
  chartData3:{
    labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','18','19','20','21','22','23','24','25','26','27','28','29','30'],
    datasets:[
      {
        label:'Asset Balance (In Lakhs)',
        data:[
          data[0],
                      data[1],
                      data[2],
                      data[3],
                      data[4],
                      data[5],
                      data[6],
                      data[7],
                      data[8],
                      data[9],
          546,
           255,
           364,
           276,
           654,
           450,
           320,
           748,
           382,
           294,
           523,
           543,
           324,
           124,
           532,
           321,
           432,
           233,
           421,
           532
         ],
        backgroundColor:gradient_color.color
      }
    ]
  }          
  })
  
}
    return(
        <ChartContext.Provider value={{chartData, inputSet}}>
            {props.children}
        </ChartContext.Provider>
    )
};