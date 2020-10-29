import ContactsService from "../services/ContactsService";
import {
  validateResponse,
  util,
} from "./ResponseWrapper";
const STATUS = require("../constants/status.code.env");

class ContactsController {
  static async getAllContacts(req, res) {
    try {
      const contacts = await ContactsService.getAllContacts(req);
      util.setSuccess(STATUS.SUCCESS, 'Got contacts successfuly', contacts);
      return util.send(res);
    } catch (e) {
      util.setError(STATUS.BAD_REQUEST, e);
      return util.send(res);
    }
  }

  static async createContact(req, res) {
    try {
      const contact = await ContactsService.createContact(req.body);
      util.setSuccess(STATUS.SUCCESS, 'Created contact successfuly', contact);
      return util.send(res);
    } catch (e) {
      util.setError(STATUS.BAD_REQUEST, e);
      return util.send(res);
    }
  }

}
export default ContactsController;
