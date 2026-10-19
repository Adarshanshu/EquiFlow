const { model } = require("mongoose");
const { UserSchema } = require("../schemas/UserSchema");

const UserModel = model("User", UserSchema);

module.exports = { UserModel };
