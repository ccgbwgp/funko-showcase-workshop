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
              <Typography gutterBottom variant="h2" component="div" sx={{ fontSize: '2em', fontWeight: 'bold' }}>
                {funko.source}
              </Typography>
              <Typography gutterBottom variant="h3" component="div" sx={{ fontSize: '1em' }}>
                {funko.character}
              </Typography>
            </CardContent>
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
              <Typography variant="body2" color="text.secondary">
                Released: {funko.yearReleased}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Number in Line: {funko.numberInLine}
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