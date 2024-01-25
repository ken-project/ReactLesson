import React, { useState } from 'react';

export default function Field() {
  const [inputText, setInputText] = useState('');
  const [focusMessage, setFocusMessage] = useState(''); // フォーカスメッセージの状態を追加

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFocus = () => {
    setFocusMessage('フォーカスされました！'); // フォーカスメッセージを設定
  };

  const handleBlur = () => {
    setFocusMessage(''); // フォーカスが外れたときにメッセージを非表示にする
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputText} 
        onChange={handleInputChange} 
        onFocus={handleFocus} 
        onBlur={handleBlur} // フォーカスが外れたときのイベントハンドラを追加
      />
      <p>入力されたテキスト: {inputText}</p>
      <p>{focusMessage}</p> {/* フォーカスメッセージを表示 */}
    </div>
  );
}