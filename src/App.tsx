import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Blog from "./Blog";
import {CONFIG_SITE_OWNER, CONFIG_SITE_URL} from "./config";

function Copyright() {
    return (
        <Typography
            variant="body2"
            align="center"
            sx={{
                color: 'text.secondary',
            }}
        >
            {'Copyright © '}
            <Link color="inherit" href={CONFIG_SITE_URL}>
                {CONFIG_SITE_OWNER}
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}

export default function App() {
    return (
        <Container maxWidth="lg">
            <Blog/>
            <Copyright/>
        </Container>
    );
}
