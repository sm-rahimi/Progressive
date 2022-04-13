import Link from 'next/link'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useState} from "react";


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

    const [fullName, setFullName] = useState('');
    const [pro, setPro] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [workXP, setWorkXP] = useState('');
    const [userid, setUserid] = useState('');

    const isJsonString = (str) => {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    async function handleClick() {
        const res = await fetch(`/api/demo`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({fullName, pro, age, sex, workXP, userid})
        })
        const data = await res.json();
        window.sessionStorage.setItem("userid", userid);

        if (isJsonString(data)) {
            console.log("json!!!!!!");
            console.log(data);
        } else {
            console.log('successfully logged in')
            console.log(data)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" dir="rtl">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar>
                        P
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        مشخصات دموگرافیک تکمیل کننده پرسشنامه
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} dir="rtl">
                                <TextField
                                    autoComplete="given-name"
                                    name="fullName"
                                    required
                                    fullWidth
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    id="fullName"
                                    label="نام و نام خانوادگی"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    value={pro}
                                    onChange={(e) => setPro(e.target.value)}
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
                                    value={age}
                                    onChange={(e) => setAge(e.target.value.toString())}
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
                                    value={sex}
                                    onChange={(e) => setSex(e.target.value)}
                                    id="sex"
                                    label="جنسیت"
                                    name="sex"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    value={workXP}
                                    onChange={(e) => setWorkXP(e.target.value.toString())}
                                    id="workXP"
                                    type="number"
                                    label="تجربه کاری"
                                    name="workXP"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    value={userid}
                                    onChange={(e) => setUserid(e.target.value.toString())}
                                    id="userid"
                                    type="number"
                                    label="کد کاربری"
                                    name="userid"
                                />
                            </Grid>
                        </Grid>
                        <Link href="/question/1">
                            <a>
                                <Button
                                    onClick={handleClick}
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    sx={{mt: 3, mb: 2}}
                                >
                                    ثبت اطلاعات
                                </Button></a></Link>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}