import React from 'react';
import styled, { keyframes } from 'styled-components';

const typewriter = keyframes`
  from {
    max-height: 0;  // Start with no visible text
  }
  to {
    max-height: 100vh;  // Reveal all text
  }
`;
export const TypeWriterMulti = styled.div`
    display: block;  // Ensures proper behavior with height
    white-space: pre-wrap;  // Allows line breaks to be preserved
    overflow: hidden;  // Hides text until revealed by the animation
    animation: ${typewriter} 10s linear;  // Animation over 3 seconds (adjust as needed)
    animation-fill-mode: forwards; 
    transition-timing-function: ease-in-out;  // Smooth transitions
    max-height: 0;
`