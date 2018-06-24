var Controller = artifacts.require("Controller");
var Obj = artifacts.require("Object");
var Router = artifacts.require("Router");

function iThrowError(instance) {
  try {
    instance.object()
  } catch (error) {
    throw new Error("Error thrown"); 
  }
}

contract('Router', async () => {
  it("Init Router", async () => {
    const contractR = await Router.new()
    assert.equal(contractR.address.length, 42)
  })
  it("Create Controller", async () => {
    const contractR = await Router.new()
    await contractR.addController("HelloWorld")
    const addressC = await contractR.getController("HelloWorld")
    const nameC = await Controller.at(addressC).controllerName();
    assert.equal(nameC, "HelloWorld")
  })
  it("Router POST and GET", async () => {
    const contractR = await Router.new()
    await contractR.addController("HelloWorld")
    await contractR.POST("HelloWorld", "Hello")
    const addressO = await contractR.getObject("HelloWorld", 0)
    const objR = await contractR.GET("HelloWorld", addressO)
    const contractO = await Obj.at(addressO)
    const objO = await contractO.object()
    assert.equal(objO, objR)
  })
  it("Router POST and GET", async () => {
    const contractR = await Router.new()
    await contractR.addController("HelloWorld")
    await contractR.POST("HelloWorld", "Hello")
    const addressO = await contractR.getObject("HelloWorld", 0)
    await contractR.PUT("HelloWorld", addressO, "Hello")
    const objR = await contractR.GET("HelloWorld", addressO)
    const contractO = await Obj.at(addressO)
    const objO = await contractO.object()
    assert.equal(objO, objR)
  })
  // it("Controller DELETE", async () => {
  //   const contractC = await Controller.new()
  //   await contractC.POST("HelloWorld")
  //   const objAddress = await contractC.objects(0)
  //   const cObj = await contractC.DELETE(objAddress)
  //   const contractO = await Obj.at(objAddress)
  //   const obj = await contractO.object()
  //   assert.throws(iThrowError, Error)
  // })
})