import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { ProcessingQueue, ProcessingBlock } from "@/components/ProcessingQueue";
import { ConfirmedBlocks } from "@/components/ConfirmedBlocks";
import { mockProcessingBlocks, mockConfirmedBlocks, generateRandomBlock } from "@/data/mockData";

const Index = () => {
  const [processingBlocks, setProcessingBlocks] = useState<ProcessingBlock[]>(mockProcessingBlocks);
  const [latestBlockId, setLatestBlockId] = useState(1006);

  // Auto-update processing queue every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newBlockId = latestBlockId + 1;
      const newBlock = generateRandomBlock(newBlockId, 1);
      
      setProcessingBlocks(prevBlocks => {
        // Add new block to front and update positions
        const updatedBlocks = [newBlock, ...prevBlocks].map((block, index) => ({
          ...block,
          position: index + 1
        }));
        
        // Keep only the latest 4 blocks in processing
        return updatedBlocks.slice(0, 4);
      });
      
      setLatestBlockId(newBlockId);
    }, 5000);

    return () => clearInterval(interval);
  }, [latestBlockId]);

  return (
    <div className="min-h-screen bg-gradient-crypto">
      <div className="relative">
        {/* Header */}
        <Header 
          latestBlock={latestBlockId} 
          processingBlocks={processingBlocks.length} 
        />
        
        {/* Main content */}
        <div className="container mx-auto px-6 py-8 space-y-12">
          {/* Processing Queue */}
          <section className="animate-fade-in">
            <ProcessingQueue blocks={processingBlocks} />
          </section>
          
          {/* Confirmed Blocks */}
          <section className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <ConfirmedBlocks blocks={mockConfirmedBlocks} />
          </section>
        </div>
        
        {/* Background decorative elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -left-32 w-64 h-64 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-3/4 right-1/4 w-32 h-32 rounded-full bg-electric-purple/5 blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
      </div>
    </div>
  );
};

export default Index;
