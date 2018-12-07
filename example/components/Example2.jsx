import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'Please type a number',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    validator: (value) => {
      if (isNaN(value)) {
        return 'value should be a number';
      }
      return true;
    },
    trigger: '1',
  },

];


const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <ChatBot  headerTitle="Validator"
              recognitionEnable={true}
            steps={steps} />
  </ThemeProvider>
);

export default ThemedExample;
