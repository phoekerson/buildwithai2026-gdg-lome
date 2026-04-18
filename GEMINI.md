# Contexte du Projet : StudentEats Lomé

## 1. Vision du Produit
Une application web ultra-légère destinée aux étudiants vivant à Lomé, Togo. L'objectif est de réduire la charge mentale liée à la planification des repas tout en respectant un budget étudiant local.

## 2. Pile Technique (Tech Stack)
- **Framework :** Next.js 16 (App Router)
- **Langage :** TypeScript
- **Styling :** Tailwind CSS
- **IA :** Google Gemini API (Modèle Flash pour la rapidité)
- **Déploiement :** Vercel

## 3. Fonctionnalités Clés
- **Planning Hebdomadaire (Lun-Sam) :** Suggestions de plats faits maison typiquement togolais (ex: Ayimolou, pâte, riz au gras, fufu léger, spaghetti sauté) avec une estimation du coût des ingrédients sur les marchés de Lomé (Assigamé, Akodésséwa, Hedzranawoé, etc.).
- **Dimanche "Sortie" :** Recommandations de cafétérias, "tourne-dos" ou fast-foods locaux à Lomé proposant des repas complets entre 500 F CFA et 1500 F CFA.
- **Localisation :** Focus exclusif sur Lomé, Togo.

## 4. Contraintes de Design
- Mobile-first (priorité au smartphone).
- Interface propre, minimaliste et rapide à charger (faible consommation de data).
- Affichage clair du jour de la semaine et de l'option correspondante.

## 5. Intégration API
L'application doit envoyer des prompts structurés à Gemini pour recevoir une réponse en format JSON contenant :
- Le nom du plat/lieu.
- Une brève description.
- Le prix estimé en F CFA.