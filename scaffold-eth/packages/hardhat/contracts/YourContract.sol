pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract YourContract {
    // uint256 public constant MY_UNIT = 123; // constant can save gas cost
    // int256 public minInt = type(int256).min;
    // int256 public maxInt = type(int256).max;
    // string public greet = "Hello World!";
    // uint256 public timestamp = block.timestamp; // current block timestamp
    // address public sender = msg.sender; // address of the caller
    // uint256 public num; //state variable
    // mapping(address => uint256) public balances;
    // function deposit() public payable {
    //     balances[msg.sender] += msg.value;
    // }
    // function withdraw(uint256 _amount) public {
    //     // update the state after the external call
    //     // and doing unchecked math, if you cause an overflow, it will not throw an error
    //     msg.sender.call{value: _amount}("");
    //     unchecked {
    //         balances[msg.sender] -= _amount;
    //     }
    // }
    // // need to send a transaction to write to state variable
    // function setNum(uint256 _num) public {
    //     num = _num;
    // }
    // //can read from a state variable without sending a transaction
    // function getNum() public view returns (uint256) {
    //     return num;
    // }
    // function foo(uint256 x) public pure returns (uint256) {
    //     if (x < 10) {
    //         return 0;
    //     } else {
    //         return 1;
    //     }
    // }
    // uint256 public oneWei = 1; // can leave the unit wei
    // uint256 public oneEther = 1 ether;
    // bool public isOneEther = 1 ether == 1e18 wei;
    // // Mapping from address to uint
    // mapping(address => uint256) public myMap;
    // function getMap(address _addr) public view returns (uint256) {
    //     // Mapping always returns a value.
    //     // If the value was never set, it will return the default value.
    //     return myMap[_addr];
    // }
    // function setMap(address _addr, uint256 _i) public {
    //     // Update the value at this address
    //     myMap[_addr] = _i;
    // }
    // function removeMap(address _addr) public {
    //     // Reset the value to the default value.
    //     delete myMap[_addr];
    // }
    // address public owner = 0x44867B301Cb55af0D068ee103bc32b517E91eF2c;
    // event SetPurpose(address sender, string purpose);
    // string public purpose = "Building Unstoppable Apps!!!";
    // constructor() payable {
    //     // what should we do on deploy?
    // }
    // function setPurpose(string memory newPurpose) public {
    //     require(msg.sender == owner, "NOT THE OWNER!!");
    //     purpose = newPurpose;
    //     console.log(msg.sender, "set purpose to", purpose);
    //     emit SetPurpose(msg.sender, purpose);
    // }
    // to support receiving ETH by default
    // receive() external payable {
    //     deposit();
    // } // now when someone calls the receive, it will in turn call the deposit function
    // fallback() external payable {}

    // for Vault.sol

    string public name; // name of vault
    address public owner; // owner of vault

    // event LogInitial(address indexed owner, string name);

    // constructor(string memory _vault, address _address) {
    //     name = _vault;
    //     owner = _address;

    //     emit LogInitial(owner, name);
    // }

    function setName(string memory _name) external {
        name = _name;
    }

    function setOwner(address _address) external {
        owner = _address;
    }
}
