const routes = require('next-routes')();

// Account for wildcard urls
routes
  .add('/campaigns/new', '/campaigns/new')
  .add('/campaigns/:address', '/campaigns/show')
  .add('/campaigns/:address/requests', '/campaigns/requests/index');

module.exports = routes;
