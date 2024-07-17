import { Box, Grid } from "@mui/material";

export const GridComponent = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: { xs: "lightblue", sm: "violet", md: "yellow" },
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={10} md={6}>
            <h2 style={{ border: "2px solid red", width: "100%" }}>Hola 1</h2>
          </Grid>
          <Grid item xs={12} sm={10} md={6}>
            <h2 style={{ border: "2px solid blue", width: "100%" }}>Hola 2</h2>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
