import { Button, Paper, Stack, Typography } from "@mui/material";
import TextFieldInput from "../../atoms/TextField/TextFieldInput";
function SearchForm({ placeholder, color }) {
  return (
    <Stack
      sx={{
        flexGrow: 1,
        gap: "4px",
      }}
    >
      <Typography>Email *</Typography>
      <Paper
        component="form"
        sx={{
          p: 0,
          border: "1px solid #fff",
          borderRadius: 0,
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: "330px",
          height: "48px",
          backgroundColor: "transparent",
        }}
      >
        <TextFieldInput
          sx={{
            flex: 1,
            "& .MuiInputBase-input": {
              paddingY: "0",
              color: "#fff",
            },
          }}
        />

        <Button
          variant="outline"
          sx={{
            borderLeft: "1px solid #fff",
            paddingY: "11px",
            paddingX: "25px",
          }}
        >
          Send
        </Button>
      </Paper>
    </Stack>
  );
}

export default SearchForm;
