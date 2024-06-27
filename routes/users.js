import express from 'express';
import{ createUser, getUsers,getUser,deleteUser,updateUser} from '.../controllers/users.js';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router();
let users =[];

router.get('/',getUsers);



router.post('/',createUser);
router.get('/:id',getUser);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);
export default router;