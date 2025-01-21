import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FunkoProps } from "../../types/funko";
import EditFunkoButton from "../EditFunkoButton/EditFunkoButton";


const FunkoCard: React.FC<FunkoProps> = ({ funkos, setFunkos }) => {

  return (
    <>
      {funkos.map((funko) => {
        return (
          <Card key={funko._id.toString()} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: 140 }}
              image={funko.imageUrl}
              alt={funko.character}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {funko.character}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Series: {funko.series}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Number: {funko.number}
              </Typography>
              <EditFunkoButton funko={funko} setFunkos={setFunkos} />
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default FunkoCard;