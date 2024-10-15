import { useEffect, useState } from "react";
import ExpenseItem from "./components/expense/ExpenseItem";
import { ExpenseType } from "./types/expense";
import ExpenseForm from "./components/expense/ExpenseForm";

const App = () => {
    const [expenses, setExpenses] = useState<ExpenseType[]>([]);

    useEffect(() => {
        fetchExpenses()
    }, []);

    const fetchExpenses = async () => {
        const response = await fetch('expenses.json')
        const data = await response.json()
        setExpenses(data);
    }

    return (
        <>  
            <div>
                {/* Formulaire de création de dépenses */}
                <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
            </div>

            <div>
                {/* Liste des dépenses */}
                {expenses.map((expense, index) => <ExpenseItem expense={expense} key={index} index={index} expenses={expenses} setExpenses={setExpenses} /> )}
            </div>
        </>
    );
}

export default App;