
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
const Role  = require("./db/models/role")
const Rating = require("./db/models/rating")
const Order  = require("./db/models/order")
const Comments = require("./db/models/comments")
beforeAll(async () => {
  await User.remove();
  await Role.remove();
  await Rating.remove();
  await Order.remove();
  await Comments.remove();
});
afterEach(async () => {
  await User.remove();
  await Role.remove();
  await Rating.remove();
  await Order.remove();
  await Comments.remove();
});
afterAll(async () => {
  await User.remove();
  await Role.remove();
  await Rating.remove();
  await Order.remove();
  await Comments.remove();
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
describe("Testing the role module", () => {
    it("check if the model defined", () => {
      expect(Role).toBeDefined();
    });
    it("Should save a User", async () => {
      const roleInfo = {
          role: "user",
          permission:["user"] 
      };
      const role = new Role(roleInfo);
      await role.save();
      const checkRole = await Role.findOne({ role: "user" });
      expect(checkRole.role).toBe(roleInfo.role);
    });
  });
  describe("Testing the rating module", () => {
    it("check if the model defined", () => {
      expect(Rating).toBeDefined();
    });
    it("Should save a User", async () => {
      const rateInfo = {
          rating: 4
      };
      const ratUser = new Rating(rateInfo);
      await ratUser.save();
      const checkRate = await Rating.findOne({ rating: 4 });
      expect(checkRate.rating).toBe(rateInfo.rating);
    });
  });
  describe("Testing the module", () => {
    it("check if the model defined", () => {
      expect(Order).toBeDefined();
    });
    it("Should save an Order", async () => {
      const orderInfo = {
        date: "30/09/2020",
        products: [
          {
            Quantity: 2,
            price: 300,
          },
        ],
        totalPrice: 600,
      };
      const order = new Order(orderInfo);
      await order.save();
      const checkOrder = await Order.findOne({ totalPrice: 600 });
      expect(checkOrder.totalPrice).toBe(orderInfo.totalPrice);
    });
  });
  
  describe("Testing the module", () => {
    it("check if the model defined", () => {
      expect(Comments).toBeDefined();
    });
    it("Should save a Comment", async () => {
      const commentInfo = {
        comment: "Hi",
      };
      const comment = new Comments(commentInfo);
      await comment.save();
      const checkComment = await Comments.findOne({ comment: "Hi" });
      expect(checkComment.comment).toBe(commentInfo.comment);
    });
  });
describe("Testing role APIs", () => {
    const roleInfo = {
        role: "user",
        permission:["user"] 
    };
  it("shuold be able to creat a role", async () => {
    const newRole =  await request(app).post("/roles").send(roleInfo);
    expect(typeof newRole.body).toEqual(typeof roleInfo);
    expect(newRole.body).toHaveProperty("_id");
    expect(newRole.statusCode).toBe(201);
  });
});
describe("Testing role APIs", () => {
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
  it("shuold be able to creat a user", async () => {
    const newUser =  await request(app).post("/user/createUser").send(userInfo);
    expect(typeof newUser.body).toEqual(typeof userInfo);
    expect(newUser.body).toHaveProperty("_id");
    expect(newUser.statusCode).toBe(201);
  });
});
describe("Testing login APIs", () => {
    const userInfo = {
        firstName: "Ahmad",
        lastName: "Hamad",
        age: 24,
        gender: "male",
        country:"jordan",
        phoneNumber:"0000",
        email: "a@bb.com",
        password: "a123",
    };
  it("shuold be able to creat a user", async () => {
    const newUser =  await request(app).post("/user/createUser").send(userInfo);
    const res =  await request(app).post("/login").send({email: "a@bb.com",
    password: "a123"});
    expect(typeof res.body).toEqual(typeof userInfo);
    // expect(newUser.body).toHaveProperty("token");
    expect(newUser.statusCode).toBe(200);
  });
});