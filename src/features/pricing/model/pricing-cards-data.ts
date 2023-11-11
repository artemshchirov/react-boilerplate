interface Features {
  enabled: boolean;
  text: string;
}

interface CardProps {
  title: string;
  priceMonthly: number;
  features: Features[];
  buttonText: string;
}

export const cards: CardProps[] = [
  {
    title: "Free",
    priceMonthly: 0,
    features: [
      { enabled: true, text: "Up to 5 projects in total" },
      { enabled: true, text: "Up to 10 stills per Project" },
      { enabled: true, text: "Up to 5 collections" },
      { enabled: false, text: "Download Stills" },
      { enabled: false, text: "Shared Collections" },
      { enabled: false, text: "Available for hire badge" },
    ],
    buttonText: "Create Free Account",
  },
  {
    title: "Pro",
    priceMonthly: 6,
    features: [
      { enabled: true, text: "Up to 5 Projects per month" },
      { enabled: true, text: "Up to 15 stills per Project" },
      { enabled: true, text: "Unlimited Collections" },
      { enabled: true, text: "Download Stills" },
      { enabled: true, text: "Shared Collections" },
      { enabled: true, text: "Available for hire badge" },
      { enabled: true, text: "Cancel anytime" },
    ],
    buttonText: "Sign Up",
  },
  {
    title: "Max",
    priceMonthly: 8,
    features: [
      { enabled: true, text: "Up to 10 Projects per month" },
      { enabled: true, text: "Up to 30 stills per Project" },
      { enabled: true, text: "Unlimited Collections" },
      { enabled: true, text: "Download Stills" },
      { enabled: true, text: "Shared Collections" },
      { enabled: true, text: "Available for hire badge" },
      { enabled: true, text: "Cancel anytime" },
    ],
    buttonText: "Sign Up",
  },
];
