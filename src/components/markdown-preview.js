import React from 'react';
import '../styles/stylesheet.scss';
import { useSelector } from 'react-redux';

export default function MarkdownPreviewer() {
    const state = useSelector(state => state.markdown)

    return (
        <div className="markdown-container">
            <textarea id="editor" />
            <div id="preview">
                {state.markdownInput}
            </div>
        </div>
    )
}
