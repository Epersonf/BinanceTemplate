import Binance from "node-binance-api";

const binance = new Binance().options({
  APIKEY: '<key>',
  APISECRET: '<secret>'
});

async function test() {
    console.log( await binance.futuresPrices() );
}

test();