import { Badge } from "@/components/ui/badge";

export const BannerPattern = () => (
  <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mb-4">
    <div className="flex items-center gap-2">
      <Badge variant="secondary">New</Badge>
      <span className="text-blue-900 font-medium">Untitled UI Banner Pattern</span>
    </div>
    <button className="text-blue-600 hover:underline text-sm">Learn more</button>
  </div>
);
