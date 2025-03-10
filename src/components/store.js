// store.js
import { proxy } from "valtio";

const state = proxy({
  colorCategories: [
    {
      name: "Arsenal",
      colors: ["#EF0107", "#FFFFFF", "#1D428A", "#BE9504", "#000000"],
    },
    {
      name: "Aston Villa",
      colors: ["#95BFE5", "#670E36", "#C2C2C2", "#000000"],
    },
    {
      name: "Bournemouth",
      colors: ["#E23A39", "#000000", "#FFFFFF", "#FCE205"],
    },
    { name: "Brentford", colors: ["#E30613", "#FFFFFF", "#000000", "#092E20"] },
    { name: "Brighton", colors: ["#0057B8", "#FFFFFF", "#000000", "#00A3DD"] },
    {
      name: "Chelsea",
      colors: ["#034694", "#FFFFFF", "#002241", "#E21A37", "#000000"],
    },
    {
      name: "Crystal Palace",
      colors: ["#1B458F", "#E03A3E", "#FFFFFF", "#000000"],
    },
    { name: "Everton", colors: ["#003399", "#FFFFFF", "#000000", "#A9B7C2"] },
    { name: "Fulham", colors: ["#FFFFFF", "#000000", "#CC0000", "#6C6C6C"] },
    {
      name: "Liverpool",
      colors: ["#D10027", "#FFFFFF", "#00A398", "#000000", "#FCE205"],
    },
    {
      name: "Luton Town",
      colors: ["#E31837", "#FFFFFF", "#000000", "#282828"],
    },
    {
      name: "Manchester City",
      colors: ["#6CABDD", "#FFFFFF", "#002E5E", "#89BBDE", "#000000"],
    },
    {
      name: "Manchester United",
      colors: ["#DA291C", "#FFFFFF", "#000000", "#FCE205"],
    },
    {
      name: "Newcastle United",
      colors: ["#000000", "#FFFFFF", "#00A3DD", "#E23A39"],
    },
    {
      name: "Nottingham Forest",
      colors: ["#E53233", "#FFFFFF", "#000000", "#FCE205"],
    },
    {
      name: "Sheffield United",
      colors: ["#E23A39", "#FFFFFF", "#000000", "#FCE205"],
    },
    {
      name: "Tottenham Hotspur",
      colors: ["#FFFFFF", "#132043", "#0E63A3", "#000000", "#89BBDE"],
    },
    {
      name: "West Ham United",
      colors: ["#6B1726", "#A9B7C2", "#000000", "#89BBDE"],
    },
    {
      name: "Wolves",
      colors: ["#FDB913", "#000000", "#A9B7C2", "#6B1726"],
    },
    {
      name: "General",
      subSections: [
        {
          name: "Basic",
          colors: [
            "#FFD700",
            "#CC0000",
            "#DA291C",
            "#d0d0d0",
            "#0A0A0A",
            "#007F0E",
          ],
        },
        {
          name: "Skin Tones 1",
          colors: [
            "#e7926d",
            "#1b1b1b",
            "#F9F9F9",
            "#FFE0BD",
            "#F0C29E",
            "#D2B48C",
          ],
        },
        {
          name: "Skin Tones 2",
          colors: [
            "#B8860B",
            "#CD853F",
            "#A0522D",
            "#8B4513",
            "#6F4E37",
            "#5C3317",
          ],
        },
        {
          name: "Skin Tones 3",
          colors: ["#36221C", "#F4A460", "#C76114"],
        },
        {
          name: "Additional",
          colors: [
            "#808080",
            "#C0C0C0",
            "#FFFFFF",
            "#000000",
            "#0000FF",
            "#008000",
          ],
        },
        {
          name: "Additional 2",
          colors: [
            "#FF0000",
            "#FFFF00",
            "#FFA500",
            "#800080",
            "#FFC0CB",
            "#40E0D0",
          ],
        },
        {
          name: "Additional 3",
          colors: ["#A52A2A", "#FAFAD2", "#90EE90"],
        },
      ],
    },
  ],
  selectedColor: "#EF0107",
  selectedPart: null,
  isMobile: window.innerWidth < 768,
});

export { state };
