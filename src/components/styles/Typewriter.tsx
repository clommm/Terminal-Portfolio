// Typewriter.tsx
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const TypingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const TypewriterText = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: ${TypingAnimation} 1s steps(40, end);
`;

interface TypewriterProps {
  text: string; // Make sure this line is present
}

const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setDisplayedText(text.substring(0, currentIndex));
      currentIndex++;

      if (currentIndex > text.length) {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [text]);

  return <TypewriterText>{displayedText}</TypewriterText>;
};

export default Typewriter;
