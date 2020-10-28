import database from "../src/models";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class ContactsService {
	static async getAllContacts(req) {
		try {
			const {
				per_page = 10,
				page = 1,
				order_by = "fullname",
				order_type = "asc",
				fullname = null,
				contact_creator = null,
				gender = null,
				nationality = null,
			} = req.query;
			const count = await database.contacts.findAndCountAll({
				where: {
					fullname: fullname
						? { [Op.like]: `%${fullname}%` }
						: { [Op.ne]: null },
					gender: gender
						? { [Op.like]: `${gender}%` }
						: { [Op.ne]: null },
					contact_creator: contact_creator
						? { [Op.like]: `%${contact_creator}%` }
						: { [Op.ne]: null },
					nationality: nationality
						? { [Op.like]: `%${nationality}%` }
						: { [Op.ne]: null },
				},
			});
			const contacts = await database.contacts.findAll({
				where: {
					fullname: fullname
						? { [Op.like]: `%${fullname}%` }
						: { [Op.ne]: null },
					gender: gender
						? { [Op.like]: `${gender}%` }
						: { [Op.ne]: null },
					contact_creator: contact_creator
						? { [Op.like]: `%${contact_creator}%` }
						: { [Op.ne]: null },
					nationality: nationality
						? { [Op.like]: `%${nationality}%` }
						: { [Op.ne]: null },
				},
				order: [[order_by, order_type]],
			});

			const woman = await database.contacts.findAndCountAll({
				where: {
					gender: "female",
				},
			});
			const man = await database.contacts.findAndCountAll({
				where: {
					gender: "male",
				},
			});
			const otherGenders = await database.contacts.findAndCountAll({
				where: {
					gender: { [Op.not]: "male" },
					[Op.and]: [
						{
							gender: {
								[Op.not]: "female",
							},
						},
					],
				},
			});
			return {
				data: contacts.splice((page - 1) * per_page, per_page),
				meta: {
					total: count.count,
					per_page: per_page,
					page: page,
				},
				stats: { woman: woman.count, man: man.count, otherGenders: otherGenders.count },
			};
		} catch (e) {
			console.error(e);
		}
	}

	static async getContactById(id) {
		try {
			return await database.contacts.findByPk(id);
		} catch (e) {
			console.error(e);
		}
	}

	static async createContact(payload) {
		try {
			return await database.contacts.create(payload);
		} catch (e) {
			console.error(e);
		}
	}
}

export default ContactsService;
