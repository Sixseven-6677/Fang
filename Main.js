const logger = require("./utils/log");
const chalk = require("chalk");
const cv = chalk.bold.hex("#1390f0");
const gradient = require("gradient-string")
const logo = `


▒█▀▀▀█ ░█▀▀█ ▒█▀▀▀█ 
░▄▄▄▀▀ ▒█▄▄█ ▒█░░▒█ 
▒█▄▄▄█ ▒█░▒█ ▒█▄▄▄█


Hi I'M BOT ZAO  DEVELOPED  BY SAIM`;

const c = ["cyan", "#7D053F"];
const redToGreen = gradient("red", "cyan");
console.log(redToGreen("━".repeat(50), { interpolation: "hsv" }));
const text = gradient(c).multiline(logo);
console.log(text);
console.log(redToGreen("━".repeat(50), { interpolation: "hsv" }));

console.log(cv(`\n` + `──ZAOFAN STARTER─●`));


logger.log([
  {
  message: "[ SAIM ]: ",
   color: ["red", "cyan"],
  },
  {
  message: `test`,
  color: "white",
  },
]);

const { spawn } = require('child_process');
const Fastify = require('fastify');
const fastifyStatic = require('@fastify/static'); 
class Zao {
  constructor() {
    this.app = Fastify();
    this.PORT = process.env.PORT || 3000;
    this.countRestart = 0;
    this.child = null;
    this.init();
  }

  init() {
    this.startApp();
    this.startBot();
  }

  startApp() {
    this.startTime = Date.now();
    this.app.get("/", (req, reply) => {
      const uptime = Date.now() - this.startTime;
      const sec = Math.floor(uptime / 1000) % 60;
      const min = Math.floor(uptime / 60000) % 60;
      const hrs = Math.floor(uptime / 3600000) % 24;
      const days = Math.floor(uptime / 86400000);
      const uptimeStr = days + "d " + hrs + "h " + min + "m " + sec + "s";
      const prefix = (global.config && global.config.PREFIX) ? global.config.PREFIX : "\u2655";
      const html = [
        "<!DOCTYPE html><html lang='ar' dir='rtl'><head>",
        "<meta charset='UTF-8'><meta name='viewport' content='width=device-width,initial-scale=1.0'>",
        "<title>ZAO Bot</title><style>",
        "@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');",
        "*{margin:0;padding:0;box-sizing:border-box}",
        "body{font-family:'Cairo',sans-serif;background:#080810;color:#fff;min-height:100vh;display:flex;align-items:center;justify-content:center}",
        ".glow{position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(ellipse at 30% 30%,rgba(180,0,0,.12) 0%,transparent 60%),radial-gradient(ellipse at 70% 70%,rgba(0,80,180,.08) 0%,transparent 60%);pointer-events:none}",
        ".card{position:relative;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:24px;padding:48px 52px;max-width:480px;width:90%;text-align:center;backdrop-filter:blur(24px);box-shadow:0 0 80px rgba(150,0,0,.2),0 24px 48px rgba(0,0,0,.6)}",
        ".logo{font-size:80px;font-weight:900;background:linear-gradient(135deg,#ff2222,#cc0000,#ff6060);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;margin-bottom:6px}",
        ".sub{color:rgba(255,255,255,.35);font-size:11px;letter-spacing:4px;text-transform:uppercase;margin-bottom:32px}",
        ".badge{display:inline-flex;align-items:center;gap:8px;background:rgba(0,200,100,.08);border:1px solid rgba(0,200,100,.25);border-radius:50px;padding:7px 18px;font-size:13px;color:#00e676;margin-bottom:32px}",
        ".dot{width:7px;height:7px;background:#00e676;border-radius:50%;animation:blink 1.2s ease-in-out infinite}",
        "@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}",
        ".grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:28px}",
        ".box{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:14px;padding:18px 12px}",
        ".box.full{grid-column:1/-1}",
        ".lbl{font-size:10px;color:rgba(255,255,255,.3);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px}",
        ".val{font-size:20px;font-weight:700}",
        ".val.red{color:#ff4040;font-size:16px}",
        ".hr{height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent);margin-bottom:22px}",
        ".owner{font-size:11px;color:rgba(255,255,255,.22);letter-spacing:1px}",
        ".owner b{color:rgba(255,60,60,.65)}",
        "</style></head><body>",
        "<div class='glow'></div><div class='card'>",
        "<div class='logo'>ZAO</div>",
        "<div class='sub'>Facebook Messenger Bot</div>",
        "<div class='badge'><div class='dot'></div>Online &amp; Running</div>",
        "<div class='grid'>",
        "<div class='box'><div class='lbl'>البادئة</div><div class='val'>" + prefix + "</div></div>",
        "<div class='box'><div class='lbl'>الإصدار</div><div class='val'>1.2.14</div></div>",
        "<div class='box full'><div class='lbl'>⏱ مدة التشغيل</div><div class='val red'>" + uptimeStr + "</div></div>",
        "</div><div class='hr'></div>",
        "<div class='owner'>طور بواسطة <b>SAIM</b> · جميع الحقوق محفوظة 🩸</div>",
        "</div></body></html>"
      ].join("");
      reply.type("text/html").send(html);
    });

    const listenOptions = {
      port: this.PORT,
      host: '0.0.0.0',
    };

    this.app.listen(listenOptions, (err, address) => {
      if (err) {
        logger.log([
          {
          message: "[ SAIM ]: ",
           color: ["red", "red"],
          },
          {
          message: `Error starting server: ${err}`,
          color: "white",
          },
        ]);
        process.exit(1);
      }
      logger.log([
        {
        message: "[ SAIM ]",
         color: ["red", "cyan"],
        },
        {
        message: `App deployed on port ${this.PORT}`,
        color: "white",
        },
      ]);
    });
  }
  startBot() {
    const options = {
      cwd: __dirname,
      stdio: "inherit",
      shell: true,
    };
    this.child = spawn(
      "node",
      [ "--trace-deprecation", "--trace-warnings", "--async-stack-traces", "ZAO.js"],
      options
    );
    this.child.on("close", (codeExit) => {
      if (codeExit !== 0 && this.countRestart < 10) {
        this.countRestart += 1;
        logger.log([
          {
          message: "[ BOT ]: ",
           color: ["yellow", "cyan"],
          },
          {
          message: `Bot crashed, restart attempt ${this.countRestart}/10. Server still running on port ${this.PORT}`,
          color: "white",
          },
        ]);
        setTimeout(() => this.startBot(), 5000);
      } else if (codeExit !== 0) {
        logger.log([
          {
          message: "[ BOT ]: ",
           color: ["red", "cyan"],
          },
          {
          message: `Bot failed after 10 restarts. HTTP Server still available on port ${this.PORT}`,
          color: "white",
          },
        ]);
      }
    });
    this.child.on("error", (error) => {
      logger.log([
        {
        message: "[ BOT ERROR ]: ",
         color: ["red", "cyan"],
        },
        {
        message: `${JSON.stringify(error)}`,
        color: "white",
        },
      ]);
    });
  }
}

const ZAO  = new Zao();