import React from "react";
import BasicTooltip from "./editorComponents/ToolTips";
import Box from "@mui/material/Box";

export default function hrBrOptions() {
  return (
    <Box className="menuButton mx-5">
      <BasicTooltip
        tooltip="Add horizontal line"
        func={() => editor.chain().focus().setHorizontalRule().run()}
      >
        {/* <HorizontalRuleRoundedIcon /> */}
        {"<hr/>"}
      </BasicTooltip>
      <BasicTooltip
        tooltip="Insert Line"
        onClick={() => editor.chain().focus().setHardBreak().run()}
      >
        insert new Line
      </BasicTooltip>
    </Box>
  );
}
