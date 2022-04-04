import React from "react";
import BasicTooltip from "./ToolTips";
import { Box } from "@mui/material";
// mui icons
import FormatAlignLeftRoundedIcon from "@mui/icons-material/FormatAlignLeftRounded";
import FormatAlignJustifyRoundedIcon from "@mui/icons-material/FormatAlignJustifyRounded";
import FormatAlignCenterRoundedIcon from "@mui/icons-material/FormatAlignCenterRounded";
import FormatAlignRightRoundedIcon from "@mui/icons-material/FormatAlignRightRounded";
import PlaylistRemoveRoundedIcon from "@mui/icons-material/PlaylistRemoveRounded";

export default function TextAlignMenu({ editor, fontSize }) {
  return (
    <Box>
      <BasicTooltip
        tooltip="Align Left"
        placement="top"
        func={() => editor?.chain().focus().setTextAlign("left").run()}
        className={editor?.isActive({ textAlign: "left" }) ? "is-active" : ""}
      >
        <FormatAlignLeftRoundedIcon fontSize={fontSize} />
      </BasicTooltip>
      <BasicTooltip
        tooltip="Align Center"
        func={() => editor?.chain().focus().setTextAlign("center").run()}
        className={editor?.isActive({ textAlign: "center" }) ? "is-active" : ""}
      >
        <FormatAlignCenterRoundedIcon fontSize={fontSize} />
      </BasicTooltip>
      <BasicTooltip
        tooltip="Align Right"
        placement="top"
        func={() => editor?.chain().focus().setTextAlign("right").run()}
        className={editor?.isActive({ textAlign: "right" }) ? "is-active" : ""}
      >
        <FormatAlignRightRoundedIcon fontSize={fontSize} />
      </BasicTooltip>
      <BasicTooltip
        tooltip="Justify"
        func={() => editor?.chain().focus().setTextAlign("justify").run()}
        className={
          editor?.isActive({ textAlign: "justify" }) ? "is-active" : ""
        }
      >
        <FormatAlignJustifyRoundedIcon fontSize={fontSize} />
      </BasicTooltip>
      <BasicTooltip
        tooltip="Unset Alignement"
        func={() => editor?.chain().focus().unsetTextAlign().run()}
      >
        <PlaylistRemoveRoundedIcon fontSize={fontSize} />
      </BasicTooltip>
    </Box>
  );
}
