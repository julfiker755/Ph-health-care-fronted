import { Box, Button, Card, CardActionArea, CardActions, CardContent,Container, Grid, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from "next/image";
import React from "react";

async function TopRatedDoctors() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/doctor?page=1&limit=3`,
    { cache: "no-store" }
  );
  const { data: doctors } = await res.json();
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20,20,20,0.1)",
        clipPath: "polygon(0 0,100% 25%,100% 100%,0 75%)",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight={400}>
          Explore Treatments Across Specialties
        </Typography>
        <Typography component={"p"} fontWeight={300} fontSize={18}>
          Experienced Doctors Across All Specialties
        </Typography>
      </Box>
      <Container sx={{
        margin:"30px auto"
      }}>
        <Grid container spacing={2}>
          {doctors?.data?.map((doctor: any) => (
            <Grid item key={doctor.id} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                   <Box>
                      <Image src={doctor.profilePhoto} width={500} height={200} alt="doctors"/>
                   </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       {doctor.name}
                    </Typography>
                    <Typography>
                      {doctor.qualification},{doctor.designaton}
                    </Typography>
                    <Typography>
                       <LocationOnIcon/> {doctor.address}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{
                  justifyContent:"space-between",
                  padding:2,
                  paddingBottom:"20px",
                }}>
                  <Button>Book Now</Button>
                  <Button variant="outlined">View Profile</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{
          display:"flex",
          justifyContent:"center"
        }}>
        <Button sx={{
                marginTop:'15px'
               }} variant='outlined'>view All</Button>
        </Box>
      </Container>
    </Box>
  );
}

export default TopRatedDoctors;
