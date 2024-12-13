// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract KeyManager {
    mapping(address => uint256) public keys;

    function generateKey() public {
        keys[msg.sender] = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender)));
    }

    function getKey(address user) public view returns (uint256) {
        return keys[user];
    }
}
