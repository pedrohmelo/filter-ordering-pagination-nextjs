"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    //agora jogando esse valor pra URL:
    const params = new URLSearchParams();

    const searchString = event.currentTarget.value;
    if (searchString) {
      params.set("search", searchString);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`); //isso aqui que substitui o que foi digitado na URL
  }
  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Busque por nome..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        onChange={handleChange}
      />
    </div>
  );
}
