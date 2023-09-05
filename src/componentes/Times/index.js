import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
    const bgC = { backgroundColor: props.corSecundaria }
    return (
        <>
            <section className="time" style={bgC}>
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
                <Colaborador />
            </section>
        </>
    );
}

export default Time;