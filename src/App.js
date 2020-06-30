import React, { useEffect, useState, useRef } from 'react';
import Quill from 'quill';
import './App.css';

function App() {
  const [showEditor, setShowEditor] = useState(false);
  const [showTextarea, setShowTextarea] = useState(false);
  const textareaRef = useRef();

  useEffect(() => {
    if (showEditor) {
      const editor = new Quill('#editor', {
        modules: { toolbar: '#toolbar' },
        theme: 'snow',
      });

      editor.setText('123123123');
      editor.focus();
      editor.setSelection(0, editor.getLength());
    }
  }, [showEditor]);

  useEffect(() => {
    if (showTextarea) {
      const textarea = textareaRef.current;

      textarea.focus();
      textarea.select();
      textarea.setSelectionRange(0, 99999);

      // textarea.trigger('')
    }
  }, [showTextarea]);

  return (
    <div className="App">
      <button className="showButton" onClick={() => setShowEditor(s => !s)}>
        Show Editor
      </button>
      <button className="showButton" onClick={() => setShowTextarea(s => !s)}>
        Show Textarea
      </button>
      {showEditor && (
        <div className="containerWrapper">
          <div id="toolbar">
            <button className="ql-bold">Bold</button>
            <button className="ql-italic">Italic</button>
          </div>
          <div id="editor"></div>
        </div>
      )}
      {showTextarea && (
        <textarea
          style={{ top: 50, left: 50, fontSize: 20 }}
          ref={textareaRef}
          className="containerWrapper"
          defaultValue="123123123"
        ></textarea>
      )}
    </div>
  );
}

export default App;
