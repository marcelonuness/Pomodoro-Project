let tela = document.getElementById('tela')
let ctx = tela.getContext('2d')


ctx.beginPath()

ctx.arc(125, 125, 125, 0, 2 * Math.PI)
ctx.strokeStyle = 'white'
ctx.strokeWidth = '20'

ctx.stroke()