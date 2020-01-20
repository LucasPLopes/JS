const express =require('express')

const user  = require('../controller/user')
const router = express.Router()


router.route('/').get(user.getAll) 
router.route('/:id').get(user.get) // ok
router.route('/').post(user.post) //ok 
router.route('/').put(user.put)
router.route('/:id').delete(user.del) // ok

module.exports = router;
