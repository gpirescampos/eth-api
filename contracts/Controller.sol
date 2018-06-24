pragma experimental ABIEncoderV2;

import "./Object.sol";

// contract Router {
//   mapping (string => address) controller;

//   constructor() public {
//   }

//   function addController(string _controllerName) public {
//     controller[_controllerName] = new Controller();
//   }

//   function removeController(string _controllerName) public {
//     controller[_controllerName] = address(0);
//   }

//   function checkController(string _controllerName) public view returns (address) {
//     return controller[_controllerName];
//   }

//   function callController(string _controller, address _object, string _method, string _params) public view returns (string) {
//     return Controller(controller[_controller]).callMethod(_object, _method, _params);
//   }

// }

contract Controller {
  address[] public objects;
  int public objCount = 0;

  constructor() public {
    
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