import CostForm from './CostForm';
import React, { useState } from "react";
import './NewCost.css';
const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costData);
        setIsFormVisible(false);
    };

    const inputCostDataHandler = () => {
        setIsFormVisible(true);
    };

    const cancelCostHandler = () => {
        setIsFormVisible(false);
    };
    

    return (
        <div className='new-cost'>
            {!isFormVisible && (
                <button onClick={inputCostDataHandler }>New sales</button>
            )}
            {isFormVisible && (
                <CostForm
                    onSaveCostData={saveCostDataHandler}
                    onCancel={cancelCostHandler }
                ></CostForm>
                ) }
           
        </div>
        )
}
export default NewCost;