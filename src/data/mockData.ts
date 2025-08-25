import { ProcessingBlock } from "@/components/ProcessingQueue";
import { ConfirmedBlock } from "@/components/ConfirmedBlocks";

// Mock data for processing blocks
export const mockProcessingBlocks: ProcessingBlock[] = [
  {
    id: 1006,
    position: 1,
    kol: {
      name: "MoonBoy",
      address: "0x5ef...7g8h",
      followers: 125000
    },
    token: "$PEPE",
    amount: 245792,
    copytraders: 417,
    startTime: "08:57 PM, 08/25/2025"
  },
  {
    id: 1005,
    position: 2,
    kol: {
      name: "MoonBoy",
      address: "0x5ef...7g8h",
      followers: 125000
    },
    token: "$BONK",
    amount: 290061,
    copytraders: 111,
    startTime: "08:45 PM, 08/25/2025"
  },
  {
    id: 1002,
    position: 3,
    kol: {
      name: "CryptoGuru",
      address: "0x9ab...2c3d",
      followers: 89000
    },
    token: "$SHIB",
    amount: 188809,
    copytraders: 274,
    startTime: "08:30 PM, 08/25/2025"
  }
];

// Additional blocks for random generation
export const additionalMockBlocks: Omit<ProcessingBlock, 'id' | 'position' | 'startTime'>[] = [
  {
    kol: {
      name: "DiamondHands",
      address: "0x1bc...5def",
      followers: 156000
    },
    token: "$DOGE",
    amount: 312456,
    copytraders: 523
  },
  {
    kol: {
      name: "CryptoQueen",
      address: "0x7gh...9ijk",
      followers: 203000
    },
    token: "$WIF",
    amount: 178923,
    copytraders: 689
  },
  {
    kol: {
      name: "ToTheMoon",
      address: "0x7a8r...95ot",
      followers: 71000
    },
    token: "$FLOKI",
    amount: 224336,
    copytraders: 453
  },
  {
    kol: {
      name: "SatoshiJr",
      address: "0x2ef...8abc",
      followers: 341000
    },
    token: "$MEME",
    amount: 456789,
    copytraders: 1024
  },
  {
    kol: {
      name: "DegenKing",
      address: "0x4cd...6efg",
      followers: 89500
    },
    token: "$PUMP",
    amount: 123456,
    copytraders: 256
  }
];

// Mock data for confirmed blocks
export const mockConfirmedBlocks: ConfirmedBlock[] = [
  {
    id: 1004,
    confirmedAt: "8/14/2025, 7:48:49 PM",
    gasUsed: 91050,
    kol: {
      name: "ToTheMoon",
      address: "0x7a8r...95ot",
      followers: 71000
    },
    token: "$FLOKI",
    amount: 224336,
    copytraders: {
      total: 453,
      totalLoss: 1833042,
      avgLoss: 4046
    },
    topCasualties: [
      {
        address: "0x8be0...c51",
        loss: 50702,
        percentage: -2.8
      },
      {
        address: "0x9cf1...d62",
        loss: 48293,
        percentage: -2.6
      },
      {
        address: "0xa2d3...e74",
        loss: 45817,
        percentage: -2.5
      }
    ]
  },
  {
    id: 1003,
    confirmedAt: "8/14/2025, 6:23:15 PM",
    gasUsed: 87432,
    kol: {
      name: "CryptoGuru",
      address: "0x9ab...2c3d",
      followers: 89000
    },
    token: "$SHIB",
    amount: 188809,
    copytraders: {
      total: 274,
      totalLoss: 1205634,
      avgLoss: 4400
    },
    topCasualties: [
      {
        address: "0x5fe9...a83",
        loss: 42156,
        percentage: -3.5
      },
      {
        address: "0x6gd2...b94",
        loss: 38924,
        percentage: -3.2
      },
      {
        address: "0x7he3...c05",
        loss: 35678,
        percentage: -3.0
      }
    ]
  },
  {
    id: 1001,
    confirmedAt: "8/14/2025, 5:10:32 PM",
    gasUsed: 93875,
    kol: {
      name: "DiamondHands",
      address: "0x1bc...5def",
      followers: 156000
    },
    token: "$DOGE",
    amount: 312456,
    copytraders: {
      total: 623,
      totalLoss: 2456789,
      avgLoss: 3945
    },
    topCasualties: [
      {
        address: "0x3ab4...f16",
        loss: 68432,
        percentage: -2.8
      },
      {
        address: "0x4bc5...g27",
        loss: 61298,
        percentage: -2.5
      },
      {
        address: "0x5cd6...h38",
        loss: 57834,
        percentage: -2.4
      }
    ]
  }
];

// Function to generate a random processing block
export const generateRandomBlock = (id: number, position: number): ProcessingBlock => {
  const randomBlock = additionalMockBlocks[Math.floor(Math.random() * additionalMockBlocks.length)];
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  }) + ', ' + now.toLocaleDateString('en-US');

  return {
    id,
    position,
    ...randomBlock,
    startTime: timeString
  };
};