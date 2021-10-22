import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {

  const [isAddTransactionModalOpen, setIsAddTransactionModalOpen] = useState(false)

  function handleOpenAddTransactionModal() {
      setIsAddTransactionModalOpen(true)
  }

  function handleCloseAddTransactionModal() {
      setIsAddTransactionModalOpen(false)
  }

  return (
    <>
      <Header onClickAddNewTransactionButton={handleOpenAddTransactionModal}/>
      <Dashboard />

      <NewTransactionModal isOpen={isAddTransactionModalOpen} onRequestClose={handleCloseAddTransactionModal} />
      <GlobalStyle />
    </>
  );
}
