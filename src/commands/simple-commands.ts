import {ICommand} from './interfaces'
import {BotPort} from '../ports'

export class SimpleCommands {
    public commands: ICommand[] = [
        {
            initCommand: () => this.replyAnimation('bazaj', 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOThnczZ6enp1YWU0NzBieWIxYWg1czN6ZXo5ZTBwdG1xcDRqMnh4bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lmeh2XGMCbCdW/giphy.gif', '@Chayula  зачилься сись'),
            name: 'bazaj',
            description: 'Выдать базу по жк',
            type: 'private',
        },
        {
            initCommand: () => this.replyText('baza', 'Пах чмо'),
            name: 'baza',
            description: 'Выдать базу по паху',
            type: 'private',
        },
        {
            initCommand: () => this.replyAnimation('bazat', 'https://tenor.com/ru/view/speech-bubble-gif-27609617', 'Бойчики ❤️'),
            name: 'bazat',
            description: 'выдать базу по ткачепчу',
            type: 'private',
        },
        {
            initCommand: () => this.replyText('check', 'Вечная Слава A.G.'),
            name: 'check',
            description: 'Рассовая проверка',
            type: 'private',
        },
        {
            initCommand: () => this.replyAnimation('bazac', 'https://media.tenor.com/2Afe8dsKRX0AAAAC/cats-cat.gif', '@DrittesRe1ch котомамаша разбушевалась!'),
            name: 'bazac',
            description: 'База по чепе',
            type: 'private',
        },
    ]

    constructor(private readonly bot: BotPort) {}
    private replyText(commandName: string, text: string): void {
        this.bot.command(commandName, async (ctx) => await ctx.reply(text))
    }

    private replyAnimation(commandName: string, link: string, caption?: string) {
        this.bot.command(commandName, async (ctx) => await ctx.replyWithAnimation(link, {caption}))
    }
}
