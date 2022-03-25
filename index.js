const app = require('express')()

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(process.env.PORT || 3000, () => {
	console.log('Servidor aberto na porta', process.env.PORT || 3000)
})