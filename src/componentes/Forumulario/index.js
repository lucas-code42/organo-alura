import "./Formulario.css"
import CampoTexto from '../CampoTexto';
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
    const times = [
        "Programação",
        "Front-end",
        "Data-Science",
        "Devops",
        "Mobile",
        "UI & UX"
    ]
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times} />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario;