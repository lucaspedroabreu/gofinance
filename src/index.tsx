import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de Website',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 8000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel de Apartamento',
          type: 'withdraw',
          category: 'Casa',
          amount: 4200,
          createdAt: new Date('2021-02-14 09:00:00')
        },        
        {
          id: 3,
          title: 'Rascal',
          type: 'withdraw',
          category: 'Alimentação',
          amount: 115,
          createdAt: new Date('2021-02-17 09:00:00')
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

