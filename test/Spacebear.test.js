const Spacebear = artifacts.require("Spacebear");
const truffleAssert = require("truffle-assertions");

const zeroAddress = '0x0000000000000000000000000000000000000000';

contract("Spacebear", (accounts) => {
  it("should mint and nft to an address", async () => {
    // get contract instance
    const spacebear = await Spacebear.deployed();

    // Mint NFT
    const mintTxResult = await spacebear.safeMint(
      accounts.at(0),
      "spacebear_1.json"
    );

    // Verify owner ship
    const tokenId = 0;
    const owner = await spacebear.ownerOf(tokenId);

    truffleAssert.eventEmitted(mintTxResult, "Transfer", {
      from: zeroAddress,
      to: accounts.at(0),
      tokenId: web3.utils.toBN("0"),
    });
    assert.equal(
      owner,
      accounts.at(0),
      "NFT was not minted to the correct address"
    );
  });
});
