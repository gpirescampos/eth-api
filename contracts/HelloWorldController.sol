pragma experimental ABIEncoderV2;

contract HelloWorldController {
  address public owner;
  mapping (string => address) method;

  constructor() public {
    owner = msg.sender;
  }

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function addMethod(string _methodName, address _methodAddress) public restricted {
    method[_methodName] = _methodAddress;
  }

  function removeMethod(string _methodName) public restricted {
    method[_methodName] = address(0);
  }

  function checkMethod(string _methodName) public view restricted returns(bool) {
    return method[_methodName] == address(0);
  }

  function callMethod(string _method) public view returns (string) {
    return "a";
  }

}
