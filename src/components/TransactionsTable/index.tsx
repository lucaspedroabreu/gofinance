import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from '../../services/api'

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get<any>('/transactions')
            .then(response => response.data)
            .then(data => setTransactions(data.transactions))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.createdAt)
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}


/*
                    <tr>
                        <td>Desenvolvimento de Site</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Venda</td>
                        <td>13/04/2021</td>
                    </tr>
                    <tr>
                        <td>Hamburguer</td>
                        <td className="withdraw">-R$59,00</td>
                        <td>Alimentação</td>
                        <td>10/04/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel de Apartamento</td>
                        <td className="withdraw">-R$2.400,00</td>
                        <td>Casa</td>
                        <td>29/03/2021</td>
                    </tr>
*/