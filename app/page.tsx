"use client";

import { useState, useEffect } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, InputLabel, Stack, Typography } from "@mui/material";

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
        <Typography
          variant="body2"
          p={4}
          textAlign="center"
          color="text.secondary"
        >
          Calculate the date your parent is exactly twice your age. This would
          be where you are the age your parent was when they had you!
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={parent}
            onChange={(v) => setParent(v)}
            label="Parent's birthdate"
          />
          <DatePicker
            value={me}
            onChange={(v) => setMe(v)}
            label="Child's birthdate"
          />
        </LocalizationProvider>
        {result && (
          <>
            <Typography variant="h6">Result:</Typography>
            <Typography variant="body2">
              {result.toLocaleDateString()}
            </Typography>
          </>
        )}
      </Stack>
    </Box>
  );
}
