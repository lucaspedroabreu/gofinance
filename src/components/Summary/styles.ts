import styled from 'styled-components'

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -6rem;
    width: 100%;
`
export const HighlightCard = styled.div`
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    &.total-background {
        background-color: var(--green)
    }
`

export const CardHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;


`

export const CardHightlight = styled.strong`
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
`