import React from "react";
import { Box } from "@mui/material";
import BasicToolTips from "./ToolTips";

// MUI Icons
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';



import { MDBIcon } from "mdb-react-ui-kit";

export default function ListOptions({editor}) {
  return (
    <Box>
      <BasicToolTips
        func={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
        tooltip="Bullet List"
      >
        <FormatListBulletedRoundedIcon  fontSize="large" />
      </BasicToolTips>
      <BasicToolTips
        func={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
        tooltip="Ordered List"
      >
        <FormatListNumberedRoundedIcon fontSize="large" />
      </BasicToolTips>

      <BasicToolTips
        func={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
        tooltip="Quote"
      >
        <FormatQuoteRoundedIcon  fontSize="large" />
      </BasicToolTips>
    </Box>
  );
}
