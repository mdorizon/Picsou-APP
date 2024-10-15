import { useEffect, useState } from "react";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";
import ExpenseItem from "./components/expense/ExpenseItem";
import { ExpenseType } from "./types/expense";

const App = () => {
    const [expenses, setExpenses] = useState<ExpenseType[]>([]);
    const [expenseInput, setExpenseInput] = useState<number[]>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!expenseInput) return
        
        const expense = {
            amount: expenseInput,
            category: 'Test'
        }

        setExpenses([
            ...expenses,
            expense
        ]);
    }

    useEffect(() => {
        console.log('component mounted')
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
                <form onSubmit={handleSubmit}>
                    <Input 
                        placeholder="Exemple: 300€" 
                        type='number'
                        setValue={setExpenseInput}
                    />
                    <Button
                        text="Ajouter"
                        type="submit"
                    />
                </form>
            </div>

            {/* Liste des dépenses */}
            <div>
                {expenses.map((expense, index) => <ExpenseItem expense={expense} key={index} index={index} expenses={expenses} setExpenses={setExpenses} /> )}
            </div>
        </>
    );
}

export default App;