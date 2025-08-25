import { Card } from "@/components/ui/card";

interface HeaderProps {
  latestBlock: number;
  processingBlocks: number;
}

export const Header = ({ latestBlock, processingBlocks }: HeaderProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Casino background */}
      <div className="absolute inset-0 bg-gradient-casino" />
      
      {/* Casino-style header */}
      <Card className="relative casino-card shadow-2xl">
        <div className="container mx-auto px-6 py-8">
          {/* Main title section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4 animate-fade-in" 
                style={{ fontFamily: 'Playfair Display, serif' }}>
              🎰 Proof-of-Gamble 🎰
            </h1>
            <div className="text-xl md:text-2xl font-semibold text-foreground/90 mb-2 animate-slide-up">
              🃏 Block Explorer 🃏
            </div>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto animate-fade-in">
              "Where KOL buys create blocks and copytrader losses confirm them"
            </p>
          </div>

          {/* Casino stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Latest Block - Gold Chip */}
            <Card className="casino-chip hover:animate-chip-bounce transition-all duration-300 animate-casino-flash">
              <div className="p-6 text-center relative">
                <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-casino-white/30"></div>
                <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-casino-white/30"></div>
                <div className="text-2xl md:text-3xl font-bold text-casino-black mb-2">
                  #{latestBlock}
                </div>
                <div className="text-sm text-casino-black/80 font-medium">🎯 Latest Block</div>
              </div>
            </Card>

            {/* Processing Blocks - Roulette Wheel */}
            <Card className="felt-surface border-accent/30 backdrop-blur-sm hover:animate-slot-spin transition-all duration-300">
              <div className="p-6 text-center relative">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-2 animate-spin-roulette">
                  🎰 {processingBlocks} 🎰
                </div>
                <div className="text-sm text-muted-foreground">🎲 Processing Tables</div>
              </div>
            </Card>

            {/* Consensus Type - Playing Card */}
            <Card className="bg-gradient-to-br from-casino-white/10 to-casino-white/5 border-primary/30 backdrop-blur-sm hover:animate-chip-bounce transition-all duration-300">
              <div className="p-6 text-center relative">
                <div className="text-lg font-bold text-primary mb-2">
                  🂠 PoG 🂠
                </div>
                <div className="text-sm text-muted-foreground">♠️ Consensus ♠️</div>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
};