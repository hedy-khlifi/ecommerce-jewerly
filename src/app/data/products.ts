export type Category = "Rings" | "Necklaces" | "Earrings" | "Bracelets";

export interface Product {
  id: string;
  name: string;
  price: number; // USD
  category: Category;
  description: string;
  material: string;
  images: string[];
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const products: Product[] = [
  {
    id: "aurelia-ring",
    name: "Aurelia Solitaire Ring",
    price: 1850,
    category: "Rings",
    description:
      "A timeless solitaire crowned with a brilliant-cut stone, hand-set on a slender band of polished gold.",
    material: "18k yellow gold, 0.7ct white sapphire",
    images: [
      img("photo-1605100804763-247f67b3557e"),
      img("photo-1603561591411-07134e71a2a9"),
    ],
  },
  {
    id: "celestine-band",
    name: "Celestine Eternity Band",
    price: 2400,
    category: "Rings",
    description:
      "An eternity of light — pavé stones encircle a fine gold band for endless brilliance.",
    material: "18k yellow gold, pavé diamonds",
    images: [
      img("photo-1611591437281-460bfbe1220a"),
      img("photo-1602173574767-37ac01994b2a"),
    ],
  },
  {
    id: "vesper-signet",
    name: "Vesper Signet Ring",
    price: 980,
    category: "Rings",
    description:
      "A modern heirloom — a smooth, sculpted signet with a softly domed crown.",
    material: "18k yellow gold",
    images: [
      "https://scontent.ftun9-1.fna.fbcdn.net/v/t51.82787-15/520426417_18076191899500213_3841123176566611131_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=K7h_dcdzj0AQ7kNvwFGgK03&_nc_oc=AdrWPfP9BvsyGRQTHOKnu4qeqCNwZyBCEfTK8_UnanBxBjvuvYfwfL3QdDuTJ-5jjA8&_nc_zt=23&_nc_ht=scontent.ftun9-1.fna&_nc_gid=5RmrzZUiICZwZTMb5BQAUw&_nc_ss=7b2a8&oh=00_Af4fiCglnScW1xJzXKluz5cNPA69Kawm7K5S2n1zGNlM1Q&oe=6A011531",
    ],
  },
  {
    id: "lumiere-ring",
    name: "Lumière Cocktail Ring",
    price: 3200,
    category: "Rings",
    description:
      "An expressive statement ring centered on a cushion-cut citrine framed by gold filigree.",
    material: "18k gold, natural citrine",
    images: [img("photo-1535632787350-4e68ef0ac584")],
  },
  {
    id: "soleil-pendant",
    name: "Soleil Pendant Necklace",
    price: 1450,
    category: "Necklaces",
    description:
      "A radiant sunburst pendant suspended on a delicate cable chain — light made wearable.",
    material: "18k gold, white topaz",
    images: [
      img("photo-1599643477877-530eb83abc8e"),
      img("photo-1611652022419-a9419f74343d"),
    ],
  },
  {
    id: "mira-chain",
    name: "Mira Layered Chain",
    price: 890,
    category: "Necklaces",
    description:
      "Two interlaced golden chains in graduated lengths for an effortless layered silhouette.",
    material: "18k gold-vermeil",
    images: [img("photo-1515562141207-7a88fb7ce338")],
  },
  {
    id: "ophelia-locket",
    name: "Ophelia Heirloom Locket",
    price: 1690,
    category: "Necklaces",
    description:
      "An oval locket engraved with a botanical motif — opens to hold what you cherish most.",
    material: "18k yellow gold",
    images: ["https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/469058405_18050730596500213_7226161165494324001_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=4SvJFn7QvzEQ7kNvwFRf6EC&_nc_oc=AdoCEbImztxiDB_cT7YIDmrteSe3U2cmwGggy2CXVOLRKWmt_DGJO2UgqyLuMHv0XO4&_nc_zt=23&_nc_ht=scontent.ftun9-1.fna&_nc_gid=nyhoJbp-CicpZtR_E68i_w&_nc_ss=7b2a8&oh=00_Af4twKqd18CeFPsWBBU20owoGJdhMvpbrhYUPRypSbim-Q&oe=6A011C55"],
  },
  {
    id: "noor-choker",
    name: "Noor Pearl Choker",
    price: 2100,
    category: "Necklaces",
    description:
      "Hand-knotted Akoya pearls finished with a hidden gold clasp — refined and luminous.",
    material: "Akoya pearls, 18k gold clasp",
    images: [img("photo-1611591437281-460bfbe1220a")],
  },
  {
    id: "lyra-studs",
    name: "Lyra Pearl Studs",
    price: 540,
    category: "Earrings",
    description:
      "Classic freshwater pearls cradled in fine gold settings — a quiet everyday luxury.",
    material: "18k gold, freshwater pearl",
    images: [img("photo-1535632066927-ab7c9ab60908")],
  },
  {
    id: "aria-drops",
    name: "Aria Drop Earrings",
    price: 1280,
    category: "Earrings",
    description:
      "Faceted teardrops swing weightlessly from slender gold posts for a graceful silhouette.",
    material: "18k gold, white quartz",
    images: [
      "https://scontent.ftun9-1.fna.fbcdn.net/v/t51.75761-15/504291660_18073011482500213_1057625997047734959_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=Bweq3_rqVcMQ7kNvwHiin6r&_nc_oc=AdoR9dF_iGh90oKYiGcrTz8gdS53M8TjI3CqeF77ULrtMEV9kpRaMDoKju3h_mjd3Y0&_nc_zt=23&_nc_ht=scontent.ftun9-1.fna&_nc_gid=QREr4Vonf9sxnxSyvAVE8A&_nc_ss=7b2a8&oh=00_Af5T0JlBM5EEv24OXuFIK6Un8_EJ57CDPl1TYJxERVl7rg&oe=6A011A0F",
    ],
  },
  {
    id: "selene-hoops",
    name: "Selene Sculpted Hoops",
    price: 760,
    category: "Earrings",
    description:
      "Sculptural hoops with a hand-hammered finish that catches the light from every angle.",
    material: "18k gold-vermeil",
    images: [img("photo-1633934542430-0905ccb5f050")],
  },
  {
    id: "talia-climbers",
    name: "Talia Diamond Climbers",
    price: 1950,
    category: "Earrings",
    description:
      "Modern ear climbers traced in pavé stones that curve along the lobe like a constellation.",
    material: "18k gold, pavé diamonds",
    images: [img("photo-1630019852942-f89202989a59")],
  },
  {
    id: "isolde-bangle",
    name: "Isolde Polished Bangle",
    price: 1120,
    category: "Bracelets",
    description:
      "A perfectly weighted bangle with a mirror-polished finish and a discreet hinged clasp.",
    material: "18k yellow gold",
    images: [img("photo-1611085583191-a3b181a88401")],
  },
  {
    id: "esme-tennis",
    name: "Esmé Tennis Bracelet",
    price: 3450,
    category: "Bracelets",
    description:
      "A continuous line of brilliant stones set in fine gold links — the definitive classic.",
    material: "18k gold, white sapphires",
    images: [img("photo-1599643477877-530eb83abc8e")],
  },
  {
    id: "noa-charm",
    name: "Noa Charm Bracelet",
    price: 690,
    category: "Bracelets",
    description:
      "A delicate gold chain finished with a single hand-engraved coin charm.",
    material: "18k gold-vermeil",
    images: [img("photo-1602173574767-37ac01994b2a")],
  },
  {
    id: "rhea-cuff",
    name: "Rhea Sculpted Cuff",
    price: 1580,
    category: "Bracelets",
    description:
      "An open cuff sculpted from a single ribbon of gold — modern, architectural, weightless.",
    material: "18k yellow gold",
    images: [
      "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/469435056_18050730887500213_4632421913257743236_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=1b1H6ayUei0Q7kNvwFYU9ie&_nc_oc=AdoeIaecc9g3Qn9RWsnSCiIuhxfauANxOSHk-2Fb4l82JDRPqZOkQRTPJ5RbAdfCrHc&_nc_zt=23&_nc_ht=scontent.ftun9-1.fna&_nc_gid=Usb1hRuV6J5__zXviM7Mvg&_nc_ss=7b2a8&oh=00_Af4wlc6ZmsPLYx5b_RvufOdWejTb8fflGmhVzyY_h86vWA&oe=6A012BFB",
    ],
  },
];

export const categories: Category[] = [
  "Rings",
  "Necklaces",
  "Earrings",
  "Bracelets",
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
