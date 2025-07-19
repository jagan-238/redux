import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import AddExpense from './components/AddExpense';
import Analytics from './pages/Analytics';
import ThemeToggle from './components/ThemeToggle';
import ExpenseFilter from './components/ExpenseFilter';
import './App.css';

const App = () => {
  return (
    <Router>
      <header style={{ padding: '1rem', backgroundColor: '#eee' }}>
        <nav>
          <Link to="/add-expense" style={{ marginRight: '1rem' }}>Add Expense</Link>
          <Link to="/analytics">Analytics</Link>
        </nav>
      </header>

      <ThemeToggle />

      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/add-expense" replace />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </main>

      <ExpenseFilter />
    </Router>
  );
};

export default App;
