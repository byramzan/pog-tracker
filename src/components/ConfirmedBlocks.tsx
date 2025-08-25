import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, TrendingDown, Flame } from "lucide-react";

export interface ConfirmedBlock {
  id: number;
  confirmedAt: string;
  gasUsed: number;
  kol: {
    name: string;
    address: string;
    followers: number;
  };
  token: string;
  amount: number;
  copytraders: {
    total: number;
    totalLoss: number;
    avgLoss: number;
  };
  topCasualties: Array<{
    address: string;
    loss: number;
    percentage: number;
  }>;
}

interface ConfirmedBlocksProps {
  blocks: ConfirmedBlock[];
}

export const ConfirmedBlocks = ({ blocks }: ConfirmedBlocksProps) => {
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
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center animate-casino-flash">
          <span className="text-casino-black font-bold">🏆</span>
        </div>
        <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
          🎉 Winning Tables - Confirmed Blocks 🎉
        </h2>
        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 animate-pulse-glow">
          {blocks.length} Winners
        </Badge>
      </div>

      <div className="space-y-6">
        {blocks.map((block, index) => (
          <Card 
            key={block.id}
            className="casino-card hover:animate-casino-flash transition-all duration-300 animate-fade-in relative overflow-hidden"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Winner decorations */}
            <div className="absolute top-2 left-2 text-2xl opacity-30 animate-float">🏆</div>
            <div className="absolute top-2 right-2 text-2xl opacity-30 animate-float" style={{ animationDelay: '1s' }}>💰</div>
            <div className="absolute bottom-2 left-2 text-2xl opacity-30 animate-float" style={{ animationDelay: '2s' }}>🎰</div>
            <div className="absolute bottom-2 right-2 text-2xl opacity-30 animate-float" style={{ animationDelay: '0.5s' }}>🃏</div>
            
            <div className="p-6 relative">
              {/* Winner header with golden seal */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center animate-casino-flash border-4 border-casino-gold">
                    <span className="text-2xl font-bold text-casino-black">#{block.id}</span>
                  </div>
                  <Badge className="bg-primary/90 text-casino-black border-primary animate-pulse-glow">
                    <span className="mr-1">🏆</span>
                    WINNER - CONFIRMED
                  </Badge>
                </div>
                <div className="text-right bg-casino-black/20 p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">🏁 Game Closed</div>
                  <div className="text-sm font-mono text-primary">{block.confirmedAt}</div>
                  <div className="text-xs text-casino-silver mt-1">
                    ⛽ House Fee: {block.gasUsed.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Dealer's Final Hand */}
              <Card className="bg-gradient-to-r from-primary/20 to-primary/10 border-primary/30 mb-6">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <span className="text-lg">🎩</span>
                    Dealer's Final Hand
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">🎰 Dealer (KOL)</div>
                      <div className="font-semibold text-foreground">{block.kol.name}</div>
                      <div className="text-xs text-muted-foreground font-mono bg-casino-black/20 px-2 py-1 rounded">
                        {formatAddress(block.kol.address)}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-casino-silver mt-1">
                        <Users className="w-3 h-3" />
                        {block.kol.followers.toLocaleString()} followers
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">🎯 Token Played</div>
                      <div className="text-xl font-bold text-accent">{block.token}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">💰 Winning Amount</div>
                      <div className="text-xl font-bold text-primary animate-casino-flash">
                        {formatCurrency(block.amount)}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* The Carnage - Player Losses */}
              <Card className="bg-gradient-to-r from-destructive/30 to-destructive/20 border-destructive/50 mb-4">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-destructive mb-3 flex items-center gap-2">
                    <span className="text-lg animate-float">💀</span>
                    The House Always Wins - Player Carnage
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-destructive animate-float">
                        {block.copytraders.total.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">🎲 Total Gamblers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-destructive animate-casino-flash">
                        {formatCurrency(block.copytraders.totalLoss)}
                      </div>
                      <div className="text-sm text-muted-foreground">💸 House Rake</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-destructive">
                        {formatCurrency(block.copytraders.avgLoss)}
                      </div>
                      <div className="text-sm text-muted-foreground">📉 Avg Loss/Player</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Biggest Losers - Hall of Shame */}
              <div>
                <h4 className="text-md font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-lg">🔥</span>
                  Hall of Shame - Biggest Losers
                </h4>
                <div className="space-y-2">
                  {block.topCasualties.map((casualty, idx) => (
                    <div 
                      key={casualty.address}
                      className="flex items-center justify-between p-3 bg-destructive/10 border border-destructive/30 rounded-lg hover:bg-destructive/20 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-destructive/30 flex items-center justify-center text-sm font-bold text-destructive border-2 border-destructive/50">
                          {idx === 0 ? '🥇' : idx === 1 ? '🥈' : '🥉'}
                        </div>
                        <div className="font-mono text-sm text-muted-foreground bg-casino-black/20 px-2 py-1 rounded">
                          {formatAddress(casualty.address)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-destructive">
                          -{formatCurrency(casualty.loss)}
                        </div>
                        <div className="text-xs text-destructive/70">
                          📉 {casualty.percentage}% loss
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};