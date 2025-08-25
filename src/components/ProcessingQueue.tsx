import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, TrendingUp } from "lucide-react";

export interface ProcessingBlock {
  id: number;
  position: number;
  kol: {
    name: string;
    address: string;
    followers: number;
  };
  token: string;
  amount: number;
  copytraders: number;
  startTime: string;
}

interface ProcessingQueueProps {
  blocks: ProcessingBlock[];
}

export const ProcessingQueue = ({ blocks }: ProcessingQueueProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-6 rounded-full casino-chip animate-spin-roulette text-xs flex items-center justify-center text-casino-black font-bold">🎰</div>
        <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
          🎲 Gaming Tables - Processing Queue 🎲
        </h2>
        <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 animate-casino-flash">
          {blocks.length} Active Tables
        </Badge>
      </div>

      <div className="space-y-4">
        {blocks.map((block, index) => (
          <Card 
            key={block.id} 
            className="felt-surface casino-card hover:animate-slot-spin transition-all duration-300 animate-slide-up relative overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Casino table decoration */}
            <div className="absolute top-2 right-2 text-2xl opacity-20">🃏</div>
            <div className="absolute bottom-2 left-2 text-2xl opacity-20">🎰</div>
            
            <div className="p-6 relative">
              {/* Block header with casino chips */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full casino-chip flex items-center justify-center animate-chip-bounce">
                    <span className="text-lg font-bold text-casino-black">#{block.id}</span>
                  </div>
                  <Badge 
                    className="bg-accent/20 text-accent border-accent/50 animate-casino-flash"
                  >
                    🎯 Table {block.position} in Queue
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm bg-casino-black/20 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4" />
                  {block.startTime}
                </div>
              </div>

              {/* Casino gaming table layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                {/* Dealer (KOL) Section */}
                <div className="space-y-3 bg-casino-black/10 p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 text-primary">🎩</div>
                    <span className="text-sm font-medium text-primary">Dealer (KOL)</span>
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-foreground">{block.kol.name}</div>
                    <div className="text-sm text-muted-foreground font-mono bg-casino-black/20 px-2 py-1 rounded">
                      {formatAddress(block.kol.address)}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-casino-silver mt-1">
                      <Users className="w-3 h-3" />
                      {block.kol.followers.toLocaleString()} followers
                    </div>
                  </div>
                </div>

                {/* Game Info */}
                <div className="space-y-3 bg-accent/10 p-4 rounded-lg border border-accent/30">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 text-accent">💎</div>
                    <span className="text-sm font-medium text-accent">Game Stakes</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-accent">{block.token}</span>
                      <TrendingUp className="w-4 h-4 text-primary animate-float" />
                    </div>
                    <div className="text-xl font-semibold text-primary">
                      {formatCurrency(block.amount)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Players at table */}
              <div className="flex items-center justify-between p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎲</span>
                  <span className="text-sm font-medium text-destructive">Players at Table</span>
                </div>
                <div className="text-lg font-bold text-destructive animate-float">
                  {block.copytraders.toLocaleString()} gamblers
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};