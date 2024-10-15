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
        <div key={index} className="bg-slate-100 p-4 rounded-md mb-1">
            {expense.amount}
            <Button
                text="Delete"
                variant="danger"
                onClick={handleDelete}
            />
        </div>
    );
}

export default ExpenseItem;