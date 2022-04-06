const express = require('express')
const Media = require('../models/Media')
const router = express.Router()

const multer = require('multer')

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
 

const storageCloudinary = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'sea-to-sky',
    
    public_id: (req, file) => Date.now(),
    
  },
  
});
const uploadCloudinary = multer({ storage: storageCloudinary });

 


router.post('/add' , uploadCloudinary.single('image'), async (req, res) => {

    try {
        console.log('media/add body is', req.body)

        if (req.file) req.body.image = req.file.path;

        const newImage = new Media(req.body);
        
        const image = await newImage.save()
        // .then( item => item.populate({path: 'owner', select: 'usarname image'}))
        console.log('newimage is', image);
        if (!image) return res.send({success: false, errorId: 2})

        
        res.send({success: true, newImage})
    } catch (error) {
        
        console.log('image add ERROR', error. message)
        res.send(error. message)
    }
})


router.get('/list', async (req, res) => {

    try {
        
        const images = await Media.find().populate({
            path: 'owner',
            select: 'username image'
        })
console.log('Hello from list');
        res.send(images)
    } catch (error) {
        
        console.log('image list ERROR', error. message)
        res.send(error. message)
    }
})

module.exports  = router
