import React from 'react';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue('yellow.500', 'gray.300');
  
  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode}
      color={iconColor}
      variant="ghost"
      size="md"
    />
  );
};

export default ThemeToggle;
