const colour = { r: 255, g: 255, b: 255 };
const serverName = 'My Server';

mp.events.add('playerReady', () => {
  mp.game.invoke('0xF314CF4F0211894E', 116, colour.r, colour.g, colour.b, 255); // Replace Michael colour
  mp.game.invoke('0xF314CF4F0211894E', 116, colour.r, colour.g, colour.b, 255); // Replace freemode colour
  mp.game.gxt.set('PM_PAUSE_HDR', serverName); // Replace map title
});
