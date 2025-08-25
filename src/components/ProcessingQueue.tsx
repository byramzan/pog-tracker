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
        <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
        <h2 className="text-2xl font-bold text-foreground">Processing Queue</h2>
        <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
          {blocks.length} Active
        </Badge>
      </div>

      <div className="space-y-4">
        {blocks.map((block, index) => (
          <Card 
            key={block.id} 
            className="bg-gradient-to-r from-card/80 to-card/60 border-border/50 backdrop-blur-sm hover:from-card/90 hover:to-card/70 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="p-6">
              {/* Block header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold text-primary">
                    #{block.id}
                  </div>
                  <Badge 
                    variant="outline" 
                    className="bg-accent/10 text-accent border-accent/30 animate-pulse-glow"
                  >
                    Position {block.position} in Queue
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" />
                  {block.startTime}
                </div>
              </div>

              {/* KOL Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-muted-foreground">KOL</span>
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-foreground">{block.kol.name}</div>
                    <div className="text-sm text-muted-foreground font-mono">
                      {formatAddress(block.kol.address)}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-silver mt-1">
                      <Users className="w-3 h-3" />
                      {block.kol.followers.toLocaleString()} followers
                    </div>
                  </div>
                </div>

                {/* Transaction Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm font-medium text-muted-foreground">Transaction</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-accent">{block.token}</span>
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-xl font-semibold text-primary">
                      {formatCurrency(block.amount)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Copytraders */}
              <div className="flex items-center justify-between p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-destructive" />
                  <span className="text-sm font-medium text-destructive">Copytraders</span>
                </div>
                <div className="text-lg font-bold text-destructive">
                  {block.copytraders.toLocaleString()}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};