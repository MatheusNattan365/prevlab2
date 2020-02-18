import jsPDF from 'jspdf'


export default {
                gerarDoc(object) {
                
                let doc = new jsPDF()

                let titulo = 10
                let conteudo = 10
                let margemEsquerda = 15

                function datas(value){
                  let dataCerta = value.charAt(8) + value.charAt(9) + '/' + value.charAt(5) + value.charAt(6) + '/' + value.charAt(0) + value.charAt(1) + value.charAt(2) + value.charAt(3)
                  return dataCerta
              }

                function RetornaDataHoraAtual(){
                    var dNow = new Date();
                    var localdate = dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
                    return localdate;
                  }

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
                doc.text(`AVALIAÇÃO DA AMOSTRA:`, margemEsquerda, 80)
                doc.setFontSize(conteudo)
                doc.text(`${object.ada}`, margemEsquerda, 85)

                doc.setFontSize(titulo)
                doc.text(`CÉLULAS NÃO EPTELIAIS:`, margemEsquerda, 95)
                doc.setFontSize(conteudo)
                doc.text(`${object.cne}`, margemEsquerda, 100)

                doc.setFontSize(titulo)
                doc.text(`DESCAMAÇÃO DOMINANTE:`, margemEsquerda, 110)
                doc.setFontSize(conteudo)
                doc.text(`${object.dd}`, margemEsquerda, 115)
                
                doc.setFontSize(titulo)
                doc.text(`ALTERAÇÕES CELULARES:`, margemEsquerda, 125)
                doc.setFontSize(conteudo)
                doc.text(`${object.ac}`, margemEsquerda, 130)
                
                doc.setFontSize(titulo)
                doc.text(`CÉLULAS METAPLÁSICAS:`, margemEsquerda, 140)
                doc.setFontSize(conteudo)
                doc.text(`${object.cm}`, margemEsquerda, 145)

                doc.setFontSize(titulo)
                doc.text(`CÉLULAS ENDOCERVICAIS:`, margemEsquerda, 155)
                doc.setFontSize(conteudo)
                doc.text(`${object.ce}`, margemEsquerda, 160)
                
                doc.setFontSize(titulo)
                doc.text(`CÉLULAS ENDOMETRIAIS:`, margemEsquerda, 170)
                doc.setFontSize(conteudo)
                doc.text(`${object.cem}`, margemEsquerda, 175)

                doc.setFontSize(titulo)
                doc.text(`FLORA VAGINAL:`, margemEsquerda, 185)
                doc.setFontSize(conteudo)
                doc.text(`${object.fv}`, margemEsquerda, 190)
                
                doc.setFontSize(titulo)
                doc.text(`AGENTES ESPECÍFICOS:`, margemEsquerda, 200)
                doc.setFontSize(conteudo)
                doc.text(`${object.ae}`, margemEsquerda, 205)

                doc.setFontSize(titulo)
                doc.text(`CONCLUSÃO:`, margemEsquerda, 215)
                doc.setFontSize(conteudo)
                doc.text(`${object.conclusao}`, 20, 220)



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

