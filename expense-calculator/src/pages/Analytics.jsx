import { useSelector } from 'react-redux';
import { Box, Heading, Text } from '@chakra-ui/react';

const Analytics = () => {
  const expenses = useSelector(state => state.expenses);
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <Box>
      <Heading>Analytics</Heading>
      {Object.entries(categoryTotals).map(([category, total]) => (
        <Text key={category}>
          {category}: ${total.toFixed(2)}
        </Text>
      ))}
    </Box>
  );
};

export default Analytics;
