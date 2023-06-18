const path = require("path");
const fs = require("fs/promises");

console.log(__dirname);

const usersPath = path.join(__dirname, "..", "db", "users.json");

console.log(usersPath);

class FileOperations {
  constructor(path) {
    this.path = path;
  }

  async read() {
    const read = await fs.readFile(this.path, "utf-8");
    const readParse = JSON.parse(read);

    return readParse;
  }

  display = async () => {
    console.log(await this.read());
  };

  create = async (data) => {
    const create = await fs.writeFile(this.path, JSON.stringify(data, null, 2));

    return create;
  };

  async update(data) {
    const users = await this.read();
    // users.push(data);
    // return await this.create(users);
    const newUsers = [...users, data];
    return await this.create(newUsers);
  }

  async remove() {
    return await fs.unlink(this.path);
  }
}

const file = new FileOperations(usersPath);

// file.display();

const data = [
  {
    id: "1",
    name: "Max",
  },
  {
    id: "2",
    name: "Greg",
  },
  {
    id: "3",
    name: "Dima",
  },
];

// file.create(data);
// file.update({
//   id: "4",
//   name: "Andrey",
// });
// file.remove();

async function tryCathHandler(clb, data) {
  try {
    if (!data) {
      return await clb();
    }
    await clb(data);
  } catch (error) {
    console.log("CUSTOM ERROR HANDLER", error.message);
  }
}

// tryCathHandler(file.display.bind(file));
// tryCathHandler(file.create.bind(file, data));

// tryCathHandler(file.display);
tryCathHandler(file.create, data);
