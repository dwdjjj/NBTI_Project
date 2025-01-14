import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Link from "@mui/material/Link";


export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls="fade-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          margin: "4px",
          float: "right",
        }}
      >
        Menu
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/" underline="none">
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/Signin" underline="none">
            Sign In
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link href="./Signup" underline="none">
            Sign Up
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
