$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/853253/eclipse-workspace()/sampleMaven/src/main/java/Features/amazon.feature");
formatter.feature({
  "line": 1,
  "name": "Opening Amazon",
  "description": "",
  "id": "opening-amazon",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Searching rocking horse",
  "description": "",
  "id": "opening-amazon;searching-rocking-horse",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user in on amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user searches \"\u003csearchKey\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify page \"\u003cpageTitle\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "opening-amazon;searching-rocking-horse;",
  "rows": [
    {
      "cells": [
        "searchKey",
        "pageTitle"
      ],
      "line": 10,
      "id": "opening-amazon;searching-rocking-horse;;1"
    },
    {
      "cells": [
        "Best novels",
        "Amazon.com : Best novels"
      ],
      "line": 11,
      "id": "opening-amazon;searching-rocking-horse;;2"
    },
    {
      "cells": [
        "Wooden rocking horse",
        "Amazon.com : Wooden rocking horse"
      ],
      "line": 12,
      "id": "opening-amazon;searching-rocking-horse;;3"
    },
    {
      "cells": [
        "Redmi 5a",
        "Amazon.com : Redmi 5a"
      ],
      "line": 13,
      "id": "opening-amazon;searching-rocking-horse;;4"
    },
    {
      "cells": [
        "Grocery",
        "Amazon.com : Grocery"
      ],
      "line": 14,
      "id": "opening-amazon;searching-rocking-horse;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8095968200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Searching rocking horse",
  "description": "",
  "id": "opening-amazon;searching-rocking-horse;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user in on amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user searches \"Best novels\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify page \"Amazon.com : Best novels\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepOne.user_in_on_amazon_homepage()"
});
formatter.result({
  "duration": 9453853100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Best novels",
      "offset": 15
    }
  ],
  "location": "stepOne.user_searches_searchKey(String)"
});
formatter.result({
  "duration": 7937272300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon.com : Best novels",
      "offset": 13
    }
  ],
  "location": "stepOne.verify_page(String)"
});
formatter.result({
  "duration": 24044600,
  "status": "passed"
});
formatter.after({
  "duration": 2363242700,
  "status": "passed"
});
formatter.before({
  "duration": 5581904300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Searching rocking horse",
  "description": "",
  "id": "opening-amazon;searching-rocking-horse;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user in on amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user searches \"Wooden rocking horse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify page \"Amazon.com : Wooden rocking horse\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepOne.user_in_on_amazon_homepage()"
});
formatter.result({
  "duration": 10737610400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wooden rocking horse",
      "offset": 15
    }
  ],
  "location": "stepOne.user_searches_searchKey(String)"
});
formatter.result({
  "duration": 7607321500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon.com : Wooden rocking horse",
      "offset": 13
    }
  ],
  "location": "stepOne.verify_page(String)"
});
formatter.result({
  "duration": 33737200,
  "status": "passed"
});
formatter.after({
  "duration": 1683621500,
  "status": "passed"
});
formatter.before({
  "duration": 4226034600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Searching rocking horse",
  "description": "",
  "id": "opening-amazon;searching-rocking-horse;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user in on amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user searches \"Redmi 5a\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify page \"Amazon.com : Redmi 5a\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepOne.user_in_on_amazon_homepage()"
});
formatter.result({
  "duration": 4313308800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Redmi 5a",
      "offset": 15
    }
  ],
  "location": "stepOne.user_searches_searchKey(String)"
});
formatter.result({
  "duration": 6039624500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon.com : Redmi 5a",
      "offset": 13
    }
  ],
  "location": "stepOne.verify_page(String)"
});
formatter.result({
  "duration": 12490400,
  "status": "passed"
});
formatter.after({
  "duration": 1499495900,
  "status": "passed"
});
formatter.before({
  "duration": 3876305400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Searching rocking horse",
  "description": "",
  "id": "opening-amazon;searching-rocking-horse;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user in on amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user searches \"Grocery\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify page \"Amazon.com : Grocery\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepOne.user_in_on_amazon_homepage()"
});
formatter.result({
  "duration": 10054235000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Grocery",
      "offset": 15
    }
  ],
  "location": "stepOne.user_searches_searchKey(String)"
});
formatter.result({
  "duration": 8534906200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon.com : Grocery",
      "offset": 13
    }
  ],
  "location": "stepOne.verify_page(String)"
});
formatter.result({
  "duration": 49165400,
  "status": "passed"
});
formatter.after({
  "duration": 1573935800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Screenshoting best novel",
  "description": "",
  "id": "opening-amazon;screenshoting-best-novel",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user in on amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user searches \"\u003csearchKey\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "verify page \"\u003cpageTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click first image",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "take screenshot",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "opening-amazon;screenshoting-best-novel;",
  "rows": [
    {
      "cells": [
        "searchKey",
        "pageTitle"
      ],
      "line": 26,
      "id": "opening-amazon;screenshoting-best-novel;;1"
    },
    {
      "cells": [
        "Best novels",
        "Amazon.com : Best novels"
      ],
      "line": 27,
      "id": "opening-amazon;screenshoting-best-novel;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3939481000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Screenshoting best novel",
  "description": "",
  "id": "opening-amazon;screenshoting-best-novel;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user in on amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user searches \"Best novels\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "verify page \"Amazon.com : Best novels\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click first image",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "take screenshot",
  "keyword": "And "
});
formatter.match({
  "location": "stepOne.user_in_on_amazon_homepage()"
});
formatter.result({
  "duration": 5148100700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Best novels",
      "offset": 15
    }
  ],
  "location": "stepOne.user_searches_searchKey(String)"
});
formatter.result({
  "duration": 7253239800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon.com : Best novels",
      "offset": 13
    }
  ],
  "location": "stepOne.verify_page(String)"
});
formatter.result({
  "duration": 5536900,
  "status": "passed"
});
formatter.match({
  "location": "stepOne.click_first_image()"
});
formatter.result({
  "duration": 6053117500,
  "status": "passed"
});
formatter.match({
  "location": "stepOne.take_screenshot()"
});
formatter.result({
  "duration": 1265848400,
  "status": "passed"
});
formatter.after({
  "duration": 1486092100,
  "status": "passed"
});
});