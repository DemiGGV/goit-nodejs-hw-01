const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  try {
    const result = await fs.readFile(contactsPath);
    const contacts = JSON.parse(result);
    return contacts;
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const contact = contacts.find((item) => item.id === contactId);
    if (!contact) return null;
    return contact;
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === contactId);
  if (index === -1) return null;
  const deletedContact = contacts.splice(index, 1);
  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return deletedContact;
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (name, email, phone) => {
  const contact = {
    id: crypto.randomUUID(),
    name,
    email,
    phone,
  };
  const contacts = await listContacts();
  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return contact;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
