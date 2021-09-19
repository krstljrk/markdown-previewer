import React from 'react'
import '../styles/stylesheet.scss'

export default function MarkdownPreviewer() {

    return (
        <div>
            <textarea id="editor" />
            <div id="preview">
                This is the Preview area
            </div>
        </div>
    )
}