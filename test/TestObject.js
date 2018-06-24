var Obj = artifacts.require("Object");

function iThrowError(instance) {
  try {
    instance.object()
  } catch (error) {
    throw new Error("Error thrown"); 
  }
}

contract('Object', async () => {
  it("POST", async () => {
    const contractO = await Obj.new("HelloWorld")
    assert.equal(contractO.address.length, 42)
  })
  it("GET", async () => {
    const contractO = await Obj.new("HelloWorld")
    const obj = await contractO.object()
    assert.equal(obj, "HelloWorld")
  })
  it("PUT", async () => {
    const contractO = await Obj.new("HelloWorld")
    await contractO.PUT("Hello")
    const obj = await contractO.object()
    assert.equal(obj, "Hello")
  })
  // it("DELETE", async () => {
  //   const contractO = await Obj.new("HelloWorld")
  //   await contractO.DELETE()
  //   assert.throws(iThrowError(contractO), Error)
  // })
})