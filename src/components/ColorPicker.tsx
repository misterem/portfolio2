import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

interface Props {
  prompt: string;
}

export default function ColorPicker({ prompt }: Props) {
  const [color, setColor] = useState("#aabbcc");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    const response = await fetch('/api/vote', {
      method: 'POST',
      body: JSON.stringify({ prompt, hex: color }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center">
        <h2>Thanks! You chose {color} for {prompt}.</h2>
    <p>Now, let's see how you compare...</p>
    <a href={`/results?word=${prompt}`} className="underline">View Results</a>
    </div>
  );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
  <h2>Show us "{prompt}"</h2>
  <HexColorPicker color={color} onChange={setColor} />
  <div style={{ padding: '10px', background: color, borderRadius: '8px' }}>
  {color}
  </div>
  <button
  onClick={handleSubmit}
  style={{ padding: '10px 20px', cursor: 'pointer' }}
>
  Submit My Choice
  </button>
  </div>
);
}
