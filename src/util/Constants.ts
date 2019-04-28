import { ToolkitHandlerOptions } from "../structures/ToolkitHandler";
import { ToolkitModule } from "../structures/ToolkitModule";

export const ArgumentMatches = {
    PHRASE: 'phrase',
    FLAG: 'flag',
    OPTION: 'option',
    REST: 'rest',
    SEPARATE: 'separate',
    TEXT: 'text',
    CONTENT: 'content',
    REST_CONTENT: 'restContent',
    NONE: 'none'
};

export const ArgumentTypes = {
    STRING: 'string',
    LOWERCASE: 'lowercase',
    UPPERCASE: 'uppercase',
    CHAR_CODES: 'charCodes',
    NUMBER: 'number',
    INTEGER: 'integer',
    BIGINT: 'bigint',
    EMOJINT: 'emojint',
    URL: 'url',
    DATE: 'date',
    COLOR: 'color',
    USER: 'user',
    USERS: 'users',
    MEMBER: 'member',
    MEMBERS: 'members',
    RELEVANT: 'relevant',
    RELEVANTS: 'relevants',
    CHANNEL: 'channel',
    CHANNELS: 'channels',
    TEXT_CHANNEL: 'textChannel',
    TEXT_CHANNELS: 'textChannels',
    VOICE_CHANNEL: 'voiceChannel',
    VOICE_CHANNELS: 'voiceChannels',
    ROLE: 'role',
    ROLES: 'roles',
    EMOJI: 'emoji',
    EMOJIS: 'emojis',
    GUILD: 'guild',
    GUILDS: 'guilds',
    MESSAGE: 'message',
    GUILD_MESSAGE: 'guildMessage',
    RELEVANT_MESSAGE: 'relevantMessage',
    INVITE: 'invite',
    MEMBER_MENTION: 'memberMention',
    CHANNEL_MENTION: 'channelMention',
    ROLE_MENTION: 'roleMention',
    EMOJI_MENTION: 'emojiMention',
    COMMAND_ALIAS: 'commandAlias',
    COMMAND: 'command',
    INHIBITOR: 'inhibitor',
    LISTENER: 'listener'
};

export const ToolkitHandlerEvents = {
    LOAD: 'load',
    REMOVE: 'remove'
};

export const CommandHandlerEvents = {
    MESSAGE_BLOCKED: 'messageBlocked',
    MESSAGE_INVALID: 'messageInvalid',
    COMMAND_BLOCKED: 'commandBlocked',
    COMMAND_STARTED: 'commandStarted',
    COMMAND_FINISHED: 'commandFinished',
    COMMAND_CANCELLED: 'commandCancelled',
    COMMAND_LOCKED: 'commandLocked',
    MISSING_PERMISSIONS: 'missingPermissions',
    COOLDOWN: 'cooldown',
    IN_PROMPT: 'inPrompt',
    ERROR: 'error'
};

export const BuiltInReasons = {
    CLIENT: 'client',
    BOT: 'bot',
    OWNER: 'owner',
    GUILD: 'guild',
    DM: 'dm'
};

export type LoadPredicate = (filepath: string) => boolean;

export const ToolkitHandlerDefaults: ToolkitHandlerOptions = {
    classToHandle: ToolkitModule,
    extensions: ['.js', '.json', '.ts'],
    automateCategories: false,
    loadFilter: (() => true)
}