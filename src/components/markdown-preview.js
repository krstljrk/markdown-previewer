import React, { useState } from 'react';
import '../styles/stylesheet.scss';
import { useSelector } from 'react-redux';

export default function MarkdownPreviewer() {
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    return (
        <div className="markdown-container container-fluid">
            <div className="row">
                <div className="col-5 container rounded">
                    <h4 className="text-center">Enter your Markdown:</h4>
                    <textarea className="form-control" id="editor" value={input} onChange={handleChange} />
                </div>
                <div className="col-5 container rounded">
                    <h4 className="text-center">Preview text:</h4>
                    <div id="preview">
                        {input}
                    </div>
                </div>
            </div>


        </div>
    )
}
