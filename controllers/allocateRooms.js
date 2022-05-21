const rooms = require("../model/roomDb");
const { validate } = require("../Helper/room");

module.exports = async (req, res) => {
  const { name, role, proficiency } = req.body;

  // Validate request
  const { error } = validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.message);
  }

  let roomName, message;
  for (let eachRoom of rooms) {
    if (
      eachRoom.hasFacilitator !== true &&
      role === "facilitator" &&
      proficiency === "all"
    ) {
      eachRoom.hasFacilitator = true;
      eachRoom.names.push(name);
      roomName = eachRoom.roomName;
      message = `You have been allocated to ${roomName}`;
      break;
    } else {
      message = `There is no more room for allocation`;
    }

    if (
      eachRoom.hasHtmlDev !== true &&
      proficiency === "html" &&
      role === "developer"
    ) {
      eachRoom.hasHtmlDev = true;
      eachRoom.names.push(name);
      roomName = eachRoom.roomName;
      message = `You have been allocated to ${roomName}`;
      break;
    } else {
      message = `There is no more room for allocation for a ${proficiency} developer`;
    }

    if (eachRoom.hasCssDev !== true && proficiency === "css") {
      eachRoom.hasCssDev = true;
      eachRoom.names.push(name);
      roomName = eachRoom.roomName;
      message = `You have been allocated to ${roomName}`;
      break;
    } else {
      message = `There is no more room for allocation for a ${proficiency} developer`;
    }

    if (eachRoom.hasJsDev !== true && proficiency === "javascript") {
      eachRoom.hasJsDev = true;
      eachRoom.names.push(name);
      roomName = eachRoom.roomName;
      message = `You have been allocated to ${roomName}`;
      break;
    } else {
      message = `There is no more room for allocation for a ${proficiency} developer`;
    }
  }

  return res.status(200).json({
    status: 200,
    message,
  });
};
