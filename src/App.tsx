import { useState } from "react";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";

const expensesListDefault = [300, 200, 40];

const App = () => {
    const [expenses, setExpenses] = useState<number[]>(expensesListDefault);
    const [expenseInput, setExpenseInput] = useState<number[]>(expensesListDefault);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setExpenses([
            ...expenses,
            Number(expenseInput)
        ]);
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
                {expenses.map((expense, index) => (
                    <div key={index}>{expense}</div>
                ))}
            </div>
        </>
    );
}

export default App;