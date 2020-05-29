let Url = require("../models/Urls");
let Keyword = require("../models/Keywords");
let concatFeed = [];
let filterArray = [];
let Parser = require("rss-parser");
let parser = new Parser();

exports.getArticlesFilter = async (req, res, next) => {
  try {
    const url = await Url.find();
    const filter = await Keyword.find();
    url.map((item) => {
      (async () => {
        let feed = await parser.parseURL(item.urlText);

        feed.items.map((item) => {
          concatFeed = concatFeed.concat({
            title: item.title,
            link: item.link,
            desc: item.description || item.contentSnippet,
          });
        });
      })();
    });

    filter.map((filter) => {
      concatFeed.map((item) => {
        let regex = new RegExp(
          "\\b(\\w*" + filter.keywordText + "\\w*)\\b",
          "i"
        );
        let found = item.title.match(regex) || item.desc.match(regex);
        if (found) {
          filterArray = filterArray.concat({
            link: item.link,
            filter: filter.keywordText
          });
        }
      });
    });
    return (
      res.status(200).json({
        success: true,
        count: filterArray.length,
        data: filterArray,
      }),
      ((concatFeed = []), (filterArray = []))
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
