import React, { useState, useContext } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import { Link } from "react-router-dom";

export default function ButtonT({ to }) {
  const [selected, setSelected] = useState(false);

  let ch = "";
  if (to.length === 1) {
    ch = `Question${to}`;
  } else {
    ch = `Career${to.replace(/[^0-9]/g, "")}`;
  }

  return (
    <>
      <ToggleButton
        size="small"
        value="check"
        selected={selected}
        onClick={() => {
          setSelected(!selected);
          console.log(to);
        }}
      >
        <Link to={ch} underline="none">
          <CheckIcon />
          <span>클릭!</span>
        </Link>
      </ToggleButton>
    </>
  );
}
