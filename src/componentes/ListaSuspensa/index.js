import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    console.log("aqui", props.itens);
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
};

export default ListaSuspensa;