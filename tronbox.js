const port = process.env.HOST_PORT || 9090

module.exports = {
  networks: {
    mainnet: {
      privateKey: '7bd3b74498e1500996a29b5a49df5d701056f181f715c25f3e47e582390b3cf4',
      /*
A better way is to read the privateKey from env, create a .env file (it must be gitignored) containing something like

  export PRIVATE_KEY_MAINNET=4E7FECCB71207B867C495B51A9758B104B1D4422088A87F4978BE64636656243

Then, run the migration with:

  source .env && tronbox migrate --network mainnet

*/
      userFeePercentage: 100,
      feeLimit: 1e9,
      fullHost: 'https://api.trongrid.io',
      network_id: '1'
    },
    shasta: {
      privateKey: '7bd3b74498e1500996a29b5a49df5d701056f181f715c25f3e47e582390b3cf4',
      userFeePercentage: 50,
      feeLimit: 1e9,
      fullHost: 'https://api.shasta.trongrid.io',
      network_id: '2'
    },
    nile: {
      privateKey: '7bd3b74498e1500996a29b5a49df5d701056f181f715c25f3e47e582390b3cf4',
      userFeePercentage: 100,
      feeLimit: 1e9,
      fullHost: 'https://api.nileex.io',
      network_id: '3'
    },
    development: {
      // For trontools/quickstart docker image
      privateKey: '7bd3b74498e1500996a29b5a49df5d701056f181f715c25f3e47e582390b3cf4',
      userFeePercentage: 0,
      feeLimit: 1e9,
      fullHost: 'http://127.0.0.1:' + port,
      network_id: '9'
    },
    compilers: {
      solc: {
        version: '0.8.0'
      }
    }
  }
}
