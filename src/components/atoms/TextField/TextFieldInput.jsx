import { useState } from "react";
import { PropTypes } from "prop-types";
import {
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  FormHelperText,
} from "@mui/material";
import "./TextFieldInput.css";
import { Grid } from "@mui/material";
import { useMemo } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
function TextFieldInput({
  type = "text",
  placeholder = "",
  StartAdornment = null,
  EndAdornment = null,
  multiline = false,
  rows,
  className,
  onChange,
  error,
  value,
  labelStyle,
  label,
  InputProps,
  disabled,
  justifyContent,
  gridClass,
  bgColor,
  disableUnderline = false,
  sx,
  helperText,
  variant = "outlined",
  borderRadius = 0,
  ...props
}) {
  const defaultStyle = {
    color: "secondary",
    fontSize: "16px",
    lineHeight: "15px",
    mb: 2,
  };

  const [showPassword, setshowPassword] = useState(false);

  const mainLabelStyle = useMemo(() => {
    return labelStyle ? labelStyle : defaultStyle;
  }, [labelStyle]);

  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid
      container
      sx={{ position: "relative" }}
      justifyContent={justifyContent}
      className={gridClass}
    >
      {label && (
        <Typography variant="h3" sx={mainLabelStyle}>
          {label}
        </Typography>
      )}
      <TextField
        variant={variant}
        sx={{
          backgroundColor: bgColor,
          "&:focus-within fieldset, &:focus-visible fieldset": {
            border: `none !important`,
          },
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              borderRadius: "0 !important",
            },
          },
          ...sx,
        }}
        disabled={disabled}
        fullWidth
        multiline={multiline}
        rows={rows}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        className={className}
        error={error ? true : false}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        InputProps={{
          disableUnderline: disableUnderline,
          startAdornment: StartAdornment ? (
            <InputAdornment position="start">
              <>{StartAdornment}</>
            </InputAdornment>
          ) : null,
          endAdornment: (
            <InputAdornment position="end">
              <>
                {type === "password" ? (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? (
                      <Visibility
                        style={{ color: "secondary.main" }}
                        fontSize="small"
                      />
                    ) : (
                      <VisibilityOff
                        style={{ color: "secondary.main" }}
                        fontSize="small"
                      />
                    )}
                  </IconButton>
                ) : (
                  EndAdornment
                )}
              </>
            </InputAdornment>
          ),
        }}
        {...props}
      />
      {error ? (
        <FormHelperText sx={{ color: "error.main" }}>
          {helperText}
        </FormHelperText>
      ) : (
        ""
      )}
    </Grid>
  );
}

TextFieldInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  StartAdornment: PropTypes.element,
  EndAdornment: PropTypes.element,
  className: PropTypes.string,
};
export default TextFieldInput;
