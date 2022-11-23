import React from "react";

const configuration = require('./configuration.json');
const globalConf = require('./variants/development/global_conf.json')
const content = require('./content.json');

const paths = configuration.paths;
const accessPoints = configuration.access_points;
const responseCodes = configuration.response_codes;

const websiteConnection = globalConf.website_connection;
const host = websiteConnection.frontend_host;

const imagesPath = paths.images_path;
const about = accessPoints.about;
const prizes = accessPoints.prizes;
const awardLists = accessPoints.awardLists;
const payoutCard = accessPoints.payoutCard;
const stateCard = accessPoints.stateCard;
const treatCoin = accessPoints.treatCoin;

const backendURLS: any = {
  imagesPath: host + imagesPath,
  about: host + about,
  top3Prizes: host + prizes,
  awardLists: host + awardLists,
  payoutCard: host + payoutCard,
  stateCard: host + stateCard,
  treatCoin: host + treatCoin
}


class Server {
  static backendURLs = backendURLS;
  static responseCodes = responseCodes;
}
export default Server;