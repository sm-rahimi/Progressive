import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import dataTableObj from "../../data/DataTable.ts";

import {useEffect, useState} from "react";
import {useRouter} from "next/router";


const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const createData = (rowValue, typo, key) => {
    return {rowValue, typo, key};
}

// const filledDataCreate = (question1, question2, id) => {
//     return {question1, question2, id};
// }

const dataDispatch = (question, pageStep) => {
    let dataDispatched = [];
    if (question !== null)
        for (let i = 0; i < question.length; i++) {
            if (question[i].idq !== null && question[i].str !== null) {
                dataDispatched.push(createData(`${pageStep}-${question[i].idq}-${question[i].str}`,
                    'h5', `${pageStep}-${question[i].idq}`));
                if (question[i].values !== null)
                    for (let j = 0; j < question[i].values.length; j++) {
                        dataDispatched.push(createData(`${pageStep}-${question[i].idq}-${j + 1}-${question[i].values[j]}`,
                            'h6', `${pageStep}-${question[i].idq}-${j + 1}`))
                    }
            }
        }
    return dataDispatched;
}

export default function Id() {
    const routeId = useRouter();

    const [pageStep, setPageStep] = useState(0);
    const [pageData, setPageData] = useState({});
    const [allPageData, setAllPageData] = useState({});

    const [nazarat, setNazarat] = useState('');
    const [pishnehad, setPishnehad] = useState('');


    useEffect(() => {
        if (!isNaN(routeId.query.id)) {
            if (parseInt(routeId.query.id) < 25) {
                setPageStep(parseInt(routeId.query.id) - 1);
            }
        }
    }, [routeId]);

    useEffect(()=>{

    })


    async function saveData(key, pData) {
        const res = await fetch(`/api/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({userid: window.sessionStorage.getItem("userid"), key, data: pData})
        })
    }

    const backButtonClick = () => {
        if (pageStep > 0) {
            let backStep = pageStep - 1;
            setPageStep(backStep);
            setPageData({});
            setNazarat('');
            setPishnehad('');
        }
    };

    const nextButtonClick = () => {
        if (pageStep < 23) {
            let nextStep = pageStep + 1;
            setPageStep(nextStep);
            for (const [key, value] of Object.entries(pageData)) {
                saveData(key, value);
                setPageData({});
            }
            setNazarat('');
            setPishnehad('');
        }
        else {
            if(routeId.isReady)
                routeId.push('/finished');
        }
    }

    const handleChangeNazarat = (e) => {
        setNazarat(e.target.value);
        let temp = pageData;
        temp[e.target.name] = e.target.value;
        setPageData(temp);
    }

    const handleChangePishnehad = (e) => {
        setPishnehad(e.target.value);
        let temp = pageData;
        temp[e.target.name] = e.target.value;
        setPageData(temp);
    }

    const handleChange = (e) => {
        // if (e.target.name in pageData) {
        let temp = pageData;
        let tempAll = allPageData;
        temp[e.target.name] = e.target.value;
        tempAll[e.target.name] = e.target.value;
        setPageData(temp);
        setAllPageData(tempAll);
        // } else {
        //     let temp = pageData;
        //     temp[e.target.name] = e.target.value;
        //     setPageData(temp);
        // }
    }
    const handleAllValue = (name) => {
        if(allPageData[name])
        {
            return parseInt(allPageData[name]);
        }
        else
        {
            return '';
        }
    }
    console.log(allPageData)

    // console.log(dataDispatch(dataTableObj[0].questions));
    const PAGE_DATA = dataTableObj[pageStep];
    const dataDispatch1 = dataDispatch(PAGE_DATA.questions, PAGE_DATA.id);
    return (
        routeId.isReady && <div dir="rtl">
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right"><Typography
                                variant="h4">{PAGE_DATA.id}-{PAGE_DATA.title}</Typography></StyledTableCell>
                            <StyledTableCell align="right"><Typography variant="h4">رد یا
                                قبول</Typography></StyledTableCell>
                            <StyledTableCell align="right"><Typography variant="h4">رتبه ۵-۱</Typography>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataDispatch1.map((row) => (
                            <StyledTableRow key={row.rowValue}>
                                <StyledTableCell component="th" scope="row" align="right">
                                    <Typography variant={row.typo} component="div">
                                        {row.rowValue}
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <TextField
                                        name={`radYaGhabul-${row.rowValue}`}
                                        onChange={(e) => handleChange(e)}
                                        defaultValue={handleAllValue(`radYaGhabul-${row.rowValue}`)}
                                        id="outlined-number"
                                        label="0-1"
                                        type="number"/>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <TextField
                                        name={`rotbe-${row.rowValue}`}
                                        onChange={(e) => handleChange(e)}
                                        defaultValue={handleAllValue(`rotbe-${row.rowValue}`)}
                                        id="outlined-number"
                                        label="0-5"
                                        type="number"/>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row" align="right">
                                <Typography variant="h4" component="div">
                                    نظرات
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row" align="right" colSpan="2">
                                <TextField
                                    fullWidth={true}
                                    multiline={true}
                                    name={`nazarat-${pageStep}`}
                                    onChange={(e) => handleChangeNazarat(e)}
                                    value={nazarat}
                                    colSpan="6"
                                    id="outlined-number"
                                    label="اینجا بنویسید"
                                    type="number"/>
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row" align="right">
                                <Typography variant="h4" component="div">
                                    عناصر داده پیشنهادی
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row" align="right" colSpan="2">
                                <TextField
                                    fullWidth={true}
                                    multiline={true}
                                    name={`pishnehad-${pageStep}`}
                                    value={pishnehad}
                                    onChange={(e) => handleChangePishnehad(e)}
                                    colSpan="6"
                                    id="outlined-number"
                                    label="اینجا بنویسید"
                                    type="number"/>
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{flexGrow: 1}} mt={2}>
                <Grid container spacing={2}>
                    <Grid item xs align="center">
                        <Button
                            variant="outlined"
                            onClick={() => backButtonClick()}
                        >سوال قبلی</Button>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs align="center">
                        <Button
                            onClick={() => nextButtonClick()}
                            variant="outlined"
                        >سوال بعدی</Button>
                    </Grid>
                </Grid>
            </Box>

        </div>
    );
}
