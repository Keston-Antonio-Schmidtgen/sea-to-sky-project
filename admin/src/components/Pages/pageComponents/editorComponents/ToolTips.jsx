import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function BasicTooltip({
  children,
  tooltip,
  placement = "top",
  func,
  className,
}) {
  return (
    <Tooltip title={tooltip} placement={placement}>
      <IconButton onClick={func} className={className} >
        {children}
      </IconButton>
    </Tooltip>
  );
}
