import React, { useState } from 'react';
import '../styles/stylesheet.scss';
import { useSelector } from 'react-redux';

export default function MarkdownPreviewer() {
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    return (
        <div className="markdown-container">
            <textarea id="editor" value={input} onChange={handleChange} />
            <div id="preview">
                {input}
            </div>
        </div>
    )
}
