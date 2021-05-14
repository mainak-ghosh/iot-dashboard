const getFormattedDate = () => {
  var date = new Date();
  //var str = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  return Math.round(date / 1000);
};

let simulatedData = {
  deviceId: "000745",
  numberOfTags: 6,
  listOfTags: [
    {
      tagName: "Speed",
      tagValue: Math.floor(Math.random() * 101),
    },
    {
      tagName: "Frequency",
      tagValue: Math.floor(Math.random() * 101),
    },
    {
      tagName: "VOLTAGE",
      tagValue: Math.floor(Math.random() * 101),
    },
    {
      tagName: "Current",
      tagValue: Math.floor(Math.random() * 101),
    },
    {
      tagName: "Torque",
      tagValue: Math.floor(Math.random() * 101),
    },
    {
      tagName: "Running Hour",
      tagValue: Math.floor(Math.random() * 1001),
    },
  ],
  time: getFormattedDate(),
  location: {
    latitude: 45,
    longitude: 58,
  },
};

module.exports = simulatedData;
