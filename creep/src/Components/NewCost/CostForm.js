import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
    const [inputName, SetInputName] = useState('');
    const [inputSum, SetInputSum] = useState('');
    const [inputDate, SetInputDate] = useState('');



    const nameChangeHandler = (event) => {

        SetInputName(event.target.value);

    }

    const sumChangeHandler = (event) => {
        SetInputSum(event.target.value);

    }

    const dateChangeHandler = (event) => {
    SetInputDate(event.target.value);

    }

    const submitHandler = (event) => {
        event.preventDefault();
        const costData = {
            name: inputName,
            amount: inputSum,
            date: new Date(inputDate)
        }
        props.onSaveCostData(costData);
        SetInputDate('');
        SetInputSum('');
        SetInputName('');
    };




    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__controls">
                    <label>Название</label>

                    <input type='text'
                        value={inputName}
                        onChange={nameChangeHandler}
                    />
                </div>
                <div className="new-cost__controls">
                    <label>Сумма</label>
                    <input type='number' min='0.01' step='0.01'
                        value={inputSum}
                        onChange={sumChangeHandler}

                    />
                </div>
                <div className="new-cost__controls">
                    <label>Дата</label>
                    <input value={inputDate}
                        type='date' min='2019' step='0.01'
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className="new-cost__actions">
                    <button type="submit">New sales</button>
                    <button type="button" onClick={props.onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </form>
        )
}
export default CostForm;