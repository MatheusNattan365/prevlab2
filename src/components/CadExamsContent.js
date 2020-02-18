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
        marginTop: theme.spacing(1),
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

function ExamContent(props) {
    const [exam, setExam] = React.useState({
        nome: '',
        idade: '',
        nascimento: '',
        solicitante: '',
        convenio: '',
        id: '',
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

    async function saveExam() {
        if(!exam.id) return alert("Selecione um paciente primeiro!");
        try {
            await axios.patch(`clientes/${exam.id}.json`, exam);
            alert("Cliente atualizado com sucesso!");
            limparCampos();
        } catch (error) {
            console.log(error)
        }

    }

    function limparCampos() {
        setExam({
            nome: '',
            idade: '',
            nascimento: '',
            solicitante: '',
            convenio: '',
            id: '',
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
                            <Typography className={classes.textHeader}>Cadastro de Exames</Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.contentWrapper}>
                <BtnSearchPacient setaPaciente={setExam} />
                <Typography color="textSecondary" align="center">
                    {exam.id ? `${exam.id}` : null}
                </Typography>
                <form className={classes.formRoot} noValidate autoComplete="off">
                    <TextField
                        id="nascimento-paciente"
                        variant="outlined"
                        type="date"
                        helperText="Data da Coleta"
                        value={exam.dataDaColeta}
                        onChange={evt => setExam({ ...exam, dataDaColeta: evt.target.value })}
                    />
                    <TextField
                        className={classes.formTextRoot}
                        fullWidth
                        id="ava"
                        label="Avaliação da Amostra:"
                        variant="outlined"
                        value={exam.ada}
                        onChange={evt => setExam({ ...exam, ada: evt.target.value })}
                        inputProps={
                            { list: 'avaDaAmostra' }
                        }
                    />
                    <datalist id="avaDaAmostra">
                        <option value="Satisfatória."></option>
                        <option value="Insatisfatória."></option>
                        <option value="Satisfatória; Ausência de componentes endocervicais / zona de transformação."></option>
                    </datalist>

                    <TextField
                        className={classes.formTextRoot}
                        fullWidth
                        id="cel-no-ept"
                        label="Células dão Epteliais:"
                        variant="outlined"
                        value={exam.cne}
                        onChange={evt => setExam({ ...exam, cne: evt.target.value })}
                        inputProps={
                            { list: 'celNaoEpiteliais' }
                        }
                    />
                    <datalist id="celNaoEpiteliais">
                        <option value="Pouquíssimos polimorfonucleares neutrófilos."></option>
                        <option value="Poucos polimorfonucleares neutrófilos"></option>
                        <option value="Poucos polimorfonucleares neutrófilos e histiócitos."></option>
                        <option value="Moderados polimorfonucleares neutrófilos."></option>
                        <option value="Moderados polimorfonucleares neutrófilos e histiócitos."></option>
                        <option value="Muitos polimorfonucleares neutrófilos."></option>
                        <option value="Muitos polimorfonucleares neutrófilos e histiócitos."></option>
                        <option value="Frequente polimorfonucleares neutrófilos e histiócitos."></option>
                    </datalist>
                    <TextField
                        className={classes.formTextRoot}
                        fullWidth
                        id="desc-dom"
                        label="Descamação Dominante:"
                        variant="outlined"
                        value={exam.dd}
                        onChange={evt => setExam({ ...exam, dd: evt.target.value })}
                        inputProps={
                            { list: 'descDominante' }
                        }
                    />
                    <datalist id="descDominante">
                        <option value="Células superficiais e intermediárias."></option>
                        <option value="Células superficiais, intermediárias e algumas profundas."></option>
                        <option value="Células superficiais, intermediárias e profundas."></option>
                        <option value="Células intermediárias."></option>
                        <option value="Células profundas."></option>
                    </datalist>
                    <TextField
                        fullWidth
                        className={classes.formTextRoot}
                        id="alt-cel"
                        label="Alterações Celulares:"
                        variant="outlined"
                        value={exam.ac}
                        onChange={evt => setExam({ ...exam, ac: evt.target.value })}
                        inputProps={
                            { list: 'altCelulares' }
                        }
                    />
                    <datalist id="altCelulares">
                        <option value="xxxxxxxxxxxxx-xxxxxxxxxxxxx-xxxxxxxxxxxxx"></option>
                    </datalist>
                    <TextField
                        fullWidth
                        className={classes.formTextRoot}
                        id="cel-meta"
                        label="Células Metaplásicas:"
                        variant="outlined"
                        value={exam.cm}
                        onChange={evt => setExam({ ...exam, cm: evt.target.value })}
                        inputProps={
                            { list: 'celMetaplasicas' }
                        }
                    />
                    <datalist id="celMetaplasicas">
                        <option value="Ausentes."></option>
                        <option value="Metaplasia imatura."></option>
                        <option value="Metaplasia escamosa em maturação."></option>
                    </datalist>
                    <TextField
                        fullWidth
                        className={classes.formTextRoot}
                        id="cel-endoc"
                        label="Células Endocervicais:"
                        variant="outlined"
                        value={exam.ce}
                        onChange={evt => setExam({ ...exam, ce: evt.target.value })}
                        inputProps={
                            { list: 'celEndocervicais' }
                        }
                    />
                    <datalist id="celEndocervicais">
                        <option value="Reativas."></option>
                        <option value="Ausentes."></option>
                        <option value="Típicas."></option>
                        <option value="Atípicas."></option>
                        <option value="Não visualizadas."></option>
                    </datalist>
                    <TextField
                        fullWidth
                        className={classes.formTextRoot}
                        id="cel-endom"
                        label="Células Endometriais:"
                        variant="outlined"
                        value={exam.cem}
                        onChange={evt => setExam({ ...exam, cem: evt.target.value })}
                        inputProps={
                            { list: 'celEndometriais' }
                        }
                    />
                    <datalist id="celEndometriais">
                        <option value="Ausentes."></option>
                    </datalist>

                    <TextField
                        fullWidth
                        className={classes.formTextRoot}
                        id="flora"
                        label="Flora Vaginal:"
                        variant="outlined"
                        value={exam.fv}
                        onChange={evt => setExam({ ...exam, fv: evt.target.value })}
                        inputProps={
                            { list: 'floVaginal' }
                        }
                    />
                    <datalist id="floVaginal">
                        <option value="Lactobacilos."></option>
                        <option value="Bacilos."></option>
                        <option value="Cocos."></option>
                        <option value="Lactobacilos e bacilos."></option>
                        <option value="Lactobacilos e cocos."></option>
                        <option value="Cocos e bacilos."></option>
                        <option value="Fungo moforlogicamente consistentes com cândida sp."></option>
                        <option value="Organismos semelhantes a Trichomonas Vaginalis."></option>
                        <option value="Bacilos supracitoplasmáticos sugestivos de Gardnerella vaginalis."></option>
                    </datalist>

                    <TextField
                        fullWidth
                        className={classes.formTextRoot}
                        id="agt-espc"
                        label="Agentes Específicos:"
                        variant="outlined"
                        value={exam.ae}
                        onChange={evt => setExam({ ...exam, ae: evt.target.value })}
                        inputProps={
                            { list: 'agntEspecificos' }
                        }
                    />
                    <datalist id="agntEspecificos">
                        <option value="Não visualizados."></option>
                        <option value="Efeito citopático pelo HPV."></option>
                    </datalist>
                    <TextField
                        fullWidth
                        className={classes.formTextRoot}
                        id="citolise"
                        label="Citólise:"
                        variant="outlined"
                        value={exam.cit}
                        onChange={evt => setExam({ ...exam, cit: evt.target.value })}
                        inputProps={
                            { list: 'citolese' }
                        }
                    />
                    <datalist id="citolese">
                        <option value="Citólise leve."></option>
                        <option value="Citólise moderada."></option>
                        <option value="Citólise intensa."></option>
                    </datalist>
                    <TextField
                        fullWidth
                        className={classes.formTextRoot}
                        id="conclusao"
                        label="Conclusão:"
                        variant="outlined"
                        value={exam.conclusao}
                        onChange={evt => setExam({ ...exam, conclusao: evt.target.value })}
                        inputProps={
                            { list: 'conclusao' }
                        }
                    />
                    <datalist id="conclusao">
                        <option value="Negativo para lesão intra-epitelial ou malignidade no material examinado (Bethesda 2014)."></option>
                        <option value="Atipias de significado indeterminado em células escamosas, possivelmente não neoplásicas."></option>
                        <option value="Atipias de significado indeterminado em células escamosas, não se pode afastar lesão de alto grau."></option>
                        <option value="Lesão intra-epitelial de baixo grau."></option>
                        <option value="Lesão intra-epitelial de alto grau"></option>
                    </datalist>
                    <TextField
                        fullWidth
                        className={classes.formTextRoot}
                        id="conclusaoObs"
                        label="Obs:"
                        variant="outlined"
                        value={exam.conclusaoObs}
                        onChange={evt => setExam({ ...exam, conclusaoObs: evt.target.value })}
                        inputProps={
                            { list: 'obs' }
                        }
                    />
                    <datalist id="obs">
                        <option value="Obs: Sugere-se acompanhamento do processo metaplásico."></option>
                        <option value="Obs: Sugere-se repetir citologia em seis meses."></option>
                        <option value="Obs: Sugere-se colposcopia com biópsia para melhor esclarecimento."></option>
                        <option value="Obs: Esfregaço atrófico."></option>
                    </datalist>
                    <div className={classes.btnsForm}>
                        <Button variant="contained" fullWidth color="primary" onClick={() => saveExam()}className={classes.addUser}>
                            {'CADASTRAR EXAME'}
                        </Button>

                    </div>
                </form>

            </div>
        </Paper>
    );
}

ExamContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExamContent);