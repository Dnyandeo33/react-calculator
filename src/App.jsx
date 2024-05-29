import { useState } from 'react';
import './App.css';
import BtnPad from './components/BtnPad';
import Card from './components/Card';
import Display from './components/Display';

const App = () => {
  const [value, setValue] = useState('0');

  const handleClick = (input) => {
    if (input === 'C') return setValue('0');

    if (input === 'AC') return setValue('');

    if (input === '-') {
      if (value.includes('-')) {
        return setValue(value.replace('-', ''));
      }
    }

    if (input === '+') {
      if (value.includes('+')) {
        return setValue(value.replace('+', ''));
      }
    }

    if (input === '/') {
      if (value.includes('/')) {
        return setValue(value.replace('/', ''));
      }
    }

    if (input === '*') {
      if (value.includes('*')) {
        return setValue(value.replace('*', ''));
      }
    }

    if (input === '.') {
      if (value.includes('.')) {
        return setValue(value.replace('.', ''));
      }
    }

    if (input === '=') {
      try {
        setValue(eval(value));
      } catch (error) {
        setValue('Error');
      }
    } else {
      if (value === '0' || value === '00') {
        setValue(input);
      } else {
        setValue((prev) => prev + input);
      }
    }
  };

  return (
    <Card>
      <Display value={value} />
      <BtnPad handleClick={handleClick} />
    </Card>
  );
};

export default App;
