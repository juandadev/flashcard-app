import { createFileRoute } from "@tanstack/react-router";
import { TabsContent } from "@/components/ui/tabs.tsx";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main>
      <TabsContent value="study">Study</TabsContent>
      <TabsContent value="all">All</TabsContent>
    </main>
  );
}
