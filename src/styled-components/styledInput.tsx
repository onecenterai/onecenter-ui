import { TextField, styled } from "@mui/material";

export const StyledInput = styled(TextField)(() => {
  return {
    "& .MuiInputBase-input": {
      padding: "6px 12px",
      boxShadow: "inset 0 1px 1px rgb(0 0 0 / 8%)",

      // "&:focus": {
      //   boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      //   borderColor: theme.palette.primary.main,
      // },
    },
  };
});
