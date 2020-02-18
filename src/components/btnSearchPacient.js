import React, { useEffect } from 'react';
import MaterialTable from 'material-table';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import axios from '../services/axiosConfig';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ setaPaciente, }) {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
        columns: [
            { title: 'Nome', field: 'nome' },
            { title: 'Protocol', field: 'id' },
        ],
        data: [],
    });
    useEffect(() => {
        getPacientes()
    }, [open])

    async function getPacientes() {
        try {
            const response = await axios.get('clientes.json');
            let resposta = []
            for (let x in response.data) {
                response.data[x].id = x
                resposta.push(response.data[x])
            }
            setState({ ...state, data: [...resposta] })
        } catch (error) {
            console.log(error);
        }
    };

    async function setaPacientes(data) {
        for (let x in data) {
            let { nome,
                idade,
                nascimento,
                solicitante,
                convenio,
                id,
                ada,
                cne,
                dd,
                ac,
                cm,
                ce,
                cem,
                fv,
                ae,
                cit,
                conclusao,
                conclusaoObs,
                dataDaColeta } = data[x]
            await setaPaciente({
                nome,
                idade,
                nascimento,
                solicitante,
                convenio,
                id,
                ada,
                cne,
                dd,
                ac,
                cm,
                ce,
                cem,
                fv,
                ae,
                cit,
                conclusao,
                conclusaoObs,
                dataDaColeta
            })
        }

        handleClose()

    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                SELECIONAR PACIENTE
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Encontrar paciente"}</DialogTitle>
                <DialogContent>
                    <MaterialTable
                        title="Actions On Selected Rows Preview"
                        columns={state.columns}
                        data={state.data}
                        options={{
                            selection: true
                        }}
                        actions={[
                            {
                                tooltip: 'Paciente selecionado',
                                icon: 'check',
                                onClick: (evt, data) => setaPacientes(data)
                            }
                        ]}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        CLOSE
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}