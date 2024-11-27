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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_02_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NixcbiAgICAgICAgMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDY3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMyLFxuICAgICAgICA0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTksXG4gICAgICAgIDYzLFxuICAgICAgICAyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MixcbiAgICAgICAgMjEyLFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIwLFxuICAgICAgICA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NixcbiAgICAgICAgODQsXG4gICAgICAgIDE1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxODQsXG4gICAgICAgIDM1LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI1LFxuICAgICAgICA1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDI0LFxuICAgICAgICA1NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjExLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDgxLFxuICAgICAgICA0MixcbiAgICAgICAgMTU1LFxuICAgICAgICA3NixcbiAgICAgICAgMjAzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMyxcbiAgICAgICAgODcsXG4gICAgICAgIDc5LFxuICAgICAgICA2MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9vVzhNUS93WXdFaXBhUWlBUUM0bDRMRVljeS93WWlEbExlK0dpbllkdDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpOY0ZKeTR5VE1pTEFxc3FjTm1XOXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTkwMDlmZjQtOGFjYi00MmZjLTg3NmItMGRjNjhjYzM4OTljXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NixcbiAgICAgIDcxLFxuICAgICAgODAsXG4gICAgICAxODYsXG4gICAgICAyMTAsXG4gICAgICA4NCxcbiAgICAgIDE5NixcbiAgICAgIDU2LFxuICAgICAgMjEzLFxuICAgICAgMTI0LFxuICAgICAgMjAxLFxuICAgICAgNTUsXG4gICAgICAyNDMsXG4gICAgICA5MCxcbiAgICAgIDgyLFxuICAgICAgMTI1LFxuICAgICAgMTU0LFxuICAgICAgNzcsXG4gICAgICAyNDYsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQwLFxuICAgICAgMTc4LFxuICAgICAgMjEyLFxuICAgICAgMTQ2LFxuICAgICAgMjM0LFxuICAgICAgMTgxLFxuICAgICAgMTU1LFxuICAgICAgNDYsXG4gICAgICAxOTcsXG4gICAgICAxOTUsXG4gICAgICAxMzUsXG4gICAgICA0LFxuICAgICAgMTMsXG4gICAgICAxNDIsXG4gICAgICAxNTksXG4gICAgICA2MCxcbiAgICAgIDE2MSxcbiAgICAgIDE2MixcbiAgICAgIDI5LFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkEzMlBCQ1gxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxOTYzMzUyNTA6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwk4SC6q+t8JOGqVxcXCIg6q+t8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIPCdkJPwnZCA8J2QgfCdkIjwnZCS8J2QhyDwk4aq6q+t6q+tIOKAueqvrcKz8JOGqiBcXG7wk4OuXFxu8JODrlxcbvCTg65cXG7wk4OuXFxu8JODrlxcbvCTg65cXG7wk4OuXFxu8JOGqfCWpI3wk4aqXCIsXG4gICAgXCJsaWRcIjogXCI1MzYxMDMxODY2Nzg0OTozM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQblB6N1FIRVAyam03b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtTeXZDUHd6eUJsZkF1Tzd1NVk1VWYyOFYrZkFnaU16cm01SHhKdlduMXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicWlLVG55ektRZC8yVi9DejBMZ0FMMmNkWVJRcTNHWTZ1cVZXVU9YSStKZXFMbXkwQkxtMTBQaXRjcFNmY1dXRUdUZURBVUgxTlM5czI1Vk4ybStkQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid3l5aVpXR3NvWjdVVnNaOC9PT1l0bERRMS9XaDFUbkxid0cvUWFTK1pBbW0wUGtFdkd2RlhMRzlGcXlCckJ0Rm90QXBBSm83bitIdmJobHc1WFBOQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTk2MzM1MjUwOjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNjk0NTI4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTFZoXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVmguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5VEhoRFBQR3J1bFdRTFNPVy9vOW9PWmo1VUV6dzZjVHlnZVBPckZUTXhJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5ODk0MDQ2NjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI2OTM0NjA2NjhcIn0iCn0="  // PUT your SESSION_ID 


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
