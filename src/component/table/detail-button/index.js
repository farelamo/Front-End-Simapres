import React from "react";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export default (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { button, horizontal, onClick, disabled } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Button = button;
  return (
    <div>
      {button ? (
        <Button
          className={`detail-custom-btn ${disabled && "disabled"}`}
          onClick={onClick}
        >
          {props.children}
        </Button>
      ) : (
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          size="small"
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
      )}
      {!button && (
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{
            vertical: "top",
            horizontal: horizontal ? horizontal : "center",
          }}
          // keepMounted
          open={Boolean(anchorEl)}
          onClick={handleClose}
        >
          {props.children}
        </Menu>
      )}
    </div>
  );
};
