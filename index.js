const { Command } = require("commander");
const operations = require("./db/contacts");

const programm = new Command();
programm
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

programm.parse(process.argv);
const args = programm.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await operations.listContacts();
      console.log(contacts);
      break;

    case "get":
      const contactByID = await operations.getContactById(id);
      console.log(contactByID);
      break;

    case "add":
      const addedContact = await operations.addContact(name, email, phone);
      console.log(addedContact);
      break;

    case "remove":
      const deletedContact = await operations.removeContact(id);
      console.log(deletedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(args);
