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

const backendURLS: any = {
  imagesPath: host + imagesPath,
  about: host + about
}


class Server {
  static backendURLs = backendURLS;
  static responseCodes = responseCodes;
}
export default Server;