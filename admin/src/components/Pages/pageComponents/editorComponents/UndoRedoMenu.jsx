import React from "react";
import { Box } from "@mui/material";
import BasicToolTips from "./ToolTips";
// MUI icons
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import RedoRoundedIcon from "@mui/icons-material/RedoRounded";

export default function UndoRedoMenu({ editor, fontSize }) {
  return (
    <Box>
      <BasicToolTips
        tooltip="Undo"
        onClick={() => editor.chain().focus().undo().run()}
        
      >
        <UndoRoundedIcon fontSize={fontSize} />
      </BasicToolTips>
      <BasicToolTips
        tooltip="Redo"
        onClick={() => editor.chain().focus().redo().run()}
      >
        <RedoRoundedIcon fontSize={fontSize} />
      </BasicToolTips>
    </Box>
  );
}
