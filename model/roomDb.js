const rooms = [];

const room1 = {
  id: 1,
  hasFacilitator: true,
  hasHtmlDev: false,
  hasCssDev: false,
  hasJsDev: true,
  hasFemale: false,
  names: [],
  roomName: "Gold",
};

const room2 = {
  id: 2,
  hasFacilitator: false,
  hasHtmlDev: true,
  hasCssDev: false,
  hasJsDev: true,
  hasFemale: false,
  names: [],
  roomName: "Silver",
};

const room3 = {
  id: 3,
  hasFacilitator: true,
  hasHtmlDev: false,
  hasCssDev: true,
  hasJsDev: false,
  hasFemale: true,
  names: [],
  roomName: "Pearl",
  //slotRemaining: 2,
};

rooms.push(room1, room2, room3);
module.exports = rooms;
