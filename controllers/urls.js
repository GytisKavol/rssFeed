const Url = require("../models/Urls");

exports.getUrls = async (req, res, next) => {
  try {
    const urls = await Url.find();

    return res.status(200).json({
      success: true,
      count: urls.length,
      data: urls,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.addUrl = async (req, res, next) => {
  try {
    const { urlText } = req.body;

    const url = await Url.create(req.body);

    return res.status(201).json({
      success: true,
      data: url,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Breaks here",
      });
    }
  }
};

exports.deleteUrl = async (req, res, next) => {
  try {
    const url = await Url.findById(req.params.id);

    if (!url) {
      return res.status(404).json({
        success: false,
        error: "No url found",
      });
    }

    await url.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
