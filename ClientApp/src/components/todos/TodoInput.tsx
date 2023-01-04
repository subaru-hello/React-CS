import { ChangeEvent } from "react";
import { Fab, Stack, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  text: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => Promise<void>;
};

export const TodoInput = ({ text, onChange, onClick }: Props) => {
  return (
    <Stack direction="row" spacing={2}>
      <TextField
        sx={{ width: "100%", marginBottom: 2 }}
        size="small"
        variant="outlined"
        onChange={onChange}
        value={text}
      />
      <Fab size="small" color="primary" onClick={onClick}>
        <AddIcon />
      </Fab>
    </Stack>
  );
};
