import { useState } from 'react';
import { Button, Input, Select, Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/expenseSlice';

const AddExpense = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleAddExpense = () => {
    dispatch(addExpense({ description, amount: parseFloat(amount), category }));
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <Box>
      <Input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Select
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="shopping">Shopping</option>
      </Select>
      <Button onClick={handleAddExpense}>Add Expense</Button>
    </Box>
  );
};

export default AddExpense;
