#!name=wnCalendar&今日天气
#!desc=每日黄历脚本&复制内容到本地模块 在cityId=后面填写所在城市对应的代码 如cityId=101190201 如不填写 默认无锡天气
#!homepage=https://yfamily.vercel.app

[Panel]
天气=script-name=天气

[Script]
今日黄历播报 = type=cron,timeout=30,cronexp=0 8 * * *,wake-system=1,script-path=https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaScript/Surge/wnCalendar.js
天气=type=generic,script-path=https://raw.githubusercontent.com/bm131488bm/Surge/main/surge/other/weather.js,argument=icon=sun.max.fill&color=#ffc400&cityId=101190201

