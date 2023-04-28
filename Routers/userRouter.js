import express from 'express';
import UserController  from '../Controllers/user.Controller.js';

const router = express.Router();


router.post('/createuser', UserController.createUser);
router.get('/getuser', UserController.getUser);
router.put('/updateuser', UserController.updateUser)
router.delete('/deleteuser', UserController.deleteUser);



export default router;
