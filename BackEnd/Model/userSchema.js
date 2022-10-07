const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: Number,
    required: true,
    unique: true,
    validate(value) {
      if (value < 0) {
        throw new Error("negative values cannot be used")
      }
    }
  },
  city: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  messages: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      number: {
        type: Number,
        required: true,
        unique: true,
      },
      message: {
        type: String,
        required: true
      }
    }
  ],

}
);

userSchema.methods.addMessage = async function (name, email, number, message) {
  try {
    this.messages = this.messages.concat({ name, email, number, message })
    await this.save();
    return this.messages;
  } catch (error) {
    console.log(error);
  }
}


userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmpassword = await bcrypt.hash(this.confirmpassword, 10);
    this.confirmpassword = undefined;
  }
  next();
});

//generating jwt tokens

// userSchema.methods.generateAuthToken", async function () {
//   try {
//     let token = jwt.sign({ _id: this._id }, "secret1234"); //generating jwt
//     this.tokens = this.tokens.concat({ token: token }); // adding jwt to db
//     await this.save();
//     return token;
//   } catch (error) {
//     console.log(error);
//   }
// });





const User = new mongoose.model("User", userSchema);
module.exports = User;
