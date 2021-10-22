import Modal from 'react-modal'
import { Form, TypeButton } from './styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'

interface AddNewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: AddNewTransactionModalProps) {
    const [type, setType] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        const data = {
            title,
            value,
            category,
            type,
        }

        api.post('/transactions', data)
    }

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="new-transaction-modal-overlay"
            className="new-transaction-modal-content"
        >
            <button 
                type="button"
                onClick={onRequestClose}
                className="new-transaction-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Form onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>

                <input 
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input 
                    placeholder="Valor"
                    type="number"
                    value={value}
                    onChange={event => setValue(parseFloat(event.target.value))}
                />

                <div className="transactionType">
                    <TypeButton 
                        type="button"
                        onClick={() => {setType('deposit')}}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </TypeButton>
                    <TypeButton 
                        type="button" 
                        onClick={() => {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </TypeButton>
                </div>

                <input 
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Form>
        </Modal>
    )
}