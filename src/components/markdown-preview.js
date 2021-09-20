import React, { useState } from 'react';
import '../styles/stylesheet.scss';
import { useSelector } from 'react-redux';
import marked from 'marked';

export default function MarkdownPreviewer() {
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const marked = marked(input);

    return (
        <div className="markdown-container container-fluid">
            <div className="row">
                <div className="col-5 container rounded">
                    <h4 className="text-center container-title">Enter your Markdown:</h4>
                    <textarea className="form-control tech-text" id="editor" value={input} onChange={handleChange} />
                </div>
                <div className="col-5 container rounded">
                    <h4 className="text-center container-title">Preview text:</h4>
                    <div className="tech-text" id="preview">
                        {input}
                    </div>

                </div>
            </div>


        </div>
    )
}
