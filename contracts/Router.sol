pragma experimental ABIEncoderV2;

interface Controller {
  function callMethod(string _method, string _params) public view returns (string);
}

contract Router {
  address internal owner;
  mapping (string => address) controller;
  Controller c;

  constructor() public {
  }

  function addController(string _controllerName, address _controllerAddress) public {
    controller[_controllerName] = _controllerAddress;
  }

  function removeController(string _controllerName) public {
    controller[_controllerName] = address(0);
  }

  function checkController(string _controllerName) public view returns(address) {
    return controller[_controllerName];
  }

  function callController(string _controller, string _method, string _params) public returns (string) {
    c = Controller(controller[_controller]);
    return c.callMethod(_method, _params);
  }
}