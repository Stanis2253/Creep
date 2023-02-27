import NewCost from "./Components/NewCost/NewCost"
import Costs from "./Components/Costs/Costs.js";
import * as React from "react";
import CostsFilter from "./Components/CostFilter/CostsFilter.js";

const INITIAL_COSTS = [
    {
        id: 1,
        date: new Date(2022, 12, 12),
        name: 'Продукт1',
        amount: 999.99,
    },
    {
        id: 2,
        date: new Date(2023, 2, 12),
        name: 'Продукт2',
        amount: 2000,
    },
    {
        id: 3,
        date: new Date(2021, 2, 12),
        name: 'Продукт3',
        amount: 1000,
    },
]

const App = () => {

    const [costs, setCosts] = React.useState(INITIAL_COSTS);

    const addCostHandler = (cost) => {
        setCosts(prevCosts => {
            return[cost, ...prevCosts]
        });
    };


    {
        return (
            <div className="App">
                <NewCost onAddCost={addCostHandler}></NewCost>
                <Costs costs={costs}></Costs>
            </div>
        );
    }
}

export default App;
