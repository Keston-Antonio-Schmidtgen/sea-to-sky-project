import * as React from "react";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";

// Icons
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';

export default function Users({ toggleClass }) {

  const iconSize = 'large'

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }} className={toggleClass}>
      <Box sx={{}}>
        <Box sx={{ display: "flex", alignItems: "flex-end",  }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} fontSize={iconSize} />
          <TextField id="input-with-sx" label="Username" variant="outlined" />
          <TextField id="input-with-sx" label="Full name" variant="outlined"  className='mx-5'/>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", my: 5}}>
          <EmailRoundedIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} fontSize={iconSize} />
          <TextField id="input-with-sx" label="With sx" variant="outlined" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <VpnKeyRoundedIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} fontSize={iconSize} />
          <TextField id="input-with-sx" label="Password" variant="outlined" />
        </Box>
      </Box>
    </Box>
  );
}
