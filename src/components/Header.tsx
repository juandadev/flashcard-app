import { TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { useIsMobile } from "@/hooks/use-mobile.ts";
import LogoIcon from "@/icons/LogoIcon.tsx";
import LogoMarkIcon from "@/icons/LogoMarkIcon.tsx";

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="flex justify-between">
      {isMobile ? <LogoMarkIcon size={40} /> : <LogoIcon size={40} />}
      <TabsList>
        <TabsTrigger value="study">Study Mode</TabsTrigger>
        <TabsTrigger value="all">All Cards</TabsTrigger>
      </TabsList>
    </header>
  );
}
