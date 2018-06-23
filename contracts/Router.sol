pragma experimental ABIEncoderV2;

contract Router {
  mapping (string => address) controller;

  constructor() public {
  }

  function addController(string _controllerName) public {
    controller[_controllerName] = new Controller();
  }

  function removeController(string _controllerName) public {
    controller[_controllerName] = address(0);
  }

  function checkController(string _controllerName) public view returns (address) {
    return controller[_controllerName];
  }

  function callController(string _controller, string _method, string _params) public view returns (string) {
    return Controller(controller[_controller]).callMethod(_method, _params);
  }

}

contract Controller {
  mapping (string => address) method;

  constructor() public {
    
  }

  function addMethod(string _methodName, address _methodAddress) public {
    method[_methodName] = _methodAddress;
  }

  function removeMethod(string _methodName) public {
    method[_methodName] = address(0);
  }

  function checkMethod(string _methodName) public view returns (address) {
    return method[_methodName];
  }

  function callMethod(string _method, string _params) public returns (string) {
    return _params;
  }
  
}

contract Method {

  constructor() public {

  }
}

contract Object {
  string public HelloWorld = "";


}