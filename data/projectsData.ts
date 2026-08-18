export type ProjectCategory = "Fashion Design" | "Brand Marketing & PR";

export type Project = {
  id: string;
  category: ProjectCategory;
  title: string;
  coverImage: string;
  galleryImages: string[];
  description: string;
  role: string;
  year: string;
  sortDate: string;
  tags: string[];
  externalUrl?: string;
  embedUrl?: string;
  metrics?: { reach?: string; engagement?: string; ROI?: string };
};

const pdfPages = (folder: string, count: number) =>
  Array.from({ length: count }, (_, index) => `/${folder}/page-${String(index + 1).padStart(2, "0")}.jpg`);

const sundayHomeDxrPages = pdfPages("sunday-home-brief", 21);
const apiaaadPages = pdfPages("apiaaad-brief", 19);

export const projectsData: Project[] = [
  {
    id: "sunday-home-drx-brief", category: "Brand Marketing & PR", title: "Sunday Home × DRx KOL Brief", year: "MAY — OCT 2025", sortDate: "2025-10", tags: ["Sunday Home", "Influencer Outreach", "Campaign Brief"], role: "KOL outreach, creator briefing & campaign coordination", description: "A 21-page creator outreach brief for the Sunday Home × DRx Mickey inflatable sofa phone-stand collaboration, prepared during my Sunday Home internship.", coverImage: sundayHomeDxrPages[0], galleryImages: sundayHomeDxrPages, metrics: { reach: "690K+", engagement: "160K+", ROI: "7 KOLs" },
  },
  {
    id: "apiaaad-pet-brand-brief", category: "Brand Marketing & PR", title: "A.Piaaad Pet Brand Brief", year: "MAY — OCT 2025", sortDate: "2025-09", tags: ["Sunday Home", "Brand Campaign", "Pet Lifestyle"], role: "Creator briefing, campaign support & visual communication", description: "A 19-page marketing brief for A.Piaaad's pet-brand paw-print sleeping bag campaign, created during my Sunday Home internship.", coverImage: apiaaadPages[0], galleryImages: apiaaadPages,
  },
  {
    id: "balenciaga-virtual-game", category: "Brand Marketing & PR", title: "Balenciaga Virtual Game", year: "OCT 2022 — JAN 2023", sortDate: "2023-01", tags: ["Advertising", "Gaming"], role: "Advertising concept, campaign strategy & presentation design", description: "A virtual game advertising proposal for Balenciaga, connecting digital play, fashion culture and a distinctive campaign world.", coverImage: "https://www.canva.com/design/DAHSfpqTf2g/A327I5oyDGeJ5oaKr-skag/screen", galleryImages: ["https://www.canva.com/design/DAHSfpqTf2g/A327I5oyDGeJ5oaKr-skag/screen"], externalUrl: "https://canva.link/2mae832r86tzrbc", embedUrl: "https://www.canva.com/design/DAHSfpqTf2g/A327I5oyDGeJ5oaKr-skag/view?embed",
  },
  {
    id: "valentino-beauty-korea", category: "Brand Marketing & PR", title: "Valentino Beauty / Korea", year: "FEB — JUL 2023", sortDate: "2023-07", tags: ["Beauty", "Korea Market"], role: "Market research, marketing strategy & campaign development", description: "A South Korea marketing project for Valentino Beauty, connecting local audience insight with an expressive brand campaign.", coverImage: "https://www.canva.com/design/DAGkIxFvp6Y/YuRbOX1Yatx4FIXCeDA2cw/screen", galleryImages: ["https://www.canva.com/design/DAGkIxFvp6Y/YuRbOX1Yatx4FIXCeDA2cw/screen"], externalUrl: "https://canva.link/coqxsdjeq37sn3j", embedUrl: "https://www.canva.com/design/DAGkIxFvp6Y/YuRbOX1Yatx4FIXCeDA2cw/view?embed",
  },
  {
    id: "maison-margiela-machimachi", category: "Brand Marketing & PR", title: "Maison Margiela X MachiMachi", year: "OCT 2022 — JAN 2023", sortDate: "2023-01", tags: ["Collaboration", "Campaign"], role: "Collaboration concept, campaign strategy & creative presentation", description: "A fashion and lifestyle collaboration proposal connecting Maison Margiela and MachiMachi through a distinctive branded experience.", coverImage: "https://www.canva.com/design/DAHSfnaUTBs/0IafWIf5d1xh48JcsgPkaA/screen", galleryImages: ["https://www.canva.com/design/DAHSfnaUTBs/0IafWIf5d1xh48JcsgPkaA/screen"], externalUrl: "https://canva.link/waeib9g0isfbds7", embedUrl: "https://www.canva.com/design/DAHSfnaUTBs/0IafWIf5d1xh48JcsgPkaA/view?embed",
  },
  {
    id: "functional-fashion", category: "Fashion Design", title: "Functional Fashion", year: "2025", sortDate: "2025-04", tags: ["AW25", "Womenswear"], role: "Concept, functional research, silhouette development & styling", description: "A tender study of functionality: starting with bodyextension, bodyshape and bodyskin that bring convenience to people.", coverImage: "https://www.canva.com/design/DAGQFPhm3K0/qIE-ukJK4a0C8IrK_jv67g/screen", galleryImages: ["https://www.canva.com/design/DAGQFPhm3K0/qIE-ukJK4a0C8IrK_jv67g/screen"], externalUrl: "https://canva.link/ajma24z3x9r8k4u", embedUrl: "https://www.canva.com/design/DAGQFPhm3K0/qIE-ukJK4a0C8IrK_jv67g/view?embed",
  },
  {
    id: "material-experimental", category: "Fashion Design", title: "Material Experimental", year: "2022", sortDate: "2022-01", tags: ["Material", "Research"], role: "Fashion concept and material experimentation", description: "An exploratory fashion study focused on material, form and tactile visual language.", coverImage: "https://www.canva.com/design/DAHBIGdOIRo/7C7JakrXuIHLQzPPynZosw/screen", galleryImages: ["https://www.canva.com/design/DAHBIGdOIRo/7C7JakrXuIHLQzPPynZosw/screen"], externalUrl: "https://canva.link/50pohlwnj5n78lj", embedUrl: "https://www.canva.com/design/DAHBIGdOIRo/7C7JakrXuIHLQzPPynZosw/view?embed",
  },
  {
    id: "visualising-the-invisible", category: "Fashion Design", title: "Visualising the Invisible", year: "2026", sortDate: "2026-01", tags: ["Concept", "Visual Culture"], role: "Concept development and visual direction", description: "A visual research project exploring nature, ritual and spirit through layered image-making.", coverImage: "https://www.canva.com/design/DAF9bGFiqHU/YapWiQ6PMKhX7XycVwdLCg/screen", galleryImages: ["https://www.canva.com/design/DAF9bGFiqHU/YapWiQ6PMKhX7XycVwdLCg/screen"], externalUrl: "https://canva.link/0ra7z5hvq1ecu5e", embedUrl: "https://www.canva.com/design/DAF9bGFiqHU/YapWiQ6PMKhX7XycVwdLCg/view?embed",
  },
];
