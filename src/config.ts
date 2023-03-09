import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
  WalletAdapterNetwork.Devnet) as WalletAdapterNetwork;
// const network = WalletAdapterNetwork.Devnet;
export const rpcHost =
  process.env.NEXT_PUBLIC_RPC_HOST || clusterApiUrl(network);

export const candyMachineId = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID ||
    "4zhmA9xGUgTNtfXj7uZESXJ6pHTX1MoaCntFgKqg1ePB"
);
export const defaultGuardGroup =
  process.env.NEXT_PUBLIC_DEFAULT_GUARD_GROUP ||
    "GFSjc9oGnHJaL6QhAzwbC28H9AXJj9EVLrS7EauuM7FM"; // undefined means default

// "qasJ6jhgtngKk2QnEPdDjuFH8NMoM58W8TxPBXAChPY"
// "3zwFR3spiwbSSMtvVKG2bRT6ttqFoC3MHCafGP8ZrdLz"
// "DAA8yRLu7acVs3kxaTyCjoEjNWGinLaCKVhDY29ASNua"

export const whitelistedWallets = [
  "WL2FVB8TmKTEyY8ruy5y1tj9BNpmWar1XoeUCBfN881",
  "WL8VCvQe8SZHV82n4ntLi4k3gJTNh78NZxqD9qTfwgj",
  "WLCaqBATDzfkshYy6WhPVM5kgeQ3y68KXnVB1vBPqjH",
  "WLD2PiDTNQm9TnmyS9TsWK4Eu5rm5Pu2zBUzSGqQQZ8",
  "WLJBzcwwAka1LAMjExVKtrbZKUpCMJvxGaspEE8AA2B",
  "WLpMBLKCHgaqLtigrfFDSCDmm7hYoZ3mWp32PA2ptVH",
  "WLVJLkBYmNauWeGf1ZoS6KFoyJ2YF8h6ig1voVc5Srk",
  "WLvz72jH8gNth92ZRY7ibaaBxG2zcJqYtyMkaWCpbk6",
  "WLWs11vgUXVBp91BV7HQ89PUnM7wmBnkB4zu7BH1fgF",
];
