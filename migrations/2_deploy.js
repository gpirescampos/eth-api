var Obj = artifacts.require("./Object.sol");
var Helpers = artifacts.require("./Helpers.sol");

module.exports = function(deployer) {
  // deployer.deploy(Helpers);
  // deployer.link(Helpers, Obj);
  deployer.deploy(Obj, "HelloWorld");
};
