interface MenuItemPayload {
  icon: string;
  word: string;
}
export const MENU_ITEMS: Array<MenuItemPayload> = [
  { icon: "warning", word: "Dangerous Driver" },
  { icon: "bar-chart", word: "Visualize" }
];

interface Stat {
  img?: string;
  yawn: number;
  warning: number;
  status: string;
  possibility: number;
}

export const USER_STAT: Stat = {
  img: "url",
  yawn: 20,
  warning: 3,
  status: "Nap",
  possibility: 0.5
};
