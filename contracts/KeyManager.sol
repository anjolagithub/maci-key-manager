// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract KeyManager {
    mapping(address => uint256) public keys;

    // Function to generate and store a key
    function generateKey() public {
        keys[msg.sender] = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender)));
    }

    // Function to retrieve the key
    function getKey(address user) public view returns (uint256) {
        return keys[user];
    }
}
