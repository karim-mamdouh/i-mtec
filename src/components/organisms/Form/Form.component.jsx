import { Button, Stack, TextField, Typography } from "@mui/material";
import { formStyles } from "./Form.style";
import React from "react";

const Form = ({ formControllers, maxWidth, btnTitle }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <Stack component="form" onSubmit={handleSubmit}>
      <Stack
        sx={{ ...formStyles.formContainer, maxWidth: maxWidth || "500px" }}
      >
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
      <Button type="submit" variant="contained" sx={formStyles.formSubmitBtn}>
        {btnTitle || "Submit"}
      </Button>
      {/* <Stack sx={formStyles.formSubmitContainer}></Stack> */}
    </Stack>
  );
};
export default Form;
