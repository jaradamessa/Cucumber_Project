$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/TechfiosLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios Login functionality Validation",
  "description": "",
  "id": "techfios-login-functionality-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "TechfiosDefinition.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 194382600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "TechfiosDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 4621800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "TechfiosDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 148100,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 2389300,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat steps.TechfiosDefinition.user_clicks_on_signin_button(TechfiosDefinition.java:30)\r\n\tat ✽.When User clicks on signin button(src/test/java/features/TechfiosLogin.feature:7)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "TechfiosDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
});