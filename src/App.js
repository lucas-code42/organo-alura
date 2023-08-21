import Banner from './componentes/Banner'; // importantdo o nosso componente
import CampoTexto from './componentes/CampoTexto'; // com um index dentro da pasta podemos omitir o nome do arquivo

function App() {
  return (
    <div className="App">
      <Banner /> {/* aqui estamos chamando nosso componente criado */}
      <CampoTexto label="Nome" placeholder="Digite seu nome" />
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
    </div>
  );
}

export default App;
