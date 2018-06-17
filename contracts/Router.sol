pragma experimental ABIEncoderV2;

contract Router {
  address internal owner;
  mapping (string => address) controller;

  constructor() public {
    owner = msg.sender;
  }

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function addController(string _controllerName, address _controllerAddress) public restricted {
    controller[_controllerName] = _controllerAddress;
  }

  function removeController(string _controllerName) public restricted {
    controller[_controllerName] = address(0);
  }

  function checkController(string _controllerName) public view restricted returns(bool) {
    return controller[_controllerName] == address(0);
  }

  function callController(string _controller, string _method, string[] _params) public returns (string _res) {

    address _ad = controller[_controller];
    bytes4 _sig = bytes4(keccak256("callMethod(string)"));

    assembly {
        let x := mload(0x40)   //Find empty storage location using "free memory pointer"
        mstore(x, _sig) //Place signature at begining of empty storage 
        mstore(add(x, 0x04), _method) //Place first argument directly next to signature
        //mstore(add(x,0x24),b) //Place second argument next to first, padded to 32 bytes

        let success := call(      //This is the critical change (Pop the top stack value)
                            5000, // 5k gas
                            _ad,  // To addr
                            0,    // No value
                            x,    // Inputs are stored at location x
                            0x44, // Inputs are 68 bytes long
                            x,    // Store output over input (saves space)
                            0x20) // Outputs are 32 bytes long

        _res := mload(x) // Assign output value to c
        mstore(0x40,add(x,0x44)) // Set storage pointer to empty space
    }
  }
}