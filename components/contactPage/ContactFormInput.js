import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function ContactFormInput(props) {
    //change theme to cusomtize focus outline color
    const theme = createTheme({
        palette: {
            outline: {
                main: "#ecb365",
            },
        },
    });

    //function to track changes to inputs
    function handleChange(evt) {
        props.onChange(evt.target.value);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                component="form" sx={{ "& > :not(style)": { m: 1, width: "800px", backgroundColor: "white", }, "&:focus": { borderColor: "red" } }} noValidate autoComplete="off"
            >
                {props.multiLine ? (<TextField id="filled-multiline-static" label={props.label} multiline rows={4} variant="filled" color="outline" required onChange={handleChange} />) : (<TextField id="filled-basic" label={props.label} variant="filled" color="outline" required onChange={handleChange} />)}
            </Box>
        </ThemeProvider>
    );
};