"use client";

import { useEffect, useState } from "react";
import MealCard from "@/components/MealCard";
import SkeletonCard from "@/components/SkeletonCard";
import { RefreshCw, Home as HomeIcon, Search, Heart, User, Plus } from "lucide-react";

interface Meal {
  day: string;
  meal: string;
  description: string;
  price: string;
  type: "home" | "out";
}

const DAYS_SHORT = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

export default function Home() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeDay, setActiveDay] = useState(0);

  const fetchMenu = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/generate");
      const data = await response.json();
      setMeals(data.days);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div className="pb-32 md:pb-8">
      {/* Top Header Section (Desktop optimized) */}
      <div className="hidden md:flex justify-between items-center mb-12 bg-white p-6 rounded-[2rem] shadow-sm border border-orange-50">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-tan/20 flex items-center justify-center text-tan font-bold text-2xl story-ring">
            S
          </div>
          <div>
            <h1 className="text-2xl font-black text-brown">Bienvenue, Étudiant !</h1>
            <p className="text-gray-400">Prêt pour ton repas du jour à Lomé ?</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-brown text-white rounded-full font-bold hover:bg-brown/90 transition-all" onClick={fetchMenu}>
            <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
            Actualiser
          </button>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Day Selector & Stats (Desktop) / Stories (Mobile) */}
        <div className="lg:col-span-3">
          <h2 className="text-lg font-bold text-brown mb-4 px-2 lg:px-0">Calendrier</h2>
          <div className="flex lg:flex-col gap-4 overflow-x-auto pb-6 no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0 mb-4">
            {DAYS_SHORT.map((day, i) => (
              <div 
                key={day} 
                onClick={() => setActiveDay(i)}
                className={`flex items-center gap-4 cursor-pointer p-2 rounded-2xl transition-all min-w-[70px] lg:min-w-full ${activeDay === i ? "lg:bg-tan/10 lg:border-l-4 lg:border-tan" : "lg:hover:bg-gray-100"}`}
              >
                <div className={`w-14 h-14 lg:w-10 lg:h-10 rounded-full flex items-center justify-center border-2 transition-all shrink-0 ${activeDay === i ? "border-tan p-1" : "border-transparent"}`}>
                  <div className={`w-full h-full rounded-full flex items-center justify-center text-xs font-bold ${activeDay === i ? "bg-tan text-white" : "bg-white text-gray-400 shadow-sm"}`}>
                    {day}
                  </div>
                </div>
                <span className={`hidden lg:block font-bold ${activeDay === i ? "text-brown" : "text-gray-400"}`}>
                  {i === 0 ? "Lundi" : i === 1 ? "Mardi" : i === 2 ? "Mercredi" : i === 3 ? "Jeudi" : i === 4 ? "Vendredi" : i === 5 ? "Samedi" : "Dimanche"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Center Column: Main Content */}
        <div className="lg:col-span-6">
          <h2 className="text-2xl font-black text-brown mb-6 px-2 lg:px-0 tracking-tight">Le menu du jour</h2>
          <div className="min-h-[300px]">
            {loading ? (
              <SkeletonCard />
            ) : (
              meals.length > 0 && <MealCard {...meals[activeDay]} />
            )}
          </div>
        </div>

        {/* Right Column: Side Info & Suggestions */}
        <div className="lg:col-span-3 space-y-6">
          <h2 className="text-lg font-bold text-brown mb-4 px-2 lg:px-0">Pour toi</h2>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="h-40 bg-tan/10 rounded-[2rem] p-5 flex flex-col justify-end border border-tan/20">
              <span className="text-xs font-bold text-tan uppercase">Marché local</span>
              <p className="font-bold text-brown text-lg">Assigamé</p>
              <p className="text-[10px] text-brown/60">Ouvert jusqu'à 18h</p>
            </div>
            <div className="h-40 bg-brown/5 rounded-[2rem] p-5 flex flex-col justify-end border border-brown/10">
              <span className="text-xs font-bold text-brown/40 uppercase">Budget</span>
              <p className="font-bold text-brown text-lg">Economie : 35%</p>
              <p className="text-[10px] text-brown/60 text-balance">Manger local coûte moins cher.</p>
            </div>
          </div>
          
          <div className="hidden lg:block p-6 bg-white rounded-[2rem] shadow-sm border border-orange-50">
            <h3 className="font-bold text-brown mb-2">Conseil Santé</h3>
            <p className="text-sm text-gray-500 italic">"N'oubliez pas d'ajouter des fruits de saison comme la mangue ou l'ananas."</p>
          </div>
        </div>
      </div>

      {/* Floating Glass Navigation (Visible on mobile, hidden on large screens if desired, or kept for style) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md h-20 glass-nav rounded-[2.5rem] flex items-center justify-around px-6 z-50 md:bottom-12 md:w-[400px]">
        <HomeIcon className="text-white" size={24} />
        <Search className="text-white/40" size={24} />
        <div className="w-12 h-12 bg-tan rounded-full flex items-center justify-center shadow-lg shadow-tan/20 -translate-y-2 cursor-pointer hover:scale-110 transition-transform">
          <Plus className="text-white" size={28} />
        </div>
        <Heart className="text-white/40" size={24} />
        <User className="text-white/40" size={24} />
      </div>
    </div>
  );
}
