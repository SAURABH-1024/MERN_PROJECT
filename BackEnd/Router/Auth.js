const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const User = require("../Model/userSchema");
const { validateToken, createTokens } = require("../GenerateToken.js");
require("../Database/serverCreation");



// ________________________________________________________________________________________________________________________________________________________
//USING PROMISE METHOD

// router.post("/signup", (req, res) => {
//   const { name, email, number, city, password, confirmpassword } = req.body; // obj destructuring

//   //validation
//   if (!name || !email || !number || !city || !password || !confirmpassword) {
//     return res.status(422).json({ error: "Please fill all details" });
//   }

//   //checking if user has already registered//
//   //left email is the one in database and right one is the one entered by user..
//   // userExists has been given as a parameter which will be true only if the email id that user entered is alraedy present in the database//

//   User.findOne({ email: email }).then((userExists) => {
//     if (userExists) {
//       return res.status(422).json({ error: "EmailId already exists" });
//     }

//     const user = new User({
//       name,
//       email,
//       number,
//       city,
//       password,
//       confirmpassword,
//     });

//     user
//       .save()
//       .then(() => {
//         res.status(201).json("Registration Successfull");
//       })
//       .catch((err) => {
//         res.status(500).json("Registration Failed");
//       });
//   }).catch((error) => { console.log(error); })
// });


// ________________________________________________________________________________________________________________________________________________________
//USING ASYNC_AWAIT METHOD


router.post("/signup", async (req, res) => {
  try {
    const { name, email, number, city, password, confirmpassword } = req.body; // obj destructuring

    //validation
    if (!name || !email || !number || !city || !password || !confirmpassword) {
      res.status(400).json({
        error: "Please fill all details",
      });
    }

    //checking if user has already registered//
    //left email is the one in database and right one is the one entered by user..
    // userExists has been given as a parameter which will be true only if the email id that user entered is alraedy present in the database//

    const emailExists = await User.findOne({
      email: email,
    }); // validation for email
    if (emailExists) {
      res.status(409).json({
        error: "EmailId already exists",
      });
      window.alert("EmailId already exists");
    }

    const numberExist = await User.findOne({
      number: number,
    }); // validation for phone number
    if (numberExist) {
      res.status(422).json({
        error: "Phone number already exists",
      });
      window.alert("Phone number already exists");
    }

    if (req.body.password === req.body.confirmpassword) {
      const user = await new User({
        name,
        email,
        number,
        city,
        password,
        confirmpassword,
      });
      const registered = await user.save();
      if (registered) {
        res.status(201).json({
          message: "user registered successfully",
        });
      } else {
        res.status(500).json({
          error: "something went wrong",
        });
      }
    } else {
      res.status(404).json("Passwords not matching");
    }
  } catch (err) {
    res.status(500).json({
      error: "something went wrong",
    });
    console.log("registration failed");
  }
});


// ________________________________________________________________________________________________________________________________________________________

//login route//

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    // this is to make sure the user has entered details in both fields//
    res.status(400).json({
      error: "Fill in the details",
    });
  }
  try {
    const user = await User.findOne({ email: email })//this is to make sure that the entered email is correct i.e the entered pass is compared with the one in database and if these two match, then before getting saved it will be hashed for security

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(422).json({
          message: "Please check credentials",
        });
      }
      else {
        const accessToken = createTokens(user);
        if (!accessToken) {
          return res.status(400).json({ error: "User not authenticated" })
        }
        else {

          res.cookie("access-token", accessToken, {
            maxAge: 2 * 60 * 60 * 1000,
            httpOnly: true
          })

          res.status(200).json({
            message: "Login Successfull",
          });
        }
      }
    } else {
      return res.status(404).json({
        error: "user doesnt exist",
      });
    }
  } catch (error) {
      
  }
});

router.get("/profile", validateToken, (req, res) => {
  res.json("welcome to my profile")

});

router.post("/contact", validateToken, async (req, res) => {
  try {
    const { _id, name, email, number, message } = req.body

    if (!name, !email, !number, !message) {
      return res.json({ error: "Please fill in the spaces" })
    }
    const userContact = await User.findOne({ _id: _id })

    if (userContact) {
      const userMessage = await userContact.addMessage(name, email, number, message);

      await userContact.save();
      res.status(201).json({ message: "Message Sent Successfully" })
    }

  }
  catch (error) {
    console.log(error);
  }

})


// ________________________________________________________________________________________________________________________________________________________


router.get("/logout", (req, res) => {
  console.log("Logout Page");
  res.clearCookie("access-token",{path:"/"})
  // window.alert("Logged Out")
res.status(201).json("Logged Out")
})

module.exports = router;
