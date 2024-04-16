"use client";

import { useState, useEffect } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Box,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { format, isValid } from "date-fns";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#f5c2e7" },
    text: { primary: "#cdd6f4" },
  },
});
const calculateDate = (parent: Date, me: Date) =>
  new Date(Math.abs(me.getTime() - parent.getTime()) + me.getTime());

export default function Main() {
  const [result, setResult] = useState<Date | null>(null);
  const [parent, setParent] = useState<Date | null>(null);
  const [me, setMe] = useState<Date | null>(null);
  useEffect(() => {
    if (parent && me) {
      setResult(calculateDate(parent, me));
    }
  }, [parent, me]);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 6,
        }}
      >
        <Stack
          spacing={2}
          sx={{
            maxWidth: 600,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Typography variant="h4">Genuflection Day</Typography>
          <Typography variant="body2" p={4} textAlign="center" color="#a6adc8">
            Calculate the date your parent is exactly twice your age. This would
            be where you are the age your parent was when they had you!
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={parent}
              onChange={(v) => setParent(v)}
              label="Parent's birthdate"
              sx={{ width: "75%" }}
            />
            <DatePicker
              value={me}
              onChange={(v) => setMe(v)}
              label="Child's birthdate"
              sx={{ width: "75%" }}
            />
          </LocalizationProvider>
          {isValid(result) && result && (
            <Stack alignItems="center">
              <Typography variant="h6">Result:</Typography>
              <Typography
                variant="h6"
                sx={{
                  marginTop: 0,
                  border: "1px solid #f5e0dc",
                  padding: 1.5,
                  borderRadius: 2,
                }}
              >
                {format(result, "MMMM do yyyy")}
              </Typography>
            </Stack>
          )}
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
