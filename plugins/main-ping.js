
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'
let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");
          m.reply(`🟢 *${mssg.ping}* : ${latensi.toFixed(4)} *Milliseconds (ms)*
          
          *𝗧𝗛𝗘-𝗔𝗡𝗦𝗛-𝗕𝗢𝗧*`);
            });
}
handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed']

export default handler
