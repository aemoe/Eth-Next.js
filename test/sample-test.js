const { expect } = require("chai");

describe("Greeter", function() {
  // it("Should return the new greeting once it's changed", async function() {
  //   const Greeter = await ethers.getContractFactory("Greeter");
  //   const greeter = await Greeter.deploy("Hello, world!");
    
  //   await greeter.deployed();
  //   expect(await greeter.greet()).to.equal("Hello, world!");

  //   await greeter.setGreeting("Hola, mundo!");
  //   expect(await greeter.greet()).to.equal("Hola, mundo!");
  // });

  it("Should return the new greeting once it's changed", async function () {
    const Hello = await hre.ethers.getContractFactory('Hello')
    const hello = await Hello.deploy()

    await hello.deployed()
    expect(await hello.get()).to.equal(1)

    await hello.set(2)
    expect(await hello.get()).to.equal(2)
  })

});
