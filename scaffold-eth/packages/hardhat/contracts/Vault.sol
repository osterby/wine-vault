pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract Vault {
    string public name; // name of vault
    address public owner; // owner of vault

    event LogInitial(address indexed owner, string name);

    constructor(string memory _vault, address _address) {
        name = _vault;
        owner = _address;

        emit LogInitial(owner, name);
    }
}
