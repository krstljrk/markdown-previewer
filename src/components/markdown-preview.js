import React, { useState } from 'react';
import '../styles/stylesheet.scss';
import { useSelector } from 'react-redux';
import marked from 'marked';

export default function MarkdownPreviewer() {
    const initialState = "# Hello there!\n## Welcome to my Markdown Previewer.\n\nThis project was created for a [freeCodeCamp](https://www.freecodecamp.org) Front-End Development Libraries certification."

    const [input, setInput] = useState(initialState);

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const getMarkdownText = () => {
        var rawMarkup = marked(input);
        return { __html: rawMarkup };
    }




    return (
        <div className="markdown-container container-fluid">
            <div className="row">
                <div className="col-5 container rounded">
                    <h4 className="text-center container-title">Enter your Markdown:</h4>
                    <textarea className="form-control tech-text" id="editor" value={input} onChange={handleChange} />
                </div>
                <div className="col-5 container rounded">
                    <h4 className="text-center container-title">Preview text:</h4>
                    <div className="tech-text" id="preview" dangerouslySetInnerHTML={getMarkdownText()}>
                    </div>

                </div>
            </div>


        </div>
    )
}
