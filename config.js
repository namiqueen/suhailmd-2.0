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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_11_11_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcyLFxuICAgICAgICAzNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDczLFxuICAgICAgICA0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDM0LFxuICAgICAgICAzMixcbiAgICAgICAgMjMxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc5LFxuICAgICAgICA3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDc1LFxuICAgICAgICA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODksXG4gICAgICAgIDY0LFxuICAgICAgICAzLFxuICAgICAgICA0MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDg3LFxuICAgICAgICA3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NixcbiAgICAgICAgMjA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTAsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MixcbiAgICAgICAgMTU1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDg2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDk5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzLFxuICAgICAgICA2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYyLFxuICAgICAgICA1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZStOZ0NEVE92ekIzU0NkYnltK0o4N0FObjE4WXBvdmJCMC9UK3prRzJkMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaUdwUGg2cDZRWmF6cWlUM1ROY2JoUVwiLFxuICBcInBob25lSWRcIjogXCIyNGEzOTJmMy1hYTI5LTRhZjAtYjliZi0xYTM5YzAwNjEyOGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMxLFxuICAgICAgMTQyLFxuICAgICAgMTUwLFxuICAgICAgMTMwLFxuICAgICAgMjI3LFxuICAgICAgMTc4LFxuICAgICAgMTIyLFxuICAgICAgMjAzLFxuICAgICAgMTI2LFxuICAgICAgMTUzLFxuICAgICAgMTAzLFxuICAgICAgMTMxLFxuICAgICAgMTg0LFxuICAgICAgMTk5LFxuICAgICAgMTc1LFxuICAgICAgNTAsXG4gICAgICAyMzMsXG4gICAgICAyMjYsXG4gICAgICA2MCxcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzYsXG4gICAgICAxNDUsXG4gICAgICAxNTEsXG4gICAgICAxOSxcbiAgICAgIDg2LFxuICAgICAgMjMzLFxuICAgICAgMTI0LFxuICAgICAgMTYxLFxuICAgICAgMTYxLFxuICAgICAgMjI2LFxuICAgICAgMjUxLFxuICAgICAgOTQsXG4gICAgICAxMjUsXG4gICAgICAxMzQsXG4gICAgICAxNzIsXG4gICAgICAyMTMsXG4gICAgICAxNjQsXG4gICAgICAxODUsXG4gICAgICAyNDIsXG4gICAgICAxNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkY3TDlCTDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE5NjMzNTI1MDozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCThILqr63wk4apXFxcIiDqr63wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIg8J2Qk/CdkIDwnZCB8J2QiPCdkJLwnZCHIPCThqrqr63qr60g4oC56q+twrPwk4aqIFxcbvCTg65cXG7wk4OuXFxu8JODrlxcbvCTg65cXG7wk4OuXFxu8JODrlxcbvCTg65cXG7wk4ap8JakjfCThqpcIixcbiAgICBcImxpZFwiOiBcIjUzNjEwMzE4NjY3ODQ5OjM1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B2UHo3UUhFT0Nmb2JvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia1N5dkNQd3p5QmxmQXVPN3U1WTVVZjI4VitmQWdpTXpybTVIeEp2V24xdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1N2ZLSUhtMmozSWtNN2FuSjRhdVhacGFBUlRLY1VaSGVxUU1LVHVyVENIMTdxRUhabzNCVjQvUkl5cERuV2VRY3BPajdYQUpnU1dmVzFlcW9IVDFCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrOXJjRzB2bnhWK2MzVklRU3c2ZDFRWXhkOUhTNGpRODV3MzhuVmh3aS92SVVRTERnUGRncXpzV1pKMkU5M21UZWVmVmVJR3JLN1oxMTFCZVovSitoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxOTYzMzUyNTA6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI3OTIyOTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMVmtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxWay5qc29uIjogIntcImtleURhdGFcIjpcIkpZMU5zWUJkVitxbXJnRFI0OWpnR1MzVE51cGVJaDN5NXJ4bEtOcTlEQTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk4OTQwNDY2NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMjY5NDU5NzIzNlwifSIKfQ=="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
