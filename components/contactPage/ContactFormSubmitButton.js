import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ContactFormSubmitButton(props) {

    //function to handle click
    function handleClick() {
        props.onClick();
    };

    return (
        <Stack spacing={2} direction="row">
            <Button onClick={handleClick} variant="contained" sx={{ "&:hover": { backgroundColor: "#ecb365" }, backgroundColor: "#202124", mt: 2 }}>Submit</Button>
        </Stack>
    );
};