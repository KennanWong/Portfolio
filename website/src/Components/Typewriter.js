import { Typography, styled } from '@mui/material';
import  { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 30) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};

const Text = styled(Typography)({
    letterSpacing: '.15em',
    fontFamily: 'monospace',
    color: "#1C1C1C",
    textAlign: 'left'
})


export default function Typewriter({ text, speed, hovering }){
    const displayText = useTypewriter(hovering ? text: '', speed);

    return <Text>{displayText}</Text>;
};