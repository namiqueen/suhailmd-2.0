const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923196335250,923196335250";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_00_11_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDkyLFxuICAgICAgICAzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTIzLFxuICAgICAgICA2NyxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM2LFxuICAgICAgICA1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDksXG4gICAgICAgIDk2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNixcbiAgICAgICAgNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDkxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyLFxuICAgICAgICA0MixcbiAgICAgICAgMjMsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQwLFxuICAgICAgICA5OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDUzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMixcbiAgICAgICAgMTA1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg4LFxuICAgICAgICA3NCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInRxVVVaNUFrclNLNmtaVXI2VjlvSHdOM1lMZHFOTVlsSzFuSVdITXpvWVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTk2MzM1MjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNzdGODZCOUM3ODYwM0E3RTJGQjU1MUE3NjQ3RDA4QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI2MDA4MDFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ2dDMmR4bjJRVi0zWm1FSWRmZDA5QVwiLFxuICBcInBob25lSWRcIjogXCIwNWU2MWE1MC05ODczLTRmZWQtYmJjZC04NTFiODM1MjkxNTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICAxNzAsXG4gICAgICAyMTQsXG4gICAgICAxMjQsXG4gICAgICA4OCxcbiAgICAgIDEwMyxcbiAgICAgIDE1NyxcbiAgICAgIDI0MyxcbiAgICAgIDk2LFxuICAgICAgMTg0LFxuICAgICAgMTYwLFxuICAgICAgMCxcbiAgICAgIDIxNyxcbiAgICAgIDE0LFxuICAgICAgMjEwLFxuICAgICAgMjU1LFxuICAgICAgMTY2LFxuICAgICAgMjMxLFxuICAgICAgMTkwLFxuICAgICAgMjUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NCxcbiAgICAgIDIyMyxcbiAgICAgIDE4NyxcbiAgICAgIDI0LFxuICAgICAgMjMyLFxuICAgICAgNzQsXG4gICAgICAxNjUsXG4gICAgICAxMzIsXG4gICAgICAyMjcsXG4gICAgICA5MSxcbiAgICAgIDMxLFxuICAgICAgMjI2LFxuICAgICAgMjU0LFxuICAgICAgMjgsXG4gICAgICAxNDAsXG4gICAgICAzOSxcbiAgICAgIDIyNixcbiAgICAgIDQ1LFxuICAgICAgMzAsXG4gICAgICAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQ0RlJUMURNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxOTYzMzUyNTA6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwk4SC6q+t8JOGqVxcXCIg6q+t8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIPCdkJPwnZCA8J2QgfCdkIjwnZCS8J2QhyDwk4aq6q+t6q+tIOKAueqvrcKz8JOGqiBcXG7wk4OuXFxu8JODrlxcbvCTg65cXG7wk4OuXFxu8JODrlxcbvCTg65cXG7wk4OuXFxu8JOGqfCWpI3wk4aqXCIsXG4gICAgXCJsaWRcIjogXCI1MzYxMDMxODY2Nzg0OToyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQVFB6N1FIRU5qSGxib0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtTeXZDUHd6eUJsZkF1Tzd1NVk1VWYyOFYrZkFnaU16cm01SHhKdlduMXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVHgwb3lBSGtLT3N1OTJEU1NKMUo0QUQ5VUFKSjJDZWpyb29zTHJXc2Qva0lOOXJxY2x1K0xiTS9XL1VuMmoxbC8zYkRROUxHMjBkVnhjdllTUjg3REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWXFJdEswZ2ZhdWFZd2JmQkJhSlNqeEQyd0Z3bFBaUEs0a05hbXNLUEdPOW1ENnE0SmcyTUZZOEtxOFJ0b2xhckZ6QkJVcENPUmR6TUNZZGRXeWx1Q1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTk2MzM1MjUwOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNjAwNzk2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Famous Tabish",
  packname: process.env.PACK_NAME || "Tabish Creater",
  botname : process.env.BOT_NAME  || "Famous Tabish",
  ownername:process.env.OWNER_NAME|| "Tabish-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
