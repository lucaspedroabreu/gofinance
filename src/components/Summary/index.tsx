import { CardHeader, CardHightlight, CardsContainer, HighlightCard } from "./styles";
import incomeHighlightSvg from '../../assets/income.svg'
import outcomeHighlightSvg from '../../assets/outcome.svg'
import totalHighlightSvg from '../../assets/total.svg'

export function Summary() {
    return (
        <CardsContainer>
            <HighlightCard>
                <CardHeader>
                    <p>Entradas</p>
                    <img src={incomeHighlightSvg} alt="Income sign"/>
                </CardHeader>

                <CardHightlight>
                    R$6.000,00
                </CardHightlight>
            </HighlightCard>

            <HighlightCard>
                <CardHeader>
                    <p>Saídas</p>
                    <img src={outcomeHighlightSvg} alt="Income sign"/>
                </CardHeader>

                <CardHightlight>
                    R$1.800,00
                </CardHightlight>
            </HighlightCard>

            <HighlightCard className="total-background" >
                <CardHeader>
                    <p>Total</p>
                    <img src={totalHighlightSvg} alt="Income sign"/>
                </CardHeader>

                <CardHightlight>
                    R$4.200,00
                </CardHightlight>
            </HighlightCard>
            
        </CardsContainer>
    )
}