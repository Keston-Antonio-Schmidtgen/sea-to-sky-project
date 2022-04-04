import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import BasicToolTips from "./ToolTips";
import { Box } from "@mui/material";

// MUI icons

export default function HeadingMenu({ editor, styleHeading,  onClick }) {
  return (
    <Box
      style={styleHeading}
      className="d-flex flex-column position-absolute "
      onClick={onClick}
    >
      <BasicToolTips
        tooltip="Paragraph"
        placement="right"
        func={() => editor.chain().focus().setParagraph().run()}
        className={editor?.isActive("paragraph") ? "is-active" : ""}
      >
        <MDBIcon fas icon="paragraph" />
      </BasicToolTips>

      <BasicToolTips
        func={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor?.isActive("heading", { level: 1 }) ? "is-active" : ""}
        tooltip="Header 1"
        placement="right"
      >
        <h1>h1</h1>
      </BasicToolTips>

      <BasicToolTips
        func={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor?.isActive("heading", { level: 2 }) ? "is-active" : ""}
        tooltip="Header 2"
        placement="right"
      >
        <h2>h2</h2>
      </BasicToolTips>
      <BasicToolTips
        func={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor?.isActive("heading", { level: 3 }) ? "is-active" : ""}
        tooltip="Header 3"
        placement="right"
      >
        <h3>h3</h3>
      </BasicToolTips>
      <BasicToolTips
        func={() => editor?.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor?.isActive("heading", { level: 4 }) ? "is-active" : ""}
        tooltip="Header 4"
        placement="right"
      >
        <h4>h4</h4>
      </BasicToolTips>

      <BasicToolTips
        func={() => editor?.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor?.isActive("heading", { level: 5 }) ? "is-active" : ""}
        tooltip="Header 5"
        placement="right"
      >
        <h5>h5</h5>
      </BasicToolTips>
      <BasicToolTips
        func={() => editor?.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor?.isActive("heading", { level: 6 }) ? "is-active" : ""}
        tooltip="Header 6"
        placement="right"
      >
        <h6>h6</h6>
      </BasicToolTips>
      <BasicToolTips
        func={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
        tooltip="Preformatted style"
        placement="right"
      >
        Preformatted 
        {/* <img src={blockCode} alt="blockCode" /> */}
      </BasicToolTips>
    </Box>
  );
}
