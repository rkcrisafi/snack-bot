    var SlackBot = require("slackbots");
    var channel = "general";

    var bot = new SlackBot({
        token: "",
        name: "SnackBot"
    });

    bot.on("start", function() {
        bot.postMessageToChannel(channel, "Hello world!");
        console.log("Hello world!");
    });

    bot.on("message", function(data) {
        console.log(data);
    });