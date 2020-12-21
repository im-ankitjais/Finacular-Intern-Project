import React from 'react'
import Pallet from './Pallet'
import './Pallet.css'
import icon5 from "../assets/bank.svg"
import icon2 from "../assets/line-graph.svg"
import icon3 from "../assets/dollar.svg"
import icon1 from "../assets/expenses.svg"
import icon4 from "../assets/bill.svg"

const Pallets = () =>{
    return(
        <div className="d-lg-flex pallet">
            <Pallet
            dataHead='Asset Balance'
            dataTitle='Enter Amount:'
            dataAmt='₹ 1,25,000'
            dataUpdate='Last Updated: '
            dataDate='3 Dec'
            dataImg={icon1}
             />
             <Pallet
            dataHead='Growth Rate'
            dataTitle='Enter Growth Rate:'
            dataAmt='9.3%'
            dataUpdate='Inflation: '
            dataDate='6%'
            dataImg={icon2}
             />
             <Pallet
            dataHead='Major Investments'
            dataTitle='Returns generated / Month:'
            dataAmt='₹ 1,25,000'
            dataUpdate='Last Updated: '
            dataDate='3 Dec'
            dataImg={icon3}
             />
             <Pallet
            dataHead='Finincial Independence'
            dataTitle='Age:'
            dataAmt='45 Years'
            dataUpdate='Optimized:'
            dataDate='Yes/No'
            dataImg={icon4}
             />
             <Pallet
            dataHead='Average Expenses'
            dataTitle='Amount:'
            dataAmt='₹ 4,000'
            dataUpdate='3 months average: '
            dataDate='6%'
            dataImg={icon5}
             />
        </div>
    )
}
export default Pallets;