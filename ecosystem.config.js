
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
