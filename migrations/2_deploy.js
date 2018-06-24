var Obj = artifacts.require("./Object.sol");
var Controller = artifacts.require("./Controller.sol");
var Router = artifacts.require("./Router.sol");
var Helpers = artifacts.require("./Helpers.sol");

module.exports = function(deployer) {
  deployer.deploy(Router);
};
