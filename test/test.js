const { expect, assert } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { deleteOne } = require("../models/taskModel");
const app = `http://localhost/${process.env.PORT}`;
chai.use(chaiHttp);

describe("Testing tasks", () => {
  let task, id;
  // Get tasks
  it("Getting tasks...", () => {
    chai
      .request(app)
      .get("/tasks")
      .end((err, res) => {
        expect(res).to.have.status(200);
      });
  });

  // Add Task
  it("Adding tasks...", async (done) => {
    chai
      .request(app)
      .post("/tasks")
      .send({
        task: "testing task",
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
