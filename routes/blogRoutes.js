const express = require ('express');
const { getAllBlogController, createBlogController, updateBlogController, getBlogByIdContoller, deleteBlogController, userBlogController } = require('../controllers/blogController');

//route object
const router = express.Router()

//routes
 
//get all blogs with get method
router.get('/all-blog', getAllBlogController);

//create blog with post method
router.post('/create-blog', createBlogController);

//update blog with put method
router.put('/update-blog/:id', updateBlogController);

//single blog details with get method
router.get('/get-blog/:id', getBlogByIdContoller);

//delete blog with delete method
router.delete('/delete-blog/:id', deleteBlogController);

//user blog with get method
router.get('/user-blog/:id',userBlogController);


module.exports = router;