import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({ onClick, name, img }) {
    return (
        <Card className="menuCard" sx={{ maxWidth: 345 }} onClick={onClick}>
            <CardMedia
                component="img"
                alt={name}
                height="140"
                src={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
}