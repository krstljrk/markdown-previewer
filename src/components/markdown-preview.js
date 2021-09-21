import React, { useState } from 'react';
import '../styles/stylesheet.scss';
import  marked from 'marked';

marked.setOptions({
    breaks: true
  });

const _renderer = new marked.Renderer();

export default function MarkdownPreviewer() {
    const initialState = "![waves](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih0.redbubble.net%2Fimage.478599516.5246%2Fflat%2C1000x1000%2C075%2Cf.u1.jpg&f=1&nofb=1)\n# Hello there!\n\n## Welcome to my Markdown Previewer.\n\nThis project was created for a [freeCodeCamp](https://www.freecodecamp.org) Front-End Development Libraries certification.\n\nFeel free to type your own markdown **here**, let your imagination run _wild_.\n\nYou can write inline code using backticks like so: `<h1>Hello, World!</h1>`, or an entire block of code using 3 backticks:\n```\nfunction anotherExample(firstLine, lastLine) {\n\tif (firstLine == '```'  lastLine == '```') {\n\t\treturn multiLineCode;\n\t}\n}\n```\nYou can even go really crazy and do a\n- Bulleted\n\t- List\n\t\t- Of multiple\n\t\t\t- Levels\n \nThere are even \n> BLOCK QUOTES\n\n\nTry to play around with it!"

    const [input, setInput] = useState(initialState);

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const getMarkdownText = () => {
        var rawMarkup = marked(input, { renderer: _renderer });
        return { __html: rawMarkup };
    }




    return (
        <div className="markdown-container container-fluid">
            <div className="row container container-textfield rounded">
                <h4 className="text-center container-title">Enter your Markdown:</h4>
                <textarea className="form-control tech-text" id="editor" value={input} onChange={handleChange}  placeholder="Write here..." />
            </div>
            <div className="row container container-preview rounded">
                <h4 className="text-center container-title">Preview text:</h4>
                <div className="tech-text" id="preview" dangerouslySetInnerHTML={getMarkdownText()}>
                </div>
            </div>


        </div>
    )
}
