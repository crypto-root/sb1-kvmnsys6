import { useState } from 'react';
import { Coins, Globe, Users, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Coins className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">$VAULT</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {['Home', 'Mission', 'Community'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <a href="https://$VAULT.bond" target="_blank" rel="noopener noreferrer">
              <Button variant="default">Invest in Coin</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Your Digital Fortress Against Inflation</h1>
              <p className="text-xl text-muted-foreground mb-8">
                $VAULT: A revolutionary digital asset designed to preserve wealth in an era of fiat currency uncertainty. Your secure haven in the digital economy.
              </p>
              <div className="flex space-x-4">
              <a href="https://$VAULT.bond" target="_blank" rel="noopener noreferrer">
              <Button variant="default">Invest in Coin</Button>
            </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-gradient-to-tr from-primary/20 to-primary animate-pulse">
                <img src="/src/assets/logo.jpg" alt="image"></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wealth Preservation</h3>
              <p className="text-muted-foreground">Protected against fiat currency devaluation through our innovative stability mechanism.</p>
            </Card>
            <Card className="p-6">
              <Globe className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Asset-Backed Security</h3>
              <p className="text-muted-foreground">Backed by a strategic reserve of precious metals and stable assets.</p>
            </Card>
            <Card className="p-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Democratic Governance</h3>
              <p className="text-muted-foreground">Community-driven decisions ensure transparency and stability.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>How does $VAULT protect against inflation?</AccordionTrigger>
                <AccordionContent>
                  $VAULT maintains its value through a unique combination of precious metal backing, algorithmic stability mechanisms, and strategic asset reserves, providing a robust hedge against fiat currency depreciation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What makes $VAULT different from traditional cryptocurrencies?</AccordionTrigger>
                <AccordionContent>
                  Unlike volatile cryptocurrencies or traditional stablecoins, $VAULT is designed as a true store of value, backed by real-world assets and maintained through advanced economic models that ensure long-term stability.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How can I participate in the $VAULT ecosystem?</AccordionTrigger>
                <AccordionContent>
                  Join our presale to become an early adopter and participate in governance decisions. $VAULT holders can vote on key decisions and benefit from our stability rewards program.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Join Our Community</h2>
          <div className="flex justify-center space-x-6">
          <a href="https://x.com/$VAULTHODL" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="space-x-2">
              <span>Twitter</span>
            </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Coins className="h-6 w-6 text-primary" />
              <span className="font-bold">$VAULT</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 $VAULT. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;