import { Button, Paper, Stack, Typography } from "@mui/material";
import { TextFieldInput } from "../../atoms";
import { searchFormStyles } from "./SearchForm.style";

const SearchForm = () => {
  return (
    <Stack sx={searchFormStyles.container}>
      <Typography>Email *</Typography>
      <Paper component="form" sx={searchFormStyles.form}>
        <TextFieldInput
          sx={searchFormStyles.inputField}
          InputProps={{
            tabIndex: -1,
          }}
        />

        <Button variant="outline" sx={searchFormStyles.submitBtn}>
          Send
        </Button>
      </Paper>
    </Stack>
  );
};

export default SearchForm;
