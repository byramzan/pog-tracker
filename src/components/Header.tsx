import { Card } from "@/components/ui/card";

interface HeaderProps {
  latestBlock: number;
  processingBlocks: number;
}

export const Header = ({ latestBlock, processingBlocks }: HeaderProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-crypto" />
      
      {/* Glassmorphism header */}
      <Card className="relative backdrop-blur-xl bg-card/40 border-border/50 shadow-2xl">
        <div className="container mx-auto px-6 py-8">
          {/* Main title section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-electric-purple bg-clip-text text-transparent mb-4 animate-fade-in">
              Proof-of-Gamble
            </h1>
            <div className="text-xl md:text-2xl font-semibold text-foreground/90 mb-2 animate-slide-up">
              Block Explorer
            </div>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto animate-fade-in">
              "Where KOL buys create blocks and copytrader losses confirm them"
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Latest Block */}
            <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 backdrop-blur-sm hover:from-primary/25 hover:to-primary/10 transition-all duration-300 animate-pulse-glow">
              <div className="p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  #{latestBlock}
                </div>
                <div className="text-sm text-muted-foreground">Latest Block</div>
              </div>
            </Card>

            {/* Processing Blocks */}
            <Card className="bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30 backdrop-blur-sm hover:from-accent/25 hover:to-accent/10 transition-all duration-300">
              <div className="p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-2 animate-float">
                  {processingBlocks}
                </div>
                <div className="text-sm text-muted-foreground">Processing Blocks</div>
              </div>
            </Card>

            {/* Consensus Type */}
            <Card className="bg-gradient-to-br from-electric-purple/20 to-electric-purple/5 border-electric-purple/30 backdrop-blur-sm hover:from-electric-purple/25 hover:to-electric-purple/10 transition-all duration-300">
              <div className="p-6 text-center">
                <div className="text-lg font-bold text-electric-purple mb-2">
                  PoG
                </div>
                <div className="text-sm text-muted-foreground">Consensus</div>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
};