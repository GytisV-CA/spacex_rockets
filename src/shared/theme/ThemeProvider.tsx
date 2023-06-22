import { ReactNode } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

const themeLight = {
  background: '#F5F5F6',
  surface: '#FFFFFF',
  text: '#676C7E',
  label: '#676C7E',
  heading: '#283049',
  input: '#F5F5FA',
  inputHover: '#F3F3F8',
  inputFocus: '#F1F1F6',
  placeholder: '#9B9EAC',
};

interface IThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  return (
    <StyledComponentsThemeProvider theme={themeLight}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
