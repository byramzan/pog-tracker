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
        <CheckCircle className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Confirmed Blocks</h2>
        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
          {blocks.length} Confirmed
        </Badge>
      </div>

      <div className="space-y-6">
        {blocks.map((block, index) => (
          <Card 
            key={block.id}
            className="bg-gradient-to-br from-card/90 to-card/70 border-primary/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="p-6">
              {/* Block header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold text-primary">
                    #{block.id}
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Confirmed
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Confirmed at</div>
                  <div className="text-sm font-mono">{block.confirmedAt}</div>
                  <div className="text-xs text-silver mt-1">
                    Gas Used: {block.gasUsed.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* KOL Transaction Section */}
              <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 mb-6">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <TrendingDown className="w-5 h-5" />
                    KOL Transaction
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">KOL</div>
                      <div className="font-semibold text-foreground">{block.kol.name}</div>
                      <div className="text-xs text-muted-foreground font-mono">
                        {formatAddress(block.kol.address)}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-silver mt-1">
                        <Users className="w-3 h-3" />
                        {block.kol.followers.toLocaleString()} followers
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Token</div>
                      <div className="text-xl font-bold text-accent">{block.token}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Amount</div>
                      <div className="text-xl font-bold text-primary">
                        {formatCurrency(block.amount)}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Copytrader Carnage Section */}
              <Card className="bg-gradient-to-r from-destructive/20 to-destructive/10 border-destructive/30 mb-4">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-destructive mb-3 flex items-center gap-2">
                    <Flame className="w-5 h-5" />
                    Copytrader Carnage
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-destructive">
                        {block.copytraders.total.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Copytraders</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-destructive">
                        {formatCurrency(block.copytraders.totalLoss)}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Losses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-destructive">
                        {formatCurrency(block.copytraders.avgLoss)}
                      </div>
                      <div className="text-sm text-muted-foreground">Avg Loss/Trader</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Top Casualties */}
              <div>
                <h4 className="text-md font-semibold text-foreground mb-3 flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-destructive" />
                  Top 3 Casualties
                </h4>
                <div className="space-y-2">
                  {block.topCasualties.map((casualty, idx) => (
                    <div 
                      key={casualty.address}
                      className="flex items-center justify-between p-3 bg-destructive/5 border border-destructive/20 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center text-xs font-bold text-destructive">
                          {idx + 1}
                        </div>
                        <div className="font-mono text-sm text-muted-foreground">
                          {formatAddress(casualty.address)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-destructive">
                          {formatCurrency(casualty.loss)}
                        </div>
                        <div className="text-xs text-destructive/70">
                          {casualty.percentage}%
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