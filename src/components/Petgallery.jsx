import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import ReactLoading from "react-loading"; // Make sure to import ReactLoading

const PetGallery = () => {
  const [dogImage, setDogImage] = useState("");
  const [catImage, setCatImage] = useState("");
  const [dogBreed, setDogBreed] = useState("");
  const [catFact, setCatFact] = useState("");
  const [dogFact, setDogFact] = useState(""); // Ensure dogFact is defined
  const [loading, setLoading] = useState(true);
  const [fetchingDog, setFetchingDog] = useState(false);
  const [fetchingCat, setFetchingCat] = useState(false);

  const fetchDogData = async () => {
    setLoading(true);
    setFetchingDog(true);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
      const breed = data.message.split("/")[4];
      setDogBreed(breed.replace("-", " "));
      await fetchDogFact(); // Fetch dog fact after getting the image
    } catch (error) {
      console.error("Error fetching dog data:", error);
    } finally {
      setFetchingDog(false);
      setLoading(false);
    }
  };

  const fetchCatData = async () => {
    setLoading(true);
    setFetchingCat(true);
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const data = await response.json();
      setCatImage(data[0].url);
      await fetchCatFact(); // Fetch cat fact after getting the image
    } catch (error) {
      console.error("Error fetching cat data:", error);
    } finally {
      setFetchingCat(false);
      setLoading(false);
    }
  };

  const fetchDogFact = async () => {
    try {
      const response = await fetch("https://dog-api.kinduff.com/api/facts");
      const data = await response.json();
      setDogFact(data.facts[0]); // Update dog fact state
    } catch (error) {
      console.error("Error fetching dog fact:", error);
    }
  };

  const fetchCatFact = async () => {
    try {
      const response = await fetch("https://meowfacts.herokuapp.com/");
      const data = await response.json();
      setCatFact(data.data[0]); // Update cat fact state
    } catch (error) {
      console.error("Error fetching cat fact:", error);
    }
  };

  useEffect(() => {
    fetchDogData();
    fetchCatData();
  }, []);

  return (
    <div className="container flex justify-center flex-col items-center mx-auto p-4">
      {loading && (
        <div className="flex justify-center my-10">
          <ReactLoading type="spin" color="#0000FF" height={50} width={50} />
        </div>
      )}

      <h1 className="text-center text-4xl font-bold mb-6">
        Dog and Cat Gallery
      </h1>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: "100%", boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image={dogImage || "https://via.placeholder.com/200"}
              alt="Random Dog"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Random Dog
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Breed: {dogBreed}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fact: {dogFact}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={fetchDogData}
                disabled={fetchingDog} // Disable button while fetching
                fullWidth
              >
                {fetchingDog ? "Fetching..." : "Fetch New Dog Image"}
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: "100%", boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image={catImage || "https://via.placeholder.com/200"}
              alt="Random Cat"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Random Cat
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fact: {catFact}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={fetchCatData}
                disabled={fetchingCat} // Disable button while fetching
                fullWidth
              >
                {fetchingCat ? "Fetching..." : "Fetch New Cat Image"}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default PetGallery;
