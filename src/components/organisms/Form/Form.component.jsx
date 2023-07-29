import { Button, Stack, TextField } from "@mui/material";
import { formStyles } from "./Form.style";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <Stack
      component="form"
      sx={formStyles.formContainer}
      onSubmit={handleSubmit}
    >
      <TextField
        id="firstName"
        name="firstName"
        label="First Name *"
        variant="standard"
        sx={{ ...formStyles.gridInput, ...formStyles.input }}
      />
      <TextField
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
      />

      <Stack sx={formStyles.formSubmitContainer}>
        <Button type="submit" variant="contained" sx={formStyles.formSubmitBtn}>
          Submit
        </Button>
      </Stack>
    </Stack>
  );
};
export default Form;
