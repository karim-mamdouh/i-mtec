//Components
import { Button, Paper, Stack, Typography } from "@mui/material";
import { TextFieldInput } from "../../atoms";
//Styles
import { searchFormStyles } from "./SearchForm.style";

export const SearchForm = () => (
  <Stack sx={searchFormStyles.container}>
    {/* Title */}
    <Typography>Email *</Typography>
    {/* Form */}
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
