const { expect, assert } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.use(chaiHttp);
chai.should();

describe("Testing tasks", async () => {
  let id;
  // Get tasks
  it("Getting tasks...", (done) => {
    chai
      .request(app)
      .get("/tasks")
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a("object");
        done();
      });
  });

  // Add Task
  it("Adding tasks...", (done) => {
    chai
      .request(app)
      .post("/tasks")
      .send({
        task: "testing task",
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a("object");
        id = res.body.data._id;
        done();
      });
  });

  // editing task
  it("Editing tasks...", (done) => {
    chai
      .request(app)
      .put("/tasks")
      .send({
        id: id,
        updatedTask: "edited",
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a("object");
        done();
      });
  });

  //delete task
  it("Deleting tasks...", (done) => {
    chai
      .request(app)
      .delete("/tasks")
      .send({
        id: id,
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a("object");
        done();
      });
  });
});
