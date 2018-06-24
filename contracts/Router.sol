pragma experimental ABIEncoderV2;

import "./Controller.sol";

contract Router {
  mapping (string => address) controller;
  string[] public controllers;
  int public controllersCount;

  constructor() public {
  }

  function addController(string _controllerName) public {
    controller[_controllerName] = new Controller();
    controllers.push(_controllerName);
    controllersCount++;
  }

  function removeController(string _controllerName) public {
    controller[_controllerName] = address(0);
    controllersCount--;
  }

  function getNumberOfObjects(string _controller) public view returns (int) {
    return Controller(controller[_controller]).objCount();
  }

  function getObjects(string _controller, uint _objNumber) public view returns (address) {
    return Controller(controller[_controller]).objects(_objNumber);
  }

  function POST(string _controller, string _params) public {
    Controller(controller[_controller]).POST(_params);
  }

  function GET(string _controller, address _obj) public view returns (string) {
    return  Controller(controller[_controller]).GET(_obj);
  }

  function PUT(string _controller, address _obj, string _params) public {
    Controller(controller[_controller]).PUT(_obj, _params);
  }

  function DELETE(string _controller, address _obj) public {
    Controller(controller[_controller]).DELETE(_obj);
  }

}