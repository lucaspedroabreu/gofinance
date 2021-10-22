import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`

    /* padding: 2 4rem; */
    margin-top: 2rem;
    /* grid-template-columns: repeat(auto); */

    table {
        width: 100%;
        border-spacing: 0 0.5rem;
    }

    th {
        color: var(--green);
        background-color: ${lighten(0.02, '#363f5f')};
        border: 3px solid var(--background);
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        border-spacing: 1rem 1rem;

    }

    td {
        padding: 1.5rem 1rem;
        border: 0;
        background-color: var(--shape);
        color: var(--text-body);
        border-radius: 8px;
        font-weight: 500;

        & + td {
            text-align: center;
        }

        &:first-child {
            color: var(--text-title);
        }

        &.deposit {
            color: var(--green);
        }

        &.withdraw {
            color: var(--red);
        }
    }

`
