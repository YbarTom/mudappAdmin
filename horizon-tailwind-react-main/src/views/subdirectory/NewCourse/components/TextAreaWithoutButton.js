import React, { useState, useEffect } from "react";
import { Editor } from "@tiptap/core";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import Paragraph from "@tiptap/extension-paragraph";
import Bold from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Blockquote from "@tiptap/extension-blockquote";

const TextAreaEditor = () => {
    const [editor, setEditor] = useState(null);
    var hmtl = "";
    const handleClick = () => {
        if (editor) {
            hmtl = editor.getText();
            console.log(hmtl);
        }
    }
    useEffect(() => {
        if (!editor) return;

        const actions = [
            {
                id: "#hs-editor-tiptap [data-hs-editor-bold]",
                fn: () => editor.chain().focus().toggleBold().run(),
            },
            {
                id: "#hs-editor-tiptap [data-hs-editor-italic]",
                fn: () => editor.chain().focus().toggleItalic().run(),
            },
            {
                id: "#hs-editor-tiptap [data-hs-editor-underline]",
                fn: () => editor.chain().focus().toggleUnderline().run(),
            },
            {
                id: "#hs-editor-tiptap [data-hs-editor-strike]",
                fn: () => editor.chain().focus().toggleStrike().run(),
            },
            {
                id: "#hs-editor-tiptap [data-hs-editor-link]",
                fn: () => {
                    const url = window.prompt("URL");
                    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
                },
            },
            {
                id: "#hs-editor-tiptap [data-hs-editor-ol]",
                fn: () => editor.chain().focus().toggleOrderedList().run(),
            },
            {
                id: "#hs-editor-tiptap [data-hs-editor-ul]",
                fn: () => editor.chain().focus().toggleBulletList().run(),
            },
            {
                id: "#hs-editor-tiptap [data-hs-editor-blockquote]",
                fn: () => editor.chain().focus().toggleBlockquote().run(),
            },
            {
                id: "#hs-editor-tiptap [data-hs-editor-code]",
                fn: () => editor.chain().focus().toggleCode().run(),
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
                Underline,
                Link.configure({
                    HTMLAttributes: {
                        class: "inline-flex items-center gap-x-1 text-blue-500 decoration-2 hover:underline font-medium",
                    },
                }),
                BulletList.configure({
                    HTMLAttributes: {
                        class: "list-decimal list-inline text-gray-800",
                    },
                }),
                OrderedList.configure({
                    HTMLAttributes: {
                        class: "list-disc list-inline text-gray-800",
                    },
                }),
                Blockquote.configure({

                    HTMLAttributes: {
                        class: "text-gray-800 sm:text-xl",
                    },
                }),
            ],
        });

        setEditor(editorInstance);

        return () => {
            editorInstance.destroy();
        };
    }, []);

    return (
        <div>
            <div className="max-w-full overflow-hidden rounded-xl  border border-gray-300 bg-white">
                <div id="hs-editor-tiptap">
                    
                    <div
                        data-hs-editor-field
                        className="p-2 mx-4 [&_*]:outline-none [&_.tiptap.ProseMirror]:min-h-[280px]"
                    ></div>


                </div>

            </div>
        </div>
    );
};

export default TextAreaEditor;
