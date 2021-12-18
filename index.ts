import dotenv from "dotenv";
import Binance from "node-binance-api";
import main from "./src/main";

dotenv.config();

export const session: Binance = new Binance().options({
  APIKEY: process.env.APIKEY,
  APISECRET: process.env.APISECRET
});

setInterval(main, parseInt(process.env.DELAYEDTIME || "3000"));