exports.hngtask = function (req, res) {
  const { x, y, operation_type } = req.body;
  const operation_types = ["addition", "subtraction", "multiplication"];
  if (!operation_types.includes(operation_type)) {
    return res
      .status(400)
      .json({ message: "Invalid operation type provided." });
  }

  let result;
  switch (operation_type) {
    case "addition":
      result = x + y;
      break;
    case "subtraction":
      result = x - y;
      break;
    case "multiplication":
      result = x * y;
      break;
    default:
      break;
  }

  if (!result) {
    return res
      .status(400)
      .json({ message: "Can't proceed with request because input is empty." });
  } else {
    return res
      .status(200)
      .json({ slackUsername: "Oisavictor", operation_type, result });
  }
};
