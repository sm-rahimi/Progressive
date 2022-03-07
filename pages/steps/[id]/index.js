import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import dataTableObj from "../../../data/DataTable.ts";
import {useState} from "react";


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

const createData = (modiriat, typo, key) => {
    return {modiriat, typo, key};
}

const filledDataCreate = (question1, question2, id) => {
    return {question1, question2, id};
}

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


const rows = [

    createData('Frozen yoghurt', 1),
    createData('Ice cream sandwich', 2),
    createData('Eclair', 26),
    createData('Cupcake', 30),
    createData('Gingerbread', 35),
];


export default function Index() {
    const [pageStep, setPageStep] = useState(0);

    const backButtonClick = () => {
        if (pageStep !== 0) {
            let backStep = pageStep - 1;
            setPageStep(backStep);
        }
    };

    const nextButtonClick = () => {
        if (pageStep !== 37) {
            let nextStep = pageStep + 1;
            setPageStep(nextStep);
        }
    };

    const onChangeQuestion1 = () => {

    }

    const onChangeQuestion2 = () => {

    }

    // console.log(dataDispatch(dataTableObj[0].questions));
    const PAGE_DATA = dataTableObj[pageStep];
    const dataDispatch1 = dataDispatch(PAGE_DATA.questions, PAGE_DATA.id);
    let filledData = [];
    let question1Id = "";
    let question2Id = "";
    return (
        <div dir="rtl">
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
                            <StyledTableRow key={row.modiriat}>
                                <StyledTableCell component="th" scope="row" align="right">
                                    <Typography variant={row.typo} component="div">
                                        {row.modiriat}
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <TextField
                                        onChange={}
                                        id="outlined-number"
                                        label="0-1"
                                        type="number"/>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <TextField
                                        onChange={}
                                        id="outlined-number"
                                        label="0-5"
                                        type="number"/>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
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
