import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "../CostFilter/CostsFilter";
import React, { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostDiagram.js"

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState("2020")

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredCosts = props.costs.filter((cost) => {
        return cost.date.getFullYear().toString() === selectedYear;
    })


    return (
        <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />

            <CostsDiagram costs={filteredCosts} />

            <CostList costs={filteredCosts }></CostList>
        </Card>)
}
export default Costs;