import React from "react";
import BasicToolTips from "./ToolTips";
import FormatClearRoundedIcon from "@mui/icons-material/FormatClearRounded";
import ClearAllRoundedIcon from '@mui/icons-material/ClearAllRounded';
import { Box } from "@mui/material";

export default function ClearOptions({ editor, fontSize }) {
  return (
    <Box
    sx={{
      bgcolor: 'text.secondary',
    }}
  
    >
      <BasicToolTips
        tooltip="Clear Text Style"
        func={() => editor?.chain().focus().unsetAllMarks().run()}
        className='text-white'
      >
        <FormatClearRoundedIcon fontSize={fontSize}
          color='inherit'
        />
      </BasicToolTips>
      <BasicToolTips
        tooltip="Clear Node"
        func={() => editor?.chain().focus().clearNodes().run()}
        className='text-white' 
      >
        <ClearAllRoundedIcon fontSize={fontSize}   />
      </BasicToolTips>
    </Box>
  );
}
