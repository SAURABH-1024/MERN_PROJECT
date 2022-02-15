const jwt = require("jsonwebtoken");
// const router = require("../BackEnd/Router/Auth")



const createTokens = async(user) => {
  const accessToken = jwt.sign({ _id: this._id }, "secretkey1234");
  // this.tokens = this.tokens.concat({accessToken }); // adding jwt to db
  // await this.save();
  return accessToken;
};

const validateToken = (req, res, next, user) => {    //user in the parenthesis next to next 
  const accessToken = req.cookies["access-token"]
  
  if (!accessToken)
    return res.status(422).json({ error: "User not authenticated" })

  try {
    const decrypt = jwt.verify(accessToken, "secretkey1234")
     req.user = {
        id: decrypt.id,
      };
      return next();     
  } catch (error) {
    return res.status(400).json({ error: "something went wrong" })
  }
};




module.exports = { createTokens, validateToken };


// const generateToken = (res, id, firstname) => {
//     const expiration = process.env.DB_ENV === 'testing' ? 100 : 604800000;
//     const token = jwt.sign({ id, firstname }, process.env.JWT_SECRET, {
//       expiresIn: process.env.DB_ENV === 'testing' ? '1d' : '7d',
//     });
//     return res.cookie('token', token, {
//       expires: new Date(Date.now() + expiration),
//       secure: false,
//       httpOnly: true,
//     });
//   };

//   module.exports = generateToken