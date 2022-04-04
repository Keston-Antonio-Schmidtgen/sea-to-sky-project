import { useState } from "react";
import "./editorOptions.scss";
import BasicTooltip from "./editorComponents/ToolTips";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { palette } from "@mui/system";
// import Menu Components

import HeadingMenu from "./editorComponents/HeadingMenu";
import TextMenu from "./editorComponents/TextMenu";
import TextAlignMenu from "./editorComponents/TextAlignMenu";
import UndoRedoMenu from "./editorComponents/UndoRedoMenu";
import ListOptions from "./editorComponents/ListOptions";
import ClearOptions from "./editorComponents/ClearOptions";

// import icon

import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";
import TitleRoundedIcon from "@mui/icons-material/TitleRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

const MenuBar = ({ editor }) => {
  const [isHover, setIsHover] = useState(false);

  if (!editor) {
    return null;
  }

  return (
    <Box
      className="menuBar mt-5"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // width: 200,
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: 1,
        bgcolor: "background.paper",
        color: "text.secondary",
        "& svg": {
          m: 1.5,
        },
        "& hr": {
          mx: 0.5,
          height: "initial",
        },
        "& .MuiFilledInput-input": { padding: 0, cursor: "pointer" },
      }}
    >
      {/* Undo Redo */}
      <Box className="d-flex align-items-center">
        <Box className="menuButton">
          <UndoRedoMenu editor={editor} fontSize="large" />
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />

        {/* Color PIcker */}
        <TextField
          variant="filled"
          size="large"
          type="color"
          className="mx-5"
          onInput={(event) =>
            editor.chain().focus().setColor(event.target.value).run()
          }
          value={editor.getAttributes("textStyle").color}
          defaultValue="Pick Color"
          sx={{
            width: 100,
            pt: 0,
            margin: 0,
            "& .MuiTextField-root": { p: 0 },
          }}
        />
        <Divider orientation="vertical" variant="middle" flexItem />

        {/* Heading Options */}
        <Box>
          <BasicTooltip
            tooltip="Title"
            func={() => setIsHover(!isHover)}
            // onBlur={(e) => setIsHover(!isHover)}
            role="button"
            className="menuButton"
          >
            <TitleRoundedIcon fontSize="large" />

            <ArrowDropDownRoundedIcon fontSize="large" />
          </BasicTooltip>
          {isHover ? (
            <HeadingMenu
              onClick={() => setIsHover(!isHover)}
              editor={editor}
              styleHeading={{ zIndex: 10 }}
            />
          ) : (
            ""
          )}
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        {/* Texts Options */}
        <Box className="menuButton textMenu" role="button">
          <TextMenu editor={editor} />
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        {/* Lists Options */}
        <Box className="menuButton textMenu" role="button">
          <ListOptions editor={editor} />
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />

        {/* Text Align */}

        <Box className="menuButton textAlignMenu">
          <TextAlignMenu editor={editor} fontSize="large" />
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
      </Box>
      {/* Clear options */}
      <Box>
        <Box
          sx={{
            bgcolor: "text.secondary",
            color: "text.primary",
            "& .css-78trlr-MuiButtonBase-root-MuiIconButton-root:hover": {
              bgcolor: "#ffffff",
              color: "#292929 !important",
            },
          }}
        >
          <ClearOptions editor={editor} fontSize="large" />
        </Box>
      </Box>
    </Box>
  );
};

export default MenuBar;
