import "./Costs.css";
import CostItem from "./CostItem.js";
import Card from "../UI/Card";
import CostsFilter from "../CostFilter/CostsFilter";
import React, { useState } from "react";

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState("2021")

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }


    return (


        <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
            {props.costs.map(cost =>
                <CostItem date={cost.date} name={cost.name} amount={cost.amount} />)}
        </Card>
    );
}
export default Costs;