import Head from 'next/head'
import { Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

export default function Finished() {
    return (
        <div>
            <Head>
                <title>thank you</title>
            </Head>
            <div align="center" dir="rtl">
                <Card sx={{maxWidth: 500}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="400"
                            image="/finished.png"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="success">
                                Your data saved
                            </Typography>
                            <Typography variant="body2" color="text.secondary" dir="rtl">
                                با تشکر
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )
}
