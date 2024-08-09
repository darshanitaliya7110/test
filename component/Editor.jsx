"use client";

import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Editor = () => {
    const [text, setText] = useState('');
    const quillRef = useRef(null);

    const handleChange = (value) => {
        setText(value);
    };

    console.log(text)

    const modules = {
        toolbar: {
            container: [
                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['bold', 'italic', 'underline'],
                [{ 'align': [] }],
                ['clean'],
                ["formula"],
                ['code-block']
            ],
        }
    };

    return (
        <div>
            <h2>Math Editor with Images</h2>
            <ReactQuill
                ref={quillRef}
                value={text}
                onChange={handleChange}
                modules={modules}
            />
            <div
                className="p-3 max-w-2xl mx-auto w-full post-content"
                dangerouslySetInnerHTML={{ __html: text }}
            ></div>
        </div>
    );
};

export default Editor;
