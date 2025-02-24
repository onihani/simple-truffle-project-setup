const Spacebear = artifacts.require("Spacebear");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Spacebear, accounts.at(0));
  const instance = await Spacebear.deployed();
  console.log("Deployed at:", instance.address);
};
