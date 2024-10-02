import { useState } from "react";

type SpentAddProps = {
    setSpents: (spents: string[]) => void,
    spents: string[]
}

const FormAdd = ({setSpents, spents}: SpentAddProps) => {
    const [item, setItem] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSpents([...spents, item])
    }

    return (  
        <form>
            <input type="text" placeholder="Add new item" onChange={e => setItem(e.target.value)} />
            <button type="submit" onClick={handleSubmit}>Add</button>
        </form>
    );
}

export default FormAdd;