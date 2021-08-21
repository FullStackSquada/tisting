
const mongoose = require("mongoose");
const app = require("./app");
const request = require("supertest");
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
mongoose.connect("mongodb://localhost:27017/testing", options);
const User = require("./db/models/user");
beforeAll(async () => {
  await User.remove();
});
afterEach(async () => {
  await User.remove();
});
afterAll(async () => {
  await User.remove();
  await mongoose.connection.close();
});
test('should ', () => {
    expect(1).toBe(1)
})
describe("Testing the module", () => {
  it("check if the model defined", () => {
    expect(User).toBeDefined();
  });
  it("Should save a User", async () => {
    const userInfo = {
        firstName: "Ahmad",
        lastName: "Hamad",
        age: 24,
        gender: "male",
        country:"jordan",
        phoneNumber:"0000",
        email: "a@a.com",
        password: "a123",
    };
    const user = new User(userInfo);
    await user.save();
    const checkUser = await User.findOne({ firstName: "Ahmad" });
    expect(checkUser.firstName).toBe(userInfo.firstName);
  });
});



// const mongoose = require("mongoose");
// const app = require("./main");
// const request = require("supertest");
// ​
// const options = {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// };
// mongoose.connect("mongodb://localhost:27017/testing", options);
// const User = require("./db/models/users");
// ​
// describe("Test if the Jest work", () => {
//   test("should  output 2 ", () => {
//     expect(1 * 2).toBe(2);
//   });
// ​
//   it("should be 1 = 1 ", () => {
//     expect(1).toBe(1);
//   });
// });
// ​

// ​

// ​
// describe("Testing User APIs", () => {
//   const user = {
//     firstName: "Ahmad",
//     lastName: "Hamad",
//     age: 24,
//     email: "a@a.com",
//     password: "a123",
//   };
//   it("shuold be able to creat a user", async () => {
//     const newuser = await await request(app).post("/users").send(user);
//     expect(typeof newuser.body).toEqual(typeof user);
//     expect(newuser.body).toHaveProperty("_id");
//     expect(newuser.statusCode).toBe(201);
//     expect(newuser.body.lastName).toBe(user.lastName);
//   });
// });