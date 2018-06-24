var Controller = artifacts.require("Controller");
var Obj = artifacts.require("Object");

function iThrowError(instance) {
  try {
    instance.object()
  } catch (error) {
    throw new Error("Error thrown"); 
  }
}

contract('Controller', async () => {
  it("Init Controller", async () => {
    const contractC = await Controller.new("HelloWorld")
    assert.equal(contractC.address.length, 42)
  })
  it("Controller POST", async () => {
    const contractC = await Controller.new("HelloWorld")
    await contractC.POST("HelloWorld")
    const objAddress = await contractC.objects(0)
    const contractO = await Obj.at(objAddress)
    const obj = await contractO.object()
    assert.equal(obj, "HelloWorld")
  })
  it("Controller PUT", async () => {
    const contractC = await Controller.new("HelloWorld")
    await contractC.POST("HelloWorld")
    const objAddress = await contractC.objects(0)
    await contractC.PUT(objAddress, "Hello")
    const contractO = await Obj.at(objAddress)
    const obj = await contractO.object()
    assert.equal(obj, "Hello")
  })
  it("Controller GET", async () => {
    const contractC = await Controller.new("HelloWorld")
    await contractC.POST("HelloWorld")
    const objAddress = await contractC.objects(0)
    const cObj = await contractC.GET(objAddress)
    const contractO = await Obj.at(objAddress)
    const obj = await contractO.object()
    assert.equal(obj, cObj)
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