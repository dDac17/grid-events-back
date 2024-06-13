//ROUTER PRINCIPAL. Todas las peticiones que empiecen por '/api' serán redirigidas a este router (línea 23 del archivo index.js principal), donde comprobaremos a qué endpoint debería ir dirigido.

const router = require('express').Router() // Creo una instancia de router de express para definir las posibles rutas a emplear

const userRouter = require('./user.router')
const commentRouter = require('./comment.router')
const categoryRouter = require('./category.router')
const eventRouter = require('./event.router')
// const authRouter = require('./auth.router')

// Según la siguiente parte del endpoint (/api/user, o /api/joke, etc.), dirigimos la petición a su router correspondiente
router.use('/user', userRouter)
router.use('/comment', commentRouter)
router.use('/category', categoryRouter)
router.use('/event', eventRouter)
//router.use('/auth', authRouter)

module.exports = router // Exporto la instancia de este router para poder importarlo en el index.js principal