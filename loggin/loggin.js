const loggin = require('log4js');

loggin.configure({
    appenders: { cheese: { type: 'file', filename: 'cheese.txt' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
  });
   
var logger=loggin.getLogger('cheese');
logger.level='debug'
logger.debug("Some debug messages");
logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Comté.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
