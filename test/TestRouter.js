var Router = artifacts.require("Router");

contract('RouterInit', async () => {
  it("Init everything", async () => {
    let instanceR = await Router.deployed();
    await instanceR.addController("HelloWorld");
    let resR = await instanceR.checkController("HelloWorld");
    assert.notEqual("0x0000000000000000000000000000000000000000", resR);
    let res = await instanceR.callController("HelloWorld", "", "asd");
    console.log(res);
  })
})