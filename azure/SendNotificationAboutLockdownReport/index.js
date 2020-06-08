module.exports = async function (context, myBlob) {
    const SlackWebhook = require('slack-webhook')
    const slack = new SlackWebhook(process.env.SLACK_WEBHOOK, {
        defaults: {
            username: 'Bot',
            channel: '#prj-lockdown-editorlog',
            icon_emoji: ':robot_face:'
        }
    });

    slack.send({
        text: `Report was generated: ${context.bindingData.uri}`
      })
};