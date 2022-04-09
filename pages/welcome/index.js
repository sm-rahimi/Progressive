import Link from 'next/link'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" dir="rtl">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        مشخصات دموگرافیک تکمیل کننده پرسشنامه
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} dir="rtl">
                                <TextField
                                    autoComplete="given-name"
                                    name="fullName"
                                    required
                                    fullWidth
                                    id="fullName"
                                    label="نام و نام خانوادگی"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="pro"
                                    label="تخصص"
                                    name="pro"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="age"
                                    type="number"
                                    label="سن"
                                    name="age"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="sex"
                                    label="جنس"
                                    id="sex"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="workXP"
                                    type="number"
                                    label="تجربه کاری"
                                    name="workXP"
                                />
                            </Grid>
                        </Grid>
                        <Link href="/question/1">
                            <a>
                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            ثبت اطلاعات
                        </Button></a></Link>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}