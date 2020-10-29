import Router from 'express';
import ContactsController from '../controllers/ContactsController';
const router = Router();

router.get('/', ContactsController.getAllContacts);
router.post('/create', ContactsController.createContact);

export default router;
