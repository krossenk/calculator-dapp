module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },

    QA: {
      host: "localhost",
      port: 8545,
      network_id: "4", // Rinkeby
      from: "0xd6fdf7914c95579318efc9d9d5a3d92ffc631a25"
    },

    PRODUCTION: {
      host: "localhost",
      port: 8545,
      network_id: "1" // LIVE
    }
  }
};
