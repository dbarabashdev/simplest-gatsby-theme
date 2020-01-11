const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---gatsby-theme-simplest-src-templates-events-js": hot(preferDefault(require("/Users/dbarabashdev/dev/engineer/100DaysOfGatsby/simplest-gatsby-theme/gatsby-theme-simplest/src/templates/events.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/dbarabashdev/dev/engineer/100DaysOfGatsby/simplest-gatsby-theme/site/.cache/dev-404-page.js"))),
  "component---gatsby-theme-simplest-src-templates-event-js": hot(preferDefault(require("/Users/dbarabashdev/dev/engineer/100DaysOfGatsby/simplest-gatsby-theme/gatsby-theme-simplest/src/templates/event.js")))
}

