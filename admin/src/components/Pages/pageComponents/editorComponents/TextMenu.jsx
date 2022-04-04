import React from "react";
import BasicTooltip from "./ToolTips";
import { Box } from "@mui/material";

// mui icons
import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded';
import FormatItalicRoundedIcon from '@mui/icons-material/FormatItalicRounded';
import StrikethroughSRoundedIcon from '@mui/icons-material/StrikethroughSRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';


export default function textMenu({editor, fontSize = 'large'}) {
  return (
    <Box>
      <BasicTooltip
        func={() => editor?.chain().focus().toggleBold().run()}
        className={editor?.isActive("bold") ? "is-active" : ""}
        tooltip='Bold'
      >
        <FormatBoldRoundedIcon fontSize={fontSize} />
      </BasicTooltip>
      <BasicTooltip
        func={() => editor?.chain().focus().toggleItalic().run()}
        className={editor?.isActive("italic") ? "is-active" : ""}
        tooltip='Italic'
      >
        <FormatItalicRoundedIcon fontSize={fontSize} />
      </BasicTooltip>
      <BasicTooltip
        func={() => editor?.chain().focus().toggleStrike().run()}
        className={editor?.isActive("strike") ? "is-active" : ""}
        tooltip='Strike Through'
      >
        <StrikethroughSRoundedIcon  fontSize={fontSize} />
      </BasicTooltip>
      <BasicTooltip
          func={() => editor.chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active" : ""}
          tooltip='code'
        >
          <CodeRoundedIcon fontSize={fontSize}/>
        </BasicTooltip>
    </Box>
  );
}
