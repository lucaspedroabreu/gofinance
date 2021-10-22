import logoImg from '../../assets/logo.svg'
import { Wrapper, Container, Content } from './styles'

interface HeaderProps {
    onClickAddNewTransactionButton: () => void;
}

export function Header(props: HeaderProps) {


    return (
        <Wrapper>
            <Container> 

                <Content>    
                    <img src={logoImg} alt="DT Money" />
                    <button type="button" onClick={props.onClickAddNewTransactionButton}>
                        Nova transação
                    </button>

                    
                </Content>

            </Container>
        </Wrapper>
    )
}
