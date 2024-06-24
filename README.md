# pm2


  GNU nano 6.2                                                                               ecosystem.config.js                                                                                         
// https://betterstack.com/community/guides/scaling-nodejs/pm2-guide/

//pm2 start ecosystem.config.js
//pm2 restart ecosystem.config.js
//pm2 stop ecosystem.config.js

//Launching applications on system startup
//pm2 startup systemd


module.exports = {
    apps: [{
      name: 'zcloud',
      script: './bin/www',
      max_memory_restart: '5G',//Restarting based on memory usage
     // watch:true,
  
      cron_restart: '0 */24 * * *', //Restarting based on a CRON schedule
  
      restart_delay: 5000, // wait for five seconds before restarting
  
      exp_backoff_restart_delay: 100, // Exponential backoff restart delay
  
      max_restarts: 16, // Exponential backoff restart delay
  
      min_uptime: 5000, // 5 second
      //autorestart: false, //Disabling automatic restarts
  
      // instances: -1,
      // exec_mode : 'cluster',
  
  
    }]
  }
  
