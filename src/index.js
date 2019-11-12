const debug = require('debug')('@gospime/koa-redirect-to');

module.exports = async (context, next) => {
  context.redirectTo = ({ statusCode, message, redirectTo }) => {
    debug({
      statusCode,
      message,
      redirectTo
    });

    context.reply({
      statusCode,
      message,
      payload: { redirectTo }
    });
  };

  await next();
};
