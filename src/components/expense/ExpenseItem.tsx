import { ExpenseType } from "../../types/expense";
import Button from "../ui/Button";

type ExpenseItemProps = {
    expense: ExpenseType;
    index: number;
    expenses: ExpenseType[];
    setExpenses: (expenses: ExpenseType[]) => void;
}

const ExpenseItem = ({expense, index, expenses, setExpenses} : ExpenseItemProps) => {

    const handleDelete = () => {
        expenses.splice(index, 1);
        setExpenses([...expenses]);
    }

    return (
        <div key={index} className={`px-6 py-4 rounded-md mb-1 flex justify-between items-center shadow-md ${expense.amount > 100 ? 'bg-red-100' : 'bg-green-100'}`}>
            <span>
                {expense.amount} €
            </span>
            <span>
                {expense.category === "Alimentation" && "🍔  "}
                {expense.category === "Loisirs" && "🎊  "}
                {expense.category === "Transport" && "🚂  "}
                {expense.category === "Santé" && "🤍  "}
                {expense.category === "Logement" && "🏠  "}
                {expense.category === "Éducation" && "👨🏻‍🏫  "}
                {expense.category}
            </span>
            <Button
                text="Delete"
                variant="danger"
                onClick={handleDelete}
            />
        </div>
    );
}

export default ExpenseItem;