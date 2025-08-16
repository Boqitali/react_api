import { useOnline } from "../hooks/useOnline";

export default function OfflineBanner() {
  const online = useOnline();
  if (online) return null;
  return (
    <div className="bg-red-500 text-white text-center py-2">
      Internet yo'q
    </div>
  );
}
