import { TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import LogoIcon from "@/icons/LogoIcon.tsx";

export default function Header() {
  return (
    <header className="flex justify-between">
      <LogoIcon size={40} />
      <TabsList>
        <TabsTrigger value="study">Study Mode</TabsTrigger>
        <TabsTrigger value="all">All Cards</TabsTrigger>
      </TabsList>
    </header>
  );
}
