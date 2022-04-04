import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./pageComponents/editorOptions";

//-------------------------------------------
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";

// Extensions:
import Focus from "@tiptap/extension-focus";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";

// import styling
import "./pages.scss";

export default function Pages({ toggleClass }) {
  const [editorContent, setEditorContent] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      Focus.configure({
        className: "has-focus",
        mode: "all",
      }),
      Placeholder.configure({
        // Use a placeholder:
        // placeholder: 'Write something …',
        // Use different placeholders depending on the node type:
        placeholder: ({ node }) => {
          if (node.type.name === "heading") {
            return "What’s the title?";
          }

          return "Can you add some further context?";
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],

    content: ``,
  });

  console.log(editorContent);

  const handleEditorChange = (e) => {
    setEditorContent(e);
  };

  return (
    <div className={`${toggleClass} pageComponents w-50`}>
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="textEditorBox"
        onChange={(e) => handleEditorChange(e)}
      />
    </div>
  );
}
