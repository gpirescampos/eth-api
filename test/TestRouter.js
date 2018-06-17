var Router = artifacts.require("Router");
var HelloWorldController = artifacts.require("HelloWorldController");

contract('RouterInit', async () => {
  it("Init everything", async () => {
    let instanceC = await HelloWorldController.deployed();
    await instanceC.addMethod("Get", instanceC.address);
    let resC = await instanceC.checkMethod("Get");
    console.log(resC);
    assert.notEqual("0x0000000000000000000000000000000000000000", resC);
    let instanceR = await Router.deployed();
    await instanceR.addController("HelloWorld", instanceC.address);
    let resR = await instanceR.checkController("HelloWorld");
    assert.notEqual("0x0000000000000000000000000000000000000000", resR);
  })
})

contract("RouterTest", async () => {
  it("call Get method from HelloWorld controller", async () => {
    let instance = await Router.deployed();
    let res = await instance.callController("HelloWorld", "Get", "");
    console.log(res);
  })
})