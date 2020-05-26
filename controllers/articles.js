const Url = require("../models/Urls");
let Parser = require("rss-parser");
let parser = new Parser();
let feedItems = [];
exports.getArticles = async (req, res, next) => {
  try {
    const urls = await Url.find();
    urls.map((url) => {
      (async () => {
        let feed = await parser.parseURL(url.urlText);

        feed.items.map((item) => {
          feedItems = feedItems.concat({
            link: item.link,
          });
        });
      })();
    });

    setTimeout(() => {
      return (
        res.status(200).json({
          success: true,
          count: feedItems.length,
          data: feedItems,
        }),
        (feedItems = [])
      );
    }, 1000);
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
