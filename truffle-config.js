module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {

  },
      // Configure your compilers
  compilers: {
    solc: {
        version: "0.8.7", // Fetch exact version from solc-bin (default: truffle's version)
        docker: true, // Use "0.5.1" you've installed locally with docker (default: false)
        settings: {
            // See the solidity docs for advice about optimization and evmVersion
            optimizer: {
                enabled: false,
                runs: 200
            }
        }
    }
    },

    // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
    //
    // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
    // those previously migrated contracts available in the .db directory, you will need to run the following:
    // $ truffle migrate --reset --compile-all

    db: {
        enabled: false
    }

};
