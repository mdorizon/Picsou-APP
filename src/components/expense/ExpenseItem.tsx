import Button from "../ui/Button";

type ExpenseItemProps = {
    expense: number;
    index: number;
    expenses: number[];
    setExpenses: React.Dispatch<React.SetStateAction<number[]>>;
}

const ExpenseItem = ({expense, index, expenses, setExpenses} : ExpenseItemProps) => {

    const handleDelete = () => {
        expenses.splice(index, 1);
        setExpenses([...expenses]);
    }

    return (
        <div key={index} className="bg-slate-100 p-4 rounded-md mb-1">
            {expense}
            <Button
                text="Delete"
                variant="danger"
                onClick={handleDelete}
            />
        </div>
    );
}

export default ExpenseItem;