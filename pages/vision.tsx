// 클라이언트 측 코드
import { useState } from 'react';

export const VisionComponent = () => {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch('/api/vision', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ imageUrl })
    });
    const data = await response.json();
    setText(data.text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
        />
        <button type="submit">Analyze</button>
      </form>
      {text && <p>Detected text: {text}</p>}
    </div>
  );
};

export default VisionComponent;
