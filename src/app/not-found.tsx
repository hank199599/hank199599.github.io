// app/not-found.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Image
        src="/dinosaur.gif"
        alt="404 not found"
        width={300}
        height={300}
      />
      <h1 className="text-4xl font-bold mt-4">404 - 找不到頁面</h1>
      <p className="mt-2 text-lg">很抱歉，您要找的頁面不存在。</p>
      <Button asChild variant="outline" className="mt-6">
        <Link href="/">回到首頁</Link>
      </Button>
    </div>
  );
}