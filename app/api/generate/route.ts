import { model } from "@/lib/gemini";
import { NextResponse } from "next/server";

// Menu de secours si l'API Gemini est saturée
const FALLBACK_MENU = {
  days: [
    { day: "Lundi", meal: "Ayimolou Complet", description: "Riz et haricots avec sauce piment noir (shito) et œuf bouilli. Ingrédients du marché d'Assigamé.", price: "600 F CFA", type: "home" },
    { day: "Mardi", meal: "Pâte de Maïs & Adémè", description: "Pâte blanche servie avec une sauce gluante à base de feuilles d'Adémè et du poisson fumé.", price: "500 F CFA", type: "home" },
    { day: "Mercredi", meal: "Riz au Gras", description: "Riz tomate avec morceaux de soja ou poulet, facile à préparer entre deux cours.", price: "800 F CFA", type: "home" },
    { day: "Jeudi", meal: "Ablo & Sauce Tomate", description: "Petits pains de riz fermenté à la vapeur, servis avec du piment vert et du poisson frit.", price: "700 F CFA", type: "home" },
    { day: "Vendredi", meal: "Spaghetti Sauté", description: "Spaghetti aux légumes et sardines, le classique rapide des étudiants.", price: "600 F CFA", type: "home" },
    { day: "Samedi", meal: "Fufu Léger", description: "Igname pilée avec sauce claire (akpèssè) ou arachide. Ingrédients d'Hedzranawoé.", price: "1000 F CFA", type: "home" },
    { day: "Dimanche", meal: "Sortie Cafétéria", description: "Direction la cafétéria du quartier Adidogomé pour un sandwich complet ou un plat combiné.", price: "1200 F CFA", type: "out" }
  ]
};

export async function GET() {
  try {
    const prompt = `Génère un planning de repas pour étudiants à Lomé (JSON). Lundi-Samedi: fait maison. Dimanche: sortie avec quartier réel. Budget < 1500 F CFA. Structure: { "days": [{ "day", "meal", "description", "price", "type": "home" | "out" }] }`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    return NextResponse.json(JSON.parse(responseText));
    
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Si c'est une erreur de quota (429), on renvoie le menu de secours avec un flag
    if (error.status === 429 || error.message?.includes("429")) {
      return NextResponse.json({ 
        ...FALLBACK_MENU, 
        isFallback: true,
        message: "Quota atteint. Affichage du menu standard de Lomé." 
      });
    }

    return NextResponse.json(
      { error: "Service momentanément indisponible" },
      { status: 500 }
    );
  }
}
