var Router = artifacts.require("./Router.sol");
var HelloWorldController = artifacts.require("./HelloWorldController.sol");

module.exports = function(deployer) {
  deployer.deploy(Router);
  deployer.deploy(HelloWorldController);
};
