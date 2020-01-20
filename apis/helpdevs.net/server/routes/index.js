const express =require('express')
const user = require('./user')

const  router = express.Router()

router.get('/api-status', (req,res)=>{
    res.json({
        status:"ok"
    })
});


router.use('/user',user)
module.exports = router;