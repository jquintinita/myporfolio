import React, { useState, useEffect } from 'react';

export default function CodingText() {
  const lines = ["const hello = 'Hello World!';", "console.log(hello);"];
  const [display, setDisplay] = useState('');
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    if (line < lines.length) {
      if (char < lines[line].length) {
        const timeout = setTimeout(() => {
          setDisplay(prev => prev + lines[line][char]);
          setChar(c => c + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplay('');
          setLine(l => (l + 1) % lines.length);
          setChar(0);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [char, line]);

  return (
    <svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="40" fontSize="24" fontFamily="monospace">{display}</text>
    </svg>
  );
}
