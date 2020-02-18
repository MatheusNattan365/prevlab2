import React, {useEffect} from 'react';
import MaterialTable from 'material-table';
import jsPDF from '../services/jspdf';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';

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
    }
});

function Content(props) {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Nome', field: 'nome' },
            { title: 'Protocol', field: 'id' },
        ],
        data: [],
    });

    useEffect(() => {
    getUsers()

    }, [])

    async function getUsers(){
        try {
          const response = await axios.get('clientes.json');
          let resposta = []
          for (let x in response.data){
            response.data[x].id = x
            resposta.push(response.data[x])
          }
        setState({...state, data: resposta})
        } catch (error) {
            console.log(error);
        }
    };

    async function printPaciente(data){
        try {
            for(let x in data){
                jsPDF.gerarDoc(data[x])
            }
        } catch (error) {
            console.log(error);
        }
    }


    const { classes } = props;

    return (
        <Paper className={classes.paper}>
            <AppBar className={classes.searchBar} position="static" elevation={0}>
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Typography className={classes.textHeader}>Relatórios</Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.contentWrapper}>
                <MaterialTable
                    title="Pacientes"
                    columns={state.columns}
                    data={state.data}
                    options={{
                        selection: true
                      }}
                      actions={[
                        {
                          tooltip: 'Remove All Selected Users',
                          icon: 'print',
                          onClick: (evt, data) => printPaciente(data)
                        }
                      ]}
                />

            </div>
        </Paper>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);