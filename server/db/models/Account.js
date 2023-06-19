const Sequelize = require("sequelize");
const db = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT = process.env.TOKEN;

const SALT_ROUNDS = 5;

const Account = db.define("account", {
  fName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  userType: {
    type: Sequelize.ENUM("ADMIN", "WRITER", "USER"),
    defaultValue: "USER",
    allowNull: false,
  },
  isAdmin: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.userType === "ADMIN";
    },
  },
  isWriter: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.userType === "WRITER";
    },
  },
  isUser: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.userType === "USER";
    },
  },
  bio: {
    type: Sequelize.TEXT,
  },
  profileImg: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    },
  },
});

//AUTH

Account.prototype.comparePassword = function (pswd) {
  return bcrypt.compare(pswd, this.password);
};

Account.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, JWT);
};

Account.byToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, JWT);
    const account = Account.findByPk(id);
    if (!account) {
      throw "nooo";
    }
    return account;
  } catch {
    const error = Error("bad credentials");
    error.status = 401;
    throw error;
  }
};

Account.authenticate = async function ({ username, password }) {
  const account = await Account.findOne({
    where: {
      username,
    },
  });
  if (!account || !(await account.comparePassword(password))) {
    const error = Error("Incorrect username or password");
    error.status = 401;
    throw error;
  }
  return account.generateToken();
};

const hashPassword = async function (account) {
  if (account.changed("password")) {
    account.password = await bcrypt.hash(account.password, SALT_ROUNDS);
  }
};

Account.findAdminPosts = async function (id) {
  return this.findByPk(id, {
    where: {
      userType: "ADMIN",
    },
    include: {
      model: Post,
      as: "adminPost",
    },
  });
};

Account.findWriterPosts = async function (id) {
  return this.findByPk(id, {
    where: {
      userType: "WRITER",
    },
    include: {
      model: Post,
      as: "writerPost",
    },
  });
};

Account.beforeCreate(hashPassword);
Account.beforeUpdate(hashPassword);
Account.beforeBulkCreate((accounts) => Promise.all(account.map(hashPassword)));

module.exports = Account;
