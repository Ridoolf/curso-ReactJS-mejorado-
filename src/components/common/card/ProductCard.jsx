import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/D/M/DM9922-001_0.jpg"
        title={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Agregar al carrito
        </Button>
        <Button size="small">Ver mas</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
