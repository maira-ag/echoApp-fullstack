import Express from 'express'

const app = Express()

app.get('/pegar', function(req, resposta){
    resposta.send('enviar esta mensagem: quero uma namoradinha')
})

app.listen(8000)