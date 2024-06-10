import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CheckingCard = ({ title, balance, transactions }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">{title}</Typography>
        <Typography variant="h6" color="text.secondary">Balance: ${balance}</Typography>
        <Typography variant="body2" component="div">
          <ul>
            {transactions.map((transaction, index) => (
              <li key={index}>{transaction.date} - ${transaction.amount} - {transaction.description}</li>
            ))}
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CheckingCard;

