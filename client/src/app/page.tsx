import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 gap-8 md:gap-12 ">
      {/* Hero Section */}
      <section className="w-full mx-auto max-w-7xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight">
              Progressive Ownership
              <span className="block text-yellow-400">for Digital Assets</span>
            </h1>
            <p className="text-lg">
              Trade, collect, and own digital assets with our revolutionary game
              platform. Experience the future of blockchain gaming with
              progressive ownership.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-green-200 hover:bg-green-200">
                Start Trading
              </Button>
              <Button variant="outline" size="lg">
                Explore Cards
              </Button>
            </div>
          </div>

          <div className="relative h-[350px] md:h-[500px] rounded-lg border-2 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="absolute inset-0 bg-purple-200 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 p-4 transform rotate-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-36 h-48 rounded-lg border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transform hover:-translate-y-2 transition-transform">
                    <span className="text-3xl font-black text-black">#{i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Featured Cards Section */}
      <section className="w-full mx-auto max-w-7xl mb-8">
        <div className="flex flex-col gap-6 ">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-black">Featured Cards</h2>
            <Button variant="outline">View All</Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card
                key={i}
                className={`overflow-hidden bg-gradient-to-b ${getGradientColor(
                  i
                )}`}>
                <CardHeader>
                  <CardTitle>Card #{i}</CardTitle>
                  <CardDescription className="font-medium text-black">
                    Rare Collection
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="aspect-square rounded-md bg-white/20 border-2 border-black flex items-center justify-center">
                    <span className="text-4xl font-black">#{i}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="font-bold">0.{i} ETH</div>
                  <Button variant="outline" size="sm">
                    Trade Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Features Section */}
      <section className="w-full mx-auto max-w-7xl">
        <h2 className="text-3xl font-black mb-6">Game Features</h2>

        <Tabs defaultValue="ownership">
          <TabsList className="mb-6 w-full justify-start overflow-x-auto">
            <TabsTrigger value="ownership">Progressive Ownership</TabsTrigger>
            <TabsTrigger value="trading">Card Trading</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
            <TabsTrigger value="rewards">Daily Rewards</TabsTrigger>
          </TabsList>

          <TabsContent value="ownership" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  Progressive Ownership Model
                </h3>
                <p className="dark:text-gray-300">
                  Our unique system allows players to gradually increase their
                  ownership stake in digital assets through gameplay, trading,
                  and community participation.
                </p>
                <ul className="space-y-2">
                  {[
                    "Earn ownership through gameplay",
                    "Trade partial ownership rights",
                    "Collaborate with other players",
                    "Build your digital portfolio",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 dark:text-gray-300">
                      <div className="size-6 rounded-full bg-green-300 border-2 border-black dark:border-white flex items-center justify-center text-xs font-bold text-black">
                        ✓
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant={"outline"}>Learn More</Button>
              </div>
              <div className="rounded-lg border-2 border-black dark:border-white overflow-hidden bg-green-100 dark:bg-green-900/30 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.8)] flex items-center justify-center">
                <div className=" h-[80%] aspect-square rounded-full border-2 border-black dark:border-white relative overflow-hidden bg-white dark:bg-white flex items-center justify-center shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.8)]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 rounded-full border-4 border-dashed border-black dark:border-white animate-spin-slow"></div>
                  </div>
                  <div className="z-10 text-xl font-black text-black dark:text-white">
                    OWNERSHIP
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="trading" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  Advanced Card Trading System
                </h3>
                <p className="dark:text-gray-300">
                  Trade your digital assets with other players through our
                  secure and transparent marketplace. Set your own prices and
                  negotiate deals in real-time.
                </p>
                <ul className="space-y-2">
                  {[
                    "Peer-to-peer trading",
                    "Secure escrow system",
                    "Trading history tracking",
                    "Value appreciation potential",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 dark:text-gray-300">
                      <div className="size-6 rounded-full bg-blue-300 border-2 border-black dark:border-white flex items-center justify-center text-xs font-bold text-black">
                        ✓
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline">Open Marketplace</Button>
              </div>
              <div className="rounded-lg border-2 border-black dark:border-white overflow-hidden bg-blue-100 dark:bg-blue-900/30 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.8)] p-6 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 transform -rotate-6">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-28 h-40 rounded-lg border-2 border-black dark:border-white bg-white dark:bg-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] flex items-center justify-center transform hover:scale-105 transition-transform">
                      <span className="text-2xl font-black text-black dark:text-white">
                        #{i}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="blockchain" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  Built on Blockchain Technology
                </h3>
                <p className="dark:text-gray-300">
                  Our platform leverages the security and transparency of
                  blockchain to ensure true ownership of your digital assets.
                  Every transaction is verifiable and permanent.
                </p>
                <ul className="space-y-2">
                  {[
                    "True asset ownership",
                    "Transparent transaction history",
                    "Interoperability with wallets",
                    "Cross-platform compatibility",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 dark:text-gray-300">
                      <div className="size-6 rounded-full bg-yellow-300 border-2 border-black dark:border-white flex items-center justify-center text-xs font-bold text-black">
                        ✓
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant={"outline"}>Connect Wallet</Button>
              </div>
              <div className="rounded-lg border-2 border-black dark:border-white overflow-hidden bg-yellow-100 dark:bg-yellow-900/30 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.8)] p-6 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="grid grid-cols-3 grid-rows-3 gap-2">
                    {Array(9)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className="w-16 h-16 rounded-md border-2 border-black dark:border-white bg-white dark:bg-gray-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)] flex items-center justify-center">
                          <div className="w-8 h-8 rounded-md bg-yellow-300 dark:bg-yellow-500 border-2 border-black dark:border-white"></div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rewards" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Daily Rewards System</h3>
                <p className="dark:text-gray-300">
                  Log in daily to earn rewards, special cards, and ownership
                  tokens. Our rewards system is designed to keep you engaged and
                  rewarded for your loyalty.
                </p>
                <ul className="space-y-2">
                  {[
                    "Daily login bonuses",
                    "Streak multipliers",
                    "Special event rewards",
                    "Surprise card drops",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 dark:text-gray-300">
                      <div className="size-6 rounded-full bg-red-300 border-2 border-black dark:border-white flex items-center justify-center text-xs font-bold text-black">
                        ✓
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline">Claim Today's Reward</Button>
              </div>
              <div className="rounded-lg border-2 border-black dark:border-white overflow-hidden bg-red-100 dark:bg-red-900/30 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.8)] p-6 flex items-center justify-center">
                <div className="w-40 h-40 rounded-md border-4 border-black dark:border-white bg-white dark:bg-gray-800 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.8)] flex items-center justify-center relative">
                  <div className="z-10 text-xl font-black text-black dark:text-white">
                    DAILY
                    <br />
                    REWARD
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <Separator />

      {/* Community Section */}
      <section className="w-full mx-auto max-w-7xl">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-black">Community Traders</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <Avatar className="w-16 h-16">
                    <AvatarImage
                      src={`https://i.pravatar.cc/150?img=${i + 10}`}
                    />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <div className="font-bold">Trader #{i + 1}</div>
                    <div className="text-sm">Level {20 + i}</div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-center mt-4">
            <Button variant="outline">Join Community</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full mx-auto max-w-7xl mt-8">
        <div className="rounded-lg border-4 border-black bg-blue-200 p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:-rotate-1 hover:translate-y-1 transition-all duration-500">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h2 className="text-4xl font-black">
                Ready to Start Your Collection?
              </h2>
              <p className="text-lg">
                Join thousands of traders in the new era of digital asset
                ownership. Start collecting, trading, and owning today!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper function to get different gradient colors for cards
function getGradientColor(index: number) {
  const colors = [
    "from-blue-200 to-blue-300",
    "from-green-200 to-green-300",
    "from-pink-200 to-pink-300",
    "from-yellow-200 to-yellow-300",
  ];
  return colors[index % colors.length];
}
