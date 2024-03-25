import React, { useState, useEffect } from "react";
import { Editor } from "@tiptap/core";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import Paragraph from "@tiptap/extension-paragraph";
import Bold from "@tiptap/extension-bold";
import space from "assets/img/ColleBree/space.png";

const TextAreaEditor = ({ onFlashcardsChange }) => {
    const [editor, setEditor] = useState(null);
    const [flashcards, setFlashcards] = useState([]);

    const handleButtonClick = () => {
        if (editor) {
            editor.commands.insertContent("▭");
        }
        const newFlashcards = [...flashcards, "espacio"];
        setFlashcards(newFlashcards);
        onFlashcardsChange(newFlashcards); // Llama a la función proporcionada por el padre
    };

    useEffect(() => {
        if (!editor) return;

        const actions = [
            {
                id: "#hs-editor-tiptap [data-hs-editor-bold]",
                fn: () => editor.chain().focus().toggleBold().run(),
            },
        ];

        actions.forEach(({ id, fn }) => {
            const action = document.querySelector(id);

            if (action === null) return;

            action.addEventListener("click", fn);
        });
    }, [editor]);

    useEffect(() => {
        const editorInstance = new Editor({
            element: document.querySelector("#hs-editor-tiptap [data-hs-editor-field]"),
            extensions: [
                Placeholder.configure({
                    placeholder: "Play around with the editor...",
                    emptyNodeClass: "text-gray-600",
                }),
                StarterKit,
                Paragraph.configure({
                    HTMLAttributes: {
                        class: "text-gray-600",
                    },
                }),
                Bold.configure({
                    HTMLAttributes: {
                        class: "font-bold",
                    },
                }),
            ],
        });

        setEditor(editorInstance);

        return () => {
            editorInstance.destroy();
        };
    }, []);

    

    const handleClick = () => {
        if (editor) {
            var text = editor.getText();
            text = text.replaceAll('▭', '###');
            console.log(text);
        }
    };

    return (
        <div>
            <div className="max-w-full overflow-hidden rounded-xl border border-gray-300 bg-white">
                <div id="hs-editor-tiptap">
                    <div className="m-1 flex items-center gap-0.5 rounded-lg bg-gray-100 p-1">
                        <button
                            className="relative grid h-10 max-h-[40px] w-10 max-w-[40px] select-none place-items-center rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            onClick={handleButtonClick}
                        >
                            <img src={space} width={20} height={20} alt="space" />
                        </button>
                    </div>
                    <div
                        data-hs-editor-field
                        className="p-2 mx-4 [&_*]:outline-none [&_.tiptap.ProseMirror]:min-h-[100px]"
                    ></div>
                </div>
            </div>
            <button onClick={handleClick}>enviar</button>
        </div>
    );
};

export default TextAreaEditor;
