pragma experimental ABIEncoderV2;

// library Helpers {
//   function toAsciiString(address x) public view returns (string) {
//     bytes memory s = new bytes(40);
//     for (uint i = 0; i < 20; i++) {
//       byte b = byte(uint8(uint(x) / (2**(8*(19 - i)))));
//       byte hi = byte(uint8(b) / 16);
//       byte lo = byte(uint8(b) - 16 * uint8(hi));
//       s[2*i] = char(hi);
//       s[2*i+1] = char(lo);            
//     }
//     return string(s);
//   }

//   function char(byte b) internal pure returns (byte c) {
//     if (b < 10) return byte(uint8(b) + 0x30);
//     else return byte(uint8(b) + 0x57);
//   }
// }

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

// contract Controller {
//   mapping (string => address) object;

//   constructor() public {
    
//   }

//   function callMethod(address _object, string _method, string _params) public returns (string) {
//     if (keccak256(_method) == keccak256("POST")) {
//       Obj o = new Obj(_params);
//       return Helpers.toAsciiString(o);
//     }
//     else if(keccak256(_method) == keccak256("GET")) {
//       return Obj(_object).obj();
//     }
//     else if (keccak256(_method) == keccak256("PUT")) {
//       return Obj(_object).PUT(_params);
//     }
//     else if (keccak256(_method) == keccak256("DELETE")) {
//       return Obj(_object).DELETE();
//     }
//     else return "Unknown method";
//   }

// }

contract Object {
  // GET Method
  string public object;

  // POST Method
  constructor(string _params) public {
    object = _params;
  }

  // PUT Method
  function PUT(string _params) public returns (string) {
    object = _params;
    return object;
  }

  // DELETE Method
  function DELETE() public returns (string) {
    selfdestruct(msg.sender);
    return "Deleted";
  }

}