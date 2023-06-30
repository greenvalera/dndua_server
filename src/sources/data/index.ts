type Source = {
  name: string,
  shortName: string,
  isOfficial: boolean
}

const sourcesMap: Source[] = [
  {
    name: "Players Handbook",
    shortName: "PHB",
    isOfficial: true,
  },
  {
    name: "Xanathar's Guide to Everything",
    shortName: "XGtE",
    isOfficial: true,
  },
  {
    name: "Sword Coast Adventurer's Guide",
    shortName: "SCAG",
    isOfficial: true,
  },
  {
    name: "Tasha's Cauldron of Everything",
    shortName: "TCoE",
    isOfficial: true,
  },
  {
    name: "Dungeon Master's Guide",
    shortName: "DMG",
    isOfficial: true,
  },
  {
    name: "Fizban's Treasury of Dragons",
    shortName: "FToD",
    isOfficial: true,
  },
  {
    name: "Van Richten's Guide to Ravenloft",
    shortName: "VRGR",
    isOfficial: true,
  },
];

export {
  sourcesMap,
};

