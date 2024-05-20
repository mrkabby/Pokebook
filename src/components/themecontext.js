import React, { createContext, useContext, useState } from 'react';

// Create a context
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState('#F472B6'); // Default theme color

  const changeTheme = (color) => {
    setThemeColor(color);
    document.documentElement.style.setProperty('--theme-color', color);
  };

  return (
    <ThemeContext.Provider value={{ themeColor, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
