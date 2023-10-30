import logo from '../../assets/logo.svg'
import { Container, Content} from "./styles";
export function Header() {
    return (
        <Container>
            <Content>
                <div className='details'>
                    <h1>Pedidos</h1>
                    <h2>Acompanhamento de Pedidos</h2>
                </div>
                <div className='pai_img'>
                <img src={logo} alt="Imagem Logo" />
                </div>
            </Content>
        </Container>
        
    );
}