import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { Icons } from "@/components/icons"

export default function Home() {
  return (
    <div className="grid grid-rows-[50px_1fr_50px] items-center justify-items-center h-screen p-4 md:p-6 pb-40 md:pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* <Image
          className="dark:invert"
          src="/icon2.png"
          alt="tfcomposite logo"
          width={80}
          height={80}
          priority
        /> */}
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Looking for a Reliable FRP Grating Supplier?{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold text-blue-500">
              TF Composite
            </code>
          </li>
          <li className="tracking-[-.01em]">
            One-stop supplier of composite materials.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className=" animate-bounce rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/products"
          >
            <Icons.logo className="h-4 w-4" />
            Explore Products
    
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[198px]"
            href="mailto:sales@tfcomposite.com"
          >
            Contact Us
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/products"
        >
          <Icons.logo className="h-4 w-4" />
          FRP Moulded Grating
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          FRP Pultruded Grating
        </Link>

        <SocialLinks
          links={[
            { platform: "linkedin", url: "https://www.linkedin.com/company/anhui-tianfu-new-material/" },
            { platform: "twitter", url: "https://x.com/HuangChauncy" },
            { platform: "facebook", url: "https://www.facebook.com/profile.php?id=61563429747228" },
            { platform: "youtube", url: "https://www.youtube.com/@tfcomposite2024" },
          ]}
          size={28}
        />
      </footer>
    </div>
  );
}
