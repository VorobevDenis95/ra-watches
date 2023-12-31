import Watch, { PropsWatch } from "./Watch";

interface PropsListWatch {
    list: PropsWatch[];
    onClickDelete: (id: string) => void
}

const ListWatches = ({ list, onClickDelete } :PropsListWatch) => {

    return (
        <div>
            {list.map(el => <Watch key={el.id} nameClock={el.nameClock} timeZone={el.timeZone} onClickDelete={() => onClickDelete(el.id)}/>)}
        </div>     
    )
}

export default ListWatches;