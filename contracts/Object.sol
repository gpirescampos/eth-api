pragma experimental ABIEncoderV2;

contract Object {
  // GET Method
  string public object;

  // POST Method
  constructor(string _params) public {
    object = _params;
  }

  // PUT Method
  function PUT(string _params) public {
    object = _params;
  }

  // DELETE Method
  function DELETE() public {
    selfdestruct(msg.sender);
  }

}