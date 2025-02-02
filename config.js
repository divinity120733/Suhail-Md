const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2347077929655";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_30_02_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDk2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDQwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwLFxuICAgICAgICA1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MixcbiAgICAgICAgMTA0LFxuICAgICAgICAzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgxLFxuICAgICAgICA0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NCxcbiAgICAgICAgNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDU2LFxuICAgICAgICA5NixcbiAgICAgICAgMjI5LFxuICAgICAgICA5NixcbiAgICAgICAgMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEsXG4gICAgICAgIDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInFhY1hvM0RGWVo4d2dzdWFoVWhBNmpkY05oTjBPWHVvancvMHc1SlYrVTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImN4cGpnQXZrUWJDTVlLWTBDWThaQXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWQxNDkwZWEtMTQ3Yy00M2U1LTg1MzQtOTI3MDk4MDFjMmI3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDUzLFxuICAgICAgMjQ3LFxuICAgICAgOCxcbiAgICAgIDExNyxcbiAgICAgIDE4NSxcbiAgICAgIDMxLFxuICAgICAgMTM4LFxuICAgICAgMjQ5LFxuICAgICAgNjMsXG4gICAgICAxMjIsXG4gICAgICAxNDgsXG4gICAgICAxLFxuICAgICAgMjI5LFxuICAgICAgMjIzLFxuICAgICAgMjMxLFxuICAgICAgMTczLFxuICAgICAgNzUsXG4gICAgICAxMTcsXG4gICAgICAxNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMTM3LFxuICAgICAgMjU0LFxuICAgICAgMjU0LFxuICAgICAgMjQ5LFxuICAgICAgNzAsXG4gICAgICAyMTAsXG4gICAgICAyMjgsXG4gICAgICAzMyxcbiAgICAgIDE2MixcbiAgICAgIDIxMyxcbiAgICAgIDI0NyxcbiAgICAgIDg1LFxuICAgICAgNTgsXG4gICAgICAxNTYsXG4gICAgICA2OSxcbiAgICAgIDE3NSxcbiAgICAgIDE3MSxcbiAgICAgIDE1NCxcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdCU0M1SEUzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDc3OTI5NjU1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ5Mjg1MjM2Mjg5Njc4OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXF4MmVrREVKajIvTHdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSWkttUTdRQ3U5U1p5UVkwT0Q1QzEwRkdJZGtqcXhoWDNBMW9vT1pSbUVzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjh1djJXUG5rWHlaUE9sQzJZT2xTay84ZW8zbjVmYkdtUUI0ODFGODY5Yk5oUGNhajA5eGZxQkRpOHMwRUpCUXUxOVpXS29kVnRQZFRnUHZ4a0o5d0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNtd052dHhjZTlhN2JncllVN0hSenZyZ1VOTFdXMUVWQ0dydlduelM3R2NlaGg3M0VBaEluSmZ1bXNGL3lOakFKLytQSWpBYUpNc3hrVjExMVpoNmlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNzc5Mjk2NTU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM4NDg4NjA1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRHFHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEcUcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDaVpWR2FwaHIyazR1M29xU1F6MEdRMTg1SmlZRnVHaGZ4Z3JaU2JBNlE0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjY5NzE4NDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
