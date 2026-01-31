import { polygon } from 'wagmi/chains'

// Smart Contract Addresses (Replace with actual deployed addresses)
export const MBONE_TOKEN_ADDRESS = "0x1234567890123456789012345678901234567890" as `0x${string}` // Replace with actual MBONE token address
export const PAYMENT_PROCESSOR_ADDRESS = "0x0987654321098765432109876543210987654321" as `0x${string}` // Replace with actual payment processor address

// Contract ABIs
export const ERC20_ABI = [
  {
    "inputs": [
      { "name": "spender", "type": "address" },
      { "name": "amount", "type": "uint256" }
    ],
    "name": "approve",
    "outputs": [{ "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "name": "owner", "type": "address" },
      { "name": "spender", "type": "address" }
    ],
    "name": "allowance",
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "name": "account", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }
] as const

export const PROCESSOR_ABI = [
  {
    "inputs": [
      { "name": "orderId", "type": "bytes32" },
      { "name": "invoiceId", "type": "string" }
    ],
    "name": "payOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "name": "orderId", "type": "bytes32" },
      { "name": "amount", "type": "uint256" },
      { "name": "buyer", "type": "address" }
    ],
    "name": "createOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const

// Convert USD to MBONE amount (with 18 decimals) using dynamic price
export const usdToMBONE = (usdAmount: number, mbonePriceUsd: number): bigint => {
  const mboneAmount = usdAmount / mbonePriceUsd
  return BigInt(Math.floor(mboneAmount * 1e18))
}

// Convert MBONE to USD
export const mboneToUSD = (mboneAmount: bigint, mbonePriceUsd: number): number => {
  return (Number(mboneAmount) / 1e18) * mbonePriceUsd
}

// Generate invoice ID from order ID
export const generateInvoiceId = (orderId: string): string => {
  return `ORD-${orderId.slice(0, 8)}`
}

// Get the current chain
export const currentChain = polygon