import {useState,createContext} from 'react'

export const ChartContext = createContext();

export const ChartProvider = (props) => {
    const [chartData, setChartData] = useState({
      data1 : [
        {
           Noofyears : 1,  amt: 100,
        },
        {
           Noofyears : 2, amt: 175,
        },
        {
           Noofyears : 3, amt: 130,
        },
        {
           Noofyears : 4, amt: 375,
        },
        {
           Noofyears : 5, amt: 500,
        },
        {
           Noofyears : 6, amt: 575,
        },
        {
           Noofyears : 7, amt: 650,
        },
        {
            Noofyears : 8, amt: 775,
        },
        {
             Noofyears : 9, amt: 440,
        },
        {
            Noofyears : 10, amt: 950,
        }
      ],

      data2 : [
        {
            Noofyears : 1,  amt: 550,
         },
         {
            Noofyears : 2, amt: 890,
         },
         {
            Noofyears : 3, amt: 456,
         },
         {
            Noofyears : 4, amt: 780,
         },
         {
            Noofyears : 5, amt: 500,
         },
         {
            Noofyears : 6, amt: 575,
         },
         {
            Noofyears : 7, amt: 650,
         },
         {
             Noofyears : 8, amt: 775,
         },
         {
              Noofyears : 9, amt: 850,
         },
         {
             Noofyears : 10, amt: 950,
         },
        {
           Noofyears : 11,  amt: 300,
        },
        {
           Noofyears : 12, amt: 400,
        },
        {
           Noofyears : 13, amt: 600,
        },
        {
           Noofyears : 14, amt: 780,
        },
        {
           Noofyears : 15, amt: 490,
        },
        {
           Noofyears : 16, amt: 900,
        },
        {
           Noofyears : 17, amt: 650,
        },
        {
             Noofyears : 18, amt: 775,
        },
        {
             Noofyears : 19, amt: 850,
        },
        {
             Noofyears : 20, amt: 950,
        }
      ],

      data3 : [
        {
            Noofyears : 1,  amt: 670,
         },
         {
            Noofyears : 2, amt: 470,
         },
         {
            Noofyears : 3, amt: 670,
         },
         {
            Noofyears : 4, amt: 678,
         },
         {
            Noofyears : 5, amt: 800,
         },
         {
            Noofyears : 6, amt: 350,
         },
         {
            Noofyears : 7, amt: 440,
         },
         {
             Noofyears : 8, amt: 200,
         },
         {
              Noofyears : 9, amt: 850,
         },
         {
             Noofyears : 10, amt: 950,
         },
        {
           Noofyears : 11,  amt: 600,
        },
        {
           Noofyears : 12, amt: 700,
        },
        {
           Noofyears : 13, amt: 450,
        },
        {
           Noofyears : 14, amt: 375,
        },
        {
           Noofyears : 15, amt: 500,
        },
        {
           Noofyears : 16, amt: 575,
        },
        {
           Noofyears : 17, amt: 650,
        },
        {
             Noofyears : 18, amt: 775,
        },
        {
             Noofyears : 19, amt: 850,
        },
        {
             Noofyears : 20, amt: 950,
        },
        {
           Noofyears : 21,  amt: 700,
        },
        {
           Noofyears : 22, amt: 900,
        },
        {
           Noofyears : 23, amt: 600,
        },
        {
           Noofyears : 24, amt: 580,
        },
        {
           Noofyears : 25, amt: 500,
        },
        {
           Noofyears : 26, amt: 575,
        },
        {
           Noofyears : 27, amt: 650,
        },
        {
             Noofyears : 28, amt: 775,
        },
        {
             Noofyears : 29, amt: 400,
        },
        {
             Noofyears : 30, amt: 790,
        }
      ]
    })

  
    return(
        <ChartContext.Provider value={{chartData, setChartData}}>
            {props.children}
        </ChartContext.Provider>
    )
};