var Router = artifacts.require("Router");
var HelloWorldController = artifacts.require("HelloWorldController");

contract('RouterInit', async () => {
  it("add HelloWorld as a new Controller", async () => {
    let instance = await Router.deployed();
    await instance.addController("HelloWorld", "0x0");
    let res = await instance.checkController("HelloWorld");
    assert.equal(true, res);
  })
})

contract('HelloWorldControllerInit', async () => {
  it("add Get method to HelloWorld Controller", async () => {
    let instance = await HelloWorldController.deployed();
    await instance.addMethod("Get", "0x0");
    let res = await instance.checkMethod("Get");
    assert.equal(true, res);
  })
})

contract("RouterTest", async () => {
  it("call Get method from HelloWorld controller", async () => {
    let instance = await Router.deployed();
    let res = await instance.callController("HelloWorld", "Get", [], {gas: 500000});
    console.log(res);
  })
})