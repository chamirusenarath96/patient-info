import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: "100%",
        margin: "auto",
        borderRadius: 12,
        padding: 12,
    },
    media: {
        borderRadius: 6,
        maxHeight: "50%",
    },
}));

const BasicInfo = React.memo(function MusicCard(props) {
    const styles = useStyles();
    return (
        <Card className={cx(styles.root)}>
            <CardContent>
                <Grid container width={4}>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={3}>
                        <Typography
                            varient="h6"
                            style={{
                                textAlign: "center",
                                fontSize: 20,
                            }}
                        >
                            The image goes here
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            varient="h6"
                            style={{
                                textAlign: "center",
                                fontSize: 20,
                            }}
                        >
                            Basic info 1
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            varient="h6"
                            style={{
                                textAlign: "center",
                                fontSize: 20,
                            }}
                        >
                            Basic info 2
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
});
export default BasicInfo;
