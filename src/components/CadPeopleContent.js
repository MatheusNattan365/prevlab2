import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import BtnSearchPacient from '../components/btnSearchPacient';
import axios from '../services/axiosConfig';

const styles = theme => ({
    paper: {
        maxWidth: 936,
        margin: 'auto',
        overflow: 'hidden',
    },
    searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    block: {
        display: 'block',
    },
    addUser: {
        margin: theme.spacing(1),
        color: '#FFF'
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '40px 16px',
    },
    textHeader: {
        color: '#FFF'
    },
    formRoot: {
        width: 500,
        maxWidth: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(1),
    },
    formTextRoot: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    btnsForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    numbsInput: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    btnInput:{
        display: 'flex',
        flexDirection:'row',
        alignItems:'center'

    }
});

function PeopleContent(props) {
    const [paciente, setPaciente] = React.useState({
        id: '',
        nome: '',
        idade: '',
        nascimento: '',
        solicitante: '',
        convenio: '',
        ada: '',
        cne: '',
        dd: '',
        ac: '',
        cm: '',
        ce: '',
        cem: '',
        fv: '',
        ae: '',
        cit: '',
        conclusao: '',
        conclusaoObs: '',
        dataDaColeta: ''
    })
    const { classes } = props;


    async function saveOrUpdate() {
        if (
            paciente.nome &&
            paciente.convenio &&
            paciente.solicitante
        ) {
            let metodo = paciente.id ? "patch" : "post";
            let finalUrl = paciente.id
                ? `/clientes/${paciente.id}.json`
                : `clientes.json`;
            axios[metodo](finalUrl, paciente).then(res => {
                if (res.config.method === "post") {
                    alert("Cliente cadastrado com sucesso!");
                } else {
                    alert("Cliente atualizado com sucesso!");
                }
                limparCampos();
            });
        }
    }

    function limparCampos(){
        setPaciente({
            id: '',
            nome: '',
            idade: '',
            nascimento: '',
            solicitante: '',
            convenio: '',
            ada: '',
            cne: '',
            dd: '',
            ac: '',
            cm: '',
            ce: '',
            cem: '',
            fv: '', 
            ae: '',
            cit: '',
            conclusao: '',
            conclusaoObs: '',
            dataDaColeta: ''
        })
    }

    return (
        <Paper className={classes.paper}>
            <AppBar className={classes.searchBar} position="static" elevation={0}>
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Typography className={classes.textHeader}>Cadastro de Pessoas</Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.contentWrapper}>
                <Typography color="textSecondary" align="center">
                    {paciente.id ? `${paciente.id}` : null}
                </Typography>

                <form className={classes.formRoot} noValidate autoComplete="off">
                    <TextField
                        className={classes.formTextRoot}
                        fullWidth
                        id="nome-paciente"
                        label="Nome"
                        variant="outlined"
                        value={paciente.nome}
                        onChange={evt => setPaciente({ ...paciente, nome: evt.target.value })}
                    />
                    <div className={classes.numbsInput}>
                        <TextField
                            id="idade-paciente"
                            label="Idade"
                            variant="outlined"
                            type="number"
                            value={paciente.idade}
                            onChange={evt => setPaciente({ ...paciente, idade: evt.target.value })}
                        />
                        <TextField
                            id="nascimento-paciente"
                            variant="outlined"
                            type="date"
                            helperText="Data de Nascimento"
                            value={paciente.nascimento}
                            onChange={evt => setPaciente({ ...paciente, nascimento: evt.target.value })}
                        />
                    </div>

                    <TextField
                        fullWidth
                        className={classes.formTextRoot}
                        id="solicitante-paciente"
                        label="Solicitante"
                        variant="outlined"
                        value={paciente.solicitante}
                        onChange={evt => setPaciente({ ...paciente, solicitante: evt.target.value })}
                    />
                    <TextField
                        fullWidth
                        className={classes.formTextRoot}
                        id="convenio-paciente"
                        label="Convênio"
                        variant="outlined"
                        value={paciente.convenio}
                        onChange={evt => setPaciente({ ...paciente, convenio: evt.target.value })}
                    />
                    <div className={classes.btnsForm}>
                        <Button variant="contained" fullWidth color="primary" onClick={() => saveOrUpdate()} className={classes.addUser}>
                            {paciente.id ? 'ATUALIZAR' : 'CADASTRAR'}
                        </Button>
                        <div className={[classes.btnInput]}>
                            <Button variant="contained" color="primary" onClick={() => limparCampos()} className={classes.addUser}>
                                RESETAR CAMPOS
                            </Button>
                            <BtnSearchPacient setaPaciente={setPaciente}  />
                        </div>
                    </div>

                </form>

            </div>
        </Paper>
    );
}

PeopleContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PeopleContent);