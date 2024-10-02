import { useState } from "react";
import FormAdd from "./components/FormAdd";
import SpentList from "./components/SpentList";

const spentsListDefault = ['item 1', 'item 2', 'item 3'];

const App = () => {
    const [spents, setSpents] = useState<string[]>(spentsListDefault)

    return (
        <>
            <FormAdd setSpents={setSpents} spents={spents} />
            <SpentList spents={spents} />
        </>
    );
}

export default App;