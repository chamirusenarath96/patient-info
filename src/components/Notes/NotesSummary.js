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
const NotesSummary = () => {
    const styles = useStyles();
    return (
        <Card className={cx(styles.root)}>
            <CardContent>
                <Typography varient="h6"
                            style={{
                                textAlign: "center",
                                fontSize: 20,
                            }}>
                    This is where the Patients NotesSummary Shows up including previous medicine and other stuff
                </Typography>
            </CardContent>
        </Card>
    );
}

export default NotesSummary
