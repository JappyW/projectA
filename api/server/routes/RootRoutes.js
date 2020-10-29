import Router from "express";
import ContactsRoutes from "./ContactsRoutes";

import {
  API_URL,
  USERS,
  CONTACTS
} from "../constants/server.env";

const router = Router();
const USERS_URL = API_URL + USERS;
const CONTACTS_URL = API_URL + CONTACTS;


router.use(CONTACTS_URL, ContactsRoutes);

export default router;
