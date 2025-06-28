import React from "react";
import Rating from "./Rating";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Box,
  useTheme,
} from "@mui/material";

const FactCard = ({ category, fact, century, phase, id, onFilterChange} ) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: 490, 
        height: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", 
        mx: "auto", // centers the card
        p: 1,
        border: "3px solid",
        borderColor: theme.palette.primary.dark,
        borderRadius: 5

      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ position: "relative", pt: 3, mt: -0.5 }}>
          {/* Rating in top-right corner */}
          <Box sx={{ position: "absolute", top: 0, right: 0 }}>
            <Rating factId={id} onFilterChange={onFilterChange}/>
          </Box>

          {/* Category centered below the rating */}
          <Typography
            variant="caption"
            color="primary"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              display: "block",
            }}
          >
            {category}
          </Typography>
        </Box>

        {/* Description */}
        <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
          {fact}
        </Typography>

        {/* Tags */}
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          {century && <Chip label={century} size="small" color="primary" />}
          <Box sx={{ flexGrow: 1 }} />
          {phase !== "General" && (
            <Chip
              label={phase}
              size="small"
              sx={{
                bgcolor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,

              }}
              variant="outlined"
              color="primary.light"
            />
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default FactCard;
