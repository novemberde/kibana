/**
 * ELASTICSEARCH CONFIDENTIAL
 * _____________________________
 *
 *  [2014] Elasticsearch Incorporated All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Elasticsearch Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Elasticsearch Incorporated
 * and its suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Elasticsearch Incorporated.
 */

let _ = require("lodash");

module.exports.resolveApi = function (sense_version, apis, reply) {
  let result = {};
  _.each(apis, function (name) {
    {
      // for now we ignore sense_version. might add it in the api name later
      let api = require('./' + name);
      result[name] = api.asJson();
    }
  });

  return reply(result).type("application/json");
};