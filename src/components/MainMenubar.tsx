"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // App Router

export default function NavMenu() {
  const router = useRouter();
  
  return (
    
    <nav className="w-full px-8 py-4 flex items-center justify-between md:shadow md:rounded-full mt-2.5">
      {/* Logo */}
      <div className="flex flex-row text-xl font-bold">
        
        <Image
          className="dark:invert"
          src="/icon2.png"
          alt="tfcomposite logo"
          width={40}
          height={40}
          
        />
        <p className="mt-1.5">
          TF Composite
        </p>
        
      </div>

      {/* 大屏菜单 */}
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-blue-500 transition">
          Home
        </Link>
        <Link href="/products" className="hover:text-blue-500 transition">
          Products
        </Link>
        <Link href="/about" className="hover:text-blue-500 transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-blue-500 transition">
          Contact
        </Link>
      </div>

      {/* 移动端菜单按钮 */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
          <DropdownMenuItem onClick={() => router.push("/")}>Home</DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/products")}>Products</DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/about")}>About</DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/contact")}>Contact</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
