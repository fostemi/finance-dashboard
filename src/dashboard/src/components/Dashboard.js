import React from 'react';
import { Container, Typography } from '@mui/material';
import CheckingCard from './CheckingCard';

const mockData = {
  creditCards: [
    {
      title: 'Credit Card 1',
      balance: 1234.56,
      transactions: [
        { date: '2024-01-01', amount: 50, description: 'Grocery Store' },
        { date: '2024-01-02', amount: 25, description: 'Coffee Shop' },
      ],
    },
  ],
  savingsAccounts: [
    {
      title: 'Savings Account 1',
      balance: 5678.90,
      transactions: [
        { date: '2024-01-01', amount: 100, description: 'Interest' },
      ],
    },
  ],
  checkingAccounts: [
    {
      title: 'Checking Account 1',
      balance: 2345.67,
      transactions: [
        { date: '2024-01-01', amount: 200, description: 'Paycheck' },
        { date: '2024-01-02', amount: 100, description: 'Utility Bill' },
      ],
    },
  ],
};

const Dashboard = () => {
  return (
    <Container sx={{ paddingTop: 2 }}>
      <Typography variant="h4" component="div" sx={{ marginBottom: 2 }}>Finance Dashboard</Typography>
      {mockData.creditCards.map((account, index) => (
        <CheckingCard key={index} title={account.title} balance={account.balance} transactions={account.transactions} />
      ))}
      {mockData.savingsAccounts.map((account, index) => (
        <CheckingCard key={index} title={account.title} balance={account.balance} transactions={account.transactions} />
      ))}
      {mockData.checkingAccounts.map((account, index) => (
        <CheckingCard key={index} title={account.title} balance={account.balance} transactions={account.transactions} />
      ))}
    </Container>
  );
};

export default Dashboard;

