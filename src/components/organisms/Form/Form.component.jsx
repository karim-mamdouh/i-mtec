//MUI
import { Button, Stack, TextField } from "@mui/material";
//React
import PropTypes from "prop-types";
//Styles
import { formStyles } from "./Form.style";

export const Form = ({ formControllers, maxWidth, btnTitle }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
  };

  return (
    <Stack component="form" onSubmit={handleSubmit}>
      <Stack
        sx={{ ...formStyles.formContainer, maxWidth: maxWidth || "500px" }}
      >
        {/* Form inputs */}
        {formControllers.map((item, index) => (
          <TextField
            key={index}
            id={item.id}
            name={item.name}
            label={item.label}
            InputLabelProps={{ shrink: true }}
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={
              item.style === "half"
                ? { ...formStyles.input, ...formStyles.gridInput }
                : formStyles.input
            }
          />
        ))}
      </Stack>

      {/* <TextField
        id="lastName"
        name="lastName"
        label="Last Name *"
        variant="standard"
        sx={{ ...formStyles.gridInput, ...formStyles.input }}
      />
      <TextField
        id="phone"
        name="phone"
        label="Phone *"
        variant="standard"
        sx={{ ...formStyles.gridInput, ...formStyles.input }}
      />

      <TextField
        id="answer"
        name="answer"
        label="Add Answer here"
        variant="standard"
        sx={{ ...formStyles.gridInput, ...formStyles.input }}
      />
      <TextField
        id="repeatAnswer"
        name="repeatAnswer"
        label="Add Answer here *"
        variant="standard"
        fullWidth
        sx={formStyles.input}
      />
      <TextField
        id="message"
        name="message"
        label="Type your message here..."
        variant="standard"
        fullWidth
        sx={formStyles.input}
      /> */}

      {/* Submit button */}
      <Button type="submit" variant="contained" sx={formStyles.formSubmitBtn}>
        {btnTitle || "Submit"}
      </Button>
      {/* <Stack sx={formStyles.formSubmitContainer}></Stack> */}
    </Stack>
  );
};

Form.propTypes = {
  formControllers: PropTypes.array,
  maxWidth: PropTypes.string,
  btnTitle: PropTypes.string,
};
