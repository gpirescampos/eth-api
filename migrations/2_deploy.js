var Obj = artifacts.require("./Object.sol");
var Controller = artifacts.require("./Controller.sol");
var Helpers = artifacts.require("./Helpers.sol");

module.exports = function(deployer) {
  deployer.deploy(Obj, "HelloWorld");

  deployer.deploy(Helpers);
  deployer.link(Helpers, Controller);
  deployer.deploy(Controller);
};
