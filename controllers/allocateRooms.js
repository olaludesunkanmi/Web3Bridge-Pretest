const rooms = require("../model/roomDb");

module.exports = async (req, res) => {
  const { name, role, proficiency } = req.body;

  let roomName;
  for (let eachRoom of rooms) {
    console.log(eachRoom);

    if (eachRoom.hasFacilitator !== true && role === "facilitator") {
      eachRoom.hasFacilitator = true;
      eachRoom.names.push(name);
      roomName = eachRoom.roomName;
    }

    if (eachRoom.hasHtmlDev !== true && proficiency === "html") {
      eachRoom.hasHtmlDev = true;
      eachRoom.names.push(name);
      roomName = eachRoom.roomName;
    }
    if (eachRoom.hasCssDev !== true && proficiency === "css") {
      eachRoom.hasCssDev = true;
      eachRoom.names.push(name);
      roomName = eachRoom.roomName;
      console.log("!!!!!!!", roomName);
    }
    if (eachRoom.hasJsDev !== true && proficiency === "javascript") {
      eachRoom.hasJsDev = true;
      eachRoom.names.push(name);
      roomName = eachRoom.roomName;
    }
  }

  return res.status(200).json({
    status: 200,
    message: `You have been allocated to ${roomName}`,
  });
};
