/*
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
'use strict';

const RESPONSES = require('./data/responses');
const logger = require('./config/logger');

const Bot = require('telebot');
let token = process.env.TELEGRAM_BOT_TOKEN;
const colendiBot = new Bot(token);

logger.log('info', 'Colendi Telegram Bot is started!');

colendiBot.on(/\/*/, (msg) => {
    logger.log('silly', msg.text);
    let cmd = msg.text.toLowerCase().substring(1);
    if (RESPONSES[cmd]) {
        return colendiBot.sendMessage(msg.from.id, RESPONSES[cmd]);
    }
});

colendiBot.start();
