import jsPDF from 'jspdf'


export default {
  gerarDoc(object) {

    let doc = new jsPDF()

    let titulo = 10
    let conteudo = 10
    let margemEsquerda = 15

    function datas(value) {
      let dataCerta = value.charAt(8) + value.charAt(9) + '/' + value.charAt(5) + value.charAt(6) + '/' + value.charAt(0) + value.charAt(1) + value.charAt(2) + value.charAt(3)
      return dataCerta
    }

    function RetornaDataHoraAtual() {
      var dNow = new Date();
      var localdate = dNow.getDate() + '/' + (dNow.getMonth() + 1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
      return localdate;
    }

    const LocalizationTitle = [
      90, 102, 114,
      126, 138, 150,
      162, 174, 186,
      198
    ]
    const LocalizationSubTitle = [
      94, 106, 118,
      130, 142, 154,
      166, 178, 190,
      202
    ]


    doc.setFontSize(10)
    doc.text(`${object.nome}`, 46.5, 30)
    doc.text(`${object.idade}`, 152.5, 30)

    doc.text(`${object.solicitante}`, 62, 39)
    doc.setFontSize(8)
    doc.text(`${object.id}`, 159.5, 39)

    doc.setFontSize(10)
    doc.text(`${object.convenio}`, 55, 49)
    doc.text(`${datas(object.dataDaColeta)}`, 151.5, 49)

    doc.setFontSize(16)
    doc.text(`Colpocitologia Oncótica`, 75, 70)

    doc.setFontSize(titulo)
    doc.text(`AVALIAÇÃO DA AMOSTRA:`, margemEsquerda, LocalizationTitle[0]) // 80
    doc.setFontSize(conteudo)
    doc.text(`${object.ada}`, margemEsquerda, LocalizationSubTitle[0])      // 85

    doc.setFontSize(titulo)
    doc.text(`CÉLULAS NÃO EPITELIAIS:`, margemEsquerda, LocalizationTitle[1])
    doc.setFontSize(conteudo)
    doc.text(`${object.cne}`, margemEsquerda, LocalizationSubTitle[1])

    doc.setFontSize(titulo)
    doc.text(`DESCAMAÇÃO DOMINANTE:`, margemEsquerda, LocalizationTitle[2])
    doc.setFontSize(conteudo)
    doc.text(`${object.dd}`, margemEsquerda, LocalizationSubTitle[2])

    doc.setFontSize(titulo)
    doc.text(`ALTERAÇÕES CELULARES:`, margemEsquerda, LocalizationTitle[3])
    doc.setFontSize(conteudo)
    doc.text(`${object.ac}`, margemEsquerda, LocalizationSubTitle[3])

    doc.setFontSize(titulo)
    doc.text(`CÉLULAS METAPLÁSICAS:`, margemEsquerda, LocalizationTitle[4])
    doc.setFontSize(conteudo)
    doc.text(`${object.cm}`, margemEsquerda, LocalizationSubTitle[4])

    doc.setFontSize(titulo)
    doc.text(`CÉLULAS ENDOCERVICAIS:`, margemEsquerda, LocalizationTitle[5])
    doc.setFontSize(conteudo)
    doc.text(`${object.ce}`, margemEsquerda, LocalizationSubTitle[5])

    doc.setFontSize(titulo)
    doc.text(`CÉLULAS ENDOMETRIAIS:`, margemEsquerda, LocalizationTitle[6])
    doc.setFontSize(conteudo)
    doc.text(`${object.cem}`, margemEsquerda, LocalizationSubTitle[6])

    doc.setFontSize(titulo)
    doc.text(`FLORA VAGINAL:`, margemEsquerda, LocalizationTitle[7])
    doc.setFontSize(conteudo)
    doc.text(`${object.fv}`, margemEsquerda, LocalizationSubTitle[7])

    doc.setFontSize(titulo)
    doc.text(`AGENTES ESPECÍFICOS:`, margemEsquerda, LocalizationTitle[8])
    doc.setFontSize(conteudo)
    doc.text(`${object.ae}`, margemEsquerda, LocalizationSubTitle[8])

    doc.setFontSize(titulo)
    doc.text(`CONCLUSÃO:`, margemEsquerda, LocalizationTitle[9]) // 215
    doc.setFontSize(conteudo)
    doc.text(`${object.cit}`, 20, LocalizationSubTitle[9]) // 220
    doc.text(`${object.conclusaoObs}`, 20, object.cit ? LocalizationSubTitle[9] + 4 : LocalizationSubTitle[9]) // 220
    doc.text(`${object.conclusao}`, 20, object.cit ? object.conclusaoObs ? LocalizationSubTitle[9] + 8: LocalizationSubTitle[9] + 4  : LocalizationSubTitle[9] + 4) // 220



    doc.setFontSize(8)
    doc.text(`Dra. ANA KARLA LUCAS DE OLIVEIRA`, 25, 240)
    doc.text(`CITOLOGISTA`, 40, 243)
    doc.text(`CRF-PB 2611`, 41, 246)
    doc.text(`ESPERANÇA - PB`, 100, 240)
    doc.text(`${RetornaDataHoraAtual()}`, 165, 240)




    doc.line(20, 236, 190, 236)

    doc.save(`${object.nome}.pdf`)
  }

}

