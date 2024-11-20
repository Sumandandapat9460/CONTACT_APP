const {Router} = require('express')
const router = Router()


router.get('/addContact', (req, res) => {
    res.render('contact_App/addContact',{title: 'Add_Contact'})
})


module.exports = router;