const express = require('express')
const { addCategory, viewCategories, categoryDetails, updateCategory, deleteCategory } = require('../controller/categoryController')
const { requireSignin } = require('../controller/userController')
const { categoryRules, validate } = require('../validation')
const router = express.Router()

router.post('/postCategory', categoryRules, validate,requireSignin, addCategory)
router.get('/viewcategories', viewCategories)
router.get('/categorydetails/:id', categoryDetails)
router.put('/updatecategory/:id', requireSignin, updateCategory)
router.delete('/deletecategory/:id', requireSignin, deleteCategory)


module.exports = router