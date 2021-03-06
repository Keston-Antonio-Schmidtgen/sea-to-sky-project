import React, { useState, useContext, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./pageComponents/editorOptions";
import SideNavRight from "../SideNav/SideNavRight";

//-------------------------------------------
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";

// Extensions:
import Focus from "@tiptap/extension-focus";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Box from "@mui/material/Box";

// import styling
import "./pages.scss";

// import context
import { WordContext } from "../context";
// import axios
import axios from "axios";
import { Link } from "react-router-dom";

// import mbd components
import { MDBInput, MDBContainer, MDBBtn } from "mdb-react-ui-kit";

export default function Pages({ toggleClass }) {
  /* --------------------Image handling -----------------*/
  const handleImageSubmit = (e) => {
    e.preventDefault();

    setData({ ...data, image: [...data.image, image] });
    setImage("");
  };

  // bringing stuff from AddPost.jsx
  const { currentAdmin } = useContext(WordContext);
  const [bodyData, setBodyData] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState({
    owner: currentAdmin._id,
    body: "",
    title: "",
    subTitle: "",
    published: true,
    image: "",
  });

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
            return "What`s the title?";
          }
          // console.log("NODE", node);

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
      setBodyData(html);
    },
  });

  useEffect(() => {
    setData({ ...data, body: bodyData });
  }, [bodyData]);
  // NOTE Or if you want to restore the content later (e. g. after an API call has finished), you can do that too:
  // maybe with useEffect...
  // TODO this should be in the reader component.
  // editor.commands.setContent(`<p>Example Text</p>`)

  // handle publish button
  const handleSave = async () => {
    console.log("data is", data);

    const response = await axios.post("/pages/add", data);

    console.log("response is from add page", response);
  };

  // console.log("Data BEFore Submit", data);

  return (
    <Box className={`${toggleClass} mt-5 mx-auto w-75`} sx={{ mt: 5 }}>
      <MDBContainer fluid>
        <MDBInput
          label="Title"
          id="form1"
          type="text"
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <MDBInput
          label="Subject"
          id="form2"
          type="text"
          onChange={(e) => setData({ ...data, subTitle: e.target.value })}
        />
        {/* <form action="" onSubmit={handleImageSubmit}> */}
        <MDBInput
          label="Enter image link"
          id="form1"
          type="text"
          // value={image}
          onChange={(e) => setData({ ...data, image: e.target.value })}
        />
        {/* </form> */}
      </MDBContainer>

      <div className="pageComponents">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} className="textEditorBox" />
        <div className="text-end">
          <MDBBtn onClick={handleSave} className="buttonBg removeBorder">
            Publish
          </MDBBtn>
        </div>
      </div>
    </Box>
  );
}
