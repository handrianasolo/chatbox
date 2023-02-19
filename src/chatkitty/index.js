import ChatKitty from 'chatkitty';

export const kitty = ChatKitty.getInstance(
  '97d03d92-d664-4d89-ac2a-81c8c139a48c'
);

export function getChannelDisplayName(channel) {
  if (channel.type === 'DIRECT') {
    return channel.members.map((member) => member.displayName).join(', ');
  } else {
    return channel.name;
  }
}
