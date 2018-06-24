var Obj = artifacts.require("Object");

contract('Object init', async () => {
  it("Inits Object", async () => {
    const o = await Obj.new("HelloWorld")
    assert.equal(o.address.length, 42)
  })
})