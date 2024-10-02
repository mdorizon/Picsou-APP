type SpentListProps = {
    spents: string[],
}

const SpentList = ({spents}: SpentListProps) => {
    return (  
        <h1>{spents.map((spent: string) => ( spent ))}</h1>
    );
}

export default SpentList;