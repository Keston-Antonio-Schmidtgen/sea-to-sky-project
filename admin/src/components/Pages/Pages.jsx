import React, { useState, useContext } from "react";
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

// import context
import { WordContext } from "../context";

// import axios
import axios from "axios";

export default function Pages() {
  // bringing stuff from AddPost.jsx
  const { currentAdmin, setCurrentAdmin, post, setPost } =
    useContext(WordContext);

  const [data, setData] = useState({
    owner: currentAdmin._id,
    body: "",
    title: "",
    subtitle: "",
    published: false,
  });

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
    autofocus: true,

    //NOTE TO update the state instantlly...
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      // send the content to an API here
      setData({...data, body: html});
    },
  });

  // NOTE Or if you want to restore the content later (e. g. after an API call has finished), you can do that too:
  // maybe with useEffect...
  // TODO this should be in the reader component.
  // editor.commands.setContent(`<p>Example Text</p>`)

  const handleSave = async () => {
    console.log("data is", data);

    const response = await axios.post("/pages/add", data);

    console.log("response is from add page", response);
  };

  console.log('Data BEFore Submit', data)

  return (
    <div className="pageComponents w-50">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="textEditorBox" />
    </div>
  );
}
