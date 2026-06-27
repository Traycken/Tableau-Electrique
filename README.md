# ⚡ Tableau Électrique - Configurateur Interactif

Un configurateur web moderne, réactif et épuré pour concevoir, documenter et imprimer des schémas d'implantation de tableaux de distribution électrique (format DIN). 

Conceau en HTML5, CSS3 vanille, et JavaScript moderne, ce projet permet de générer des plans d'implantation propres, exportables et prêts pour l'impression ou la sauvegarde en PDF au format A4/A3.

---

## 🚀 Fonctionnalités Clés

- **Ajustement libre et Modules Vides** : Positionnez vos disjoncteurs et différentiels n'importe où sur le rail DIN. Les espaces vides se comportent comme des modules individuels strictement **verrouillés à 1 module de large** (pour éviter les décalages de grille) que vous pouvez insérer, glisser-déposer, ou supprimer à la volée.
- **Inspecteur Latéral Droit (Master-Detail)** : Sélectionnez un ou plusieurs modules pour modifier instantanément leurs propriétés (Marque / En-tête personnalisé, Description sur plusieurs lignes, Calibre, Largeur, Couleur personnalisée, Icône personnalisée (Emoji, fichier local ou **URL externe**), Mode Réserve, et Câblé/Sous tension).
- **Visibilité intelligente de la tension** : L'option « Câblé / Branché (Sous tension) » s'affiche uniquement si le « Mode Réserve (Non utilisé) » est activé (sinon elle est masquée et forcée à actif par défaut).
- **Descriptions Multi-lignes & Auto-Sizing** : Écrivez des descriptions sur plusieurs lignes (touche `Entrée`). Chaque ligne est interprétée indépendamment et sa police est automatiquement ajustée en taille (de 7px à 4px) pour s'intégrer parfaitement au module sans jamais déborder ni se couper.
- **Gestion des Commentaires & UIDs** : Saisissez des commentaires associés aux modules. Un identifiant unique (**UID**) au format `R[Rangée]-[Lettre][Index]` (ex: `R2-D3`) est généré, affiché en couleur sur le module (`*R2-D3`), et listé dans une section de synthèse « Commentaires » avec un rappel de la structure.
- **Glisser-Déposer Intuitif (Drag & Drop)** : Ordonnez vos modules directement sur le rail électrique ou réorganisez l'arborescence depuis la liste de gauche.
- **Impression Professionnelle & Export PDF** :
  - Choix du format de dessin (A4 Paysage/Portrait, sur-mesure) indépendant du format papier de sortie de l'imprimante (A4, A3).
  - Centrage automatique du dessin avec **lignes de découpe (pointillés)** et indicateurs ciseaux (`✂`) si le format de dessin est plus petit que la page physique.
  - Masquage automatique des barres latérales et des éléments interactifs en mode impression.
- **Grille de Contrôle Mensuel** : Tableau dynamique pour documenter les dates d'activation et de test périodique des disjoncteurs différentiels (bouton Test `T`).
- **Légende Adaptative** : Affiche automatiquement la signification des codes couleur utilisés, de la "Réserve (Non utilisé)" (hachuré), de l'indicateur "⚡ Sous Tension", ainsi que la liste récapitulative des commentaires liés par UID.
- **Gestion de Projet** : Exportez/Importez vos configurations sous forme de fichiers `.te` légers ou enregistrez-les directement dans vos modèles locaux (localStorage).
- **Gestion Undo/Redo & Raccourcis Clavier** : Historique complet pour annuler ou rétablir des actions.

---

## ⌨ Raccourcis Clavier

Les raccourcis suivants sont actifs lorsque vous n'êtes pas en train de saisir du texte dans un champ de formulaire :

| Raccourci | Action |
| :--- | :--- |
| `Ctrl + Z` | Annuler la dernière action (Undo) |
| `Ctrl + Y` | Rétablir l'action annulée (Redo) |
| `Ctrl + C` | Copier le(s) module(s) sélectionné(s) |
| `Ctrl + X` | Couper le(s) module(s) sélectionné(s) |
| `Ctrl + V` | Coller le(s) module(s) dans la rangée active |
| `Delete` | Supprimer le(s) module(s) sélectionné(s) (remplacés par du vide) |
| `Ctrl + Clic` | Sélection multiple d'éléments sur le tableau |

---

## 🛠️ Stack Technique

- **Structure** : HTML5 sémantique.
- **Design & Styles** : CSS3 moderne, typographie *Inter* et *JetBrains Mono*, prise en charge avancée des directives `@media print` et `@page`.
- **Logique** : Vanilla JavaScript (moderne ES6), stockage persistant local via l'API Web Storage (`localStorage`), gestion fine du Drag & Drop HTML5 natif.

---

## 📦 Installation et Utilisation Locale

Aucun serveur ou build n'est nécessaire. Double-cliquez simplement sur le fichier `index.html` pour lancer l'application dans votre navigateur :

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-compte/tableau-electrique.git
   ```
2. Ouvrez le dossier du projet :
   ```bash
   cd tableau-electrique
   ```
3. Ouvrez `index.html` dans le navigateur de votre choix (Chrome, Firefox, Edge, Safari).

---

## 🖨️ Conseils pour l'impression PDF

Pour obtenir un rendu parfait lors de l'exportation en PDF (via la fonction Imprimer de votre navigateur `Ctrl + P`) :
1. Choose la **Mise en page** (Paysage ou Portrait) correspondant à votre **Format de l'Imprimeur** configuré dans la barre latérale.
2. Activez l'option **Graphismes d'arrière-plan** dans les paramètres avancés de l'impression pour conserver les couleurs des disjoncteurs et le motif des modules de réserve.
3. Désactivez les **En-têtes et pieds de page** fournis par le navigateur pour masquer les URL et dates système parasites.
