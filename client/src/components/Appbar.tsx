"use client";

import { useState } from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import SyncUser from "./SyncUser";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export function Appbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex backdrop-blur-lg  mx-4 md:mx-24 justify-between items-center px-4 md:px-6 py-3 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 sticky top-2 z-50">
      <div className="text-2xl font-bold tracking-tight">
        <Link href="/">BearWithMe</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 dark:text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Navigation */}
      <header className="hidden md:flex items-center gap-4">
        <SignedOut>
          <SignInButton />
          <SignUpButton mode="modal">
            <Button>Get Started</Button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <Button asChild>
            <Link href="/daily-rewards">Daily Rewards</Link>
          </Button>
          <Button asChild>
            <Link href="/collection">Collection</Link>
          </Button>
          <WalletMultiButton />
          <SyncUser />

          <UserButton />
        </SignedIn>
        <ModeToggle />
      </header>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full  shadow-lg p-4 flex flex-col items-center gap-3 md:hidden">
          <SignedOut>
            <SignInButton />
            <SignUpButton mode="modal">
              <Button>Get Started</Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <Button asChild>
              <Link href="/daily-rewards">Daily Rewards</Link>
            </Button>
            <Button asChild>
              <Link href="/collection">Collection</Link>
            </Button>
            <WalletMultiButton />
            <UserButton />
            <SyncUser />
          </SignedIn>
          <ModeToggle />
        </div>
      )}
    </div>
  );
}
