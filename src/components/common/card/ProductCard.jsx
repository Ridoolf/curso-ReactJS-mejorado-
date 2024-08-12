import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const Navigate = useNavigate();

  const goTo = () => {
    Navigate("/carrito");
  };

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
        <Button size="small" variant="contained" onClick={goTo}>
          Agregar al carrito
        </Button>
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small">Ver mas</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
