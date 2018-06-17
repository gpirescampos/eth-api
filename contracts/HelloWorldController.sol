pragma experimental ABIEncoderV2;

contract HelloWorldController {
  address public owner;
  mapping (string => address) method;

  constructor() public {
  }

  function addMethod(string _methodName, address _methodAddress) public {
    method[_methodName] = _methodAddress;
  }

  function removeMethod(string _methodName) public {
    method[_methodName] = address(0);
  }

  function checkMethod(string _methodName) public view returns(address) {
    return method[_methodName];
  }

  function callMethod(string _method, string _params) public view returns (string) {
    return "a";
  }

}
