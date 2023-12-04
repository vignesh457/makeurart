const express = require('express');
const router = express.Router();
const { getAllPostsOfCategory, getEntirePosts, getAllPostsOfUser, getOnePost, createPost, deletePost, updatePost } = require('../Controller/postController')

router.get('/p/:id',getOnePost)
router.get('/category/:id',getAllPostsOfCategory)
router.get('/:user',getAllPostsOfUser)

router.get('/',getEntirePosts)
router.post('/',createPost)
router.put('/:id',updatePost)
router.delete('/:id',deletePost)

module.exports = router