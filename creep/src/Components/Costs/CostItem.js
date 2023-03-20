import './CostItem.css';
import CostDate from "./CostDate.js";
import Card from "../UI/Card";
import React, { useState } from "react";

const CostItem = (props) => {


    const [name, setName] =
        useState(props.name);


    const changeDescriptionHandler = () => {
        setName('New text');
        console.log(name);
    }



    return (
        <li>
        < Card className="cost-item">

            <CostDate date={props.date} />

            <div className="cost-item__descriptiom">
                <div className="cost-item__price">${props.amount}</div>
                <br />
                <h2>{props.name}</h2>
            </div>

            </Card >

        </li>
    );
};
export default CostItem;