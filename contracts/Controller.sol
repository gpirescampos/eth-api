pragma experimental ABIEncoderV2;

import "./Object.sol";

contract Controller {
  address[] public objects;
  int public objCount = 0;
  string public controllerName;

  constructor(string _name) public {
    controllerName = _name;
  }

  function POST(string _params) public {
    Object o = new Object(_params);
    objects.push(o);
    objCount++;
  }

  function GET(address _obj) public view returns (string) {
    return Object(_obj).object();
  }

  function PUT(address _obj, string _params) public {
    Object(_obj).PUT(_params);
  }

  function DELETE(address _obj) public {
    Object(_obj).DELETE();
    objCount--;
  }

}