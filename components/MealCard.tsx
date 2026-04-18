import { MapPin, ChefHat, Flame } from "lucide-react";

interface MealProps {
  day: string;
  meal: string;
  description: string;
  price: string;
  type: "home" | "out";
}

export default function MealCard({ day, meal, description, price, type }: MealProps) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-6 border border-orange-50/50">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-full ${type === "home" ? "bg-tan/10 text-tan" : "bg-brown/10 text-brown"}`}>
            {type === "home" ? <ChefHat size={18} /> : <MapPin size={18} />}
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-gray-400">{day}</span>
        </div>
        <div className="bg-brown text-white px-3 py-1 rounded-full text-xs font-bold">
          {price}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold leading-tight flex items-center gap-2 text-brown">
          {meal}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <div className="flex items-center gap-1 text-[10px] font-bold uppercase text-tan">
          <Flame size={12} strokeWidth={3} />
          <span>Populaire à Lomé</span>
        </div>
        <div className="h-1 w-1 rounded-full bg-gray-200" />
        <span className="text-[10px] font-bold uppercase text-gray-400">
          {type === "home" ? "Fait maison" : "Restaurant"}
        </span>
      </div>
    </div>
  );
}
