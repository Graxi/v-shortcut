const CTRL = 'ctrl'; // a virtual key to handle control
const META = 'meta';
const CONTROL = 'control';
const MAC = 'MAC';

const ORDERED_KEYS_SEPARATOR = ',';
const UNORDERED_KEYS_SEPARATOR = '+';

const SCOPE_DATA_ATTRIBUTE = 'vshortcutscope';
const GLOBAL_SCOPE = 'GLOBAL_SCOPE';

const KEY_MAPPING: ReadonlyMap<string, string> = new Map([
  ['Escape', 'esc'],
  ['Backquote', 'backquote'],
  ['Digit1', '1'],
  ['Digit2', '2'],
  ['Digit3', '3'],
  ['Digit4', '4'],
  ['Digit5', '5'],
  ['Digit6', '6'],
  ['Digit7', '7'],
  ['Digit8', '8'],
  ['Digit9', '9'],
  ['Digit0', '0'],
  ['Minus', 'minus'],
  ['Equal', 'equal'],
  ['Backspace', 'del'],
  ['Tab', 'tab'],
  ['CapsLock', 'capslock'],
  ['Space', 'space'],
  ['KeyA', 'a'],
  ['KeyB', 'b'],
  ['KeyC', 'c'],
  ['KeyD', 'd'],
  ['KeyE', 'e'],
  ['KeyF', 'f'],
  ['KeyG', 'g'],
  ['KeyH', 'h'],
  ['KeyI', 'i'],
  ['KeyJ', 'j'],
  ['KeyK', 'k'],
  ['KeyL', 'l'],
  ['KeyM', 'm'],
  ['KeyN', 'n'],
  ['KeyO', 'o'],
  ['KeyP', 'p'],
  ['KeyQ', 'q'],
  ['KeyR', 'r'],
  ['KeyS', 's'],
  ['KeyT', 't'],
  ['KeyU', 'u'],
  ['KeyV', 'v'],
  ['KeyW', 'w'],
  ['KeyX', 'x'],
  ['KeyY', 'y'],
  ['KeyZ', 'z'],
  ['BracketLeft', 'bracketleft'],
  ['BracketRight', 'bracketright'],
  ['Backslash', 'backslash'],
  ['Semicolon', 'semicolon'],
  ['Quote', 'quote'],
  ['Enter', 'enter'],
  ['Comma', 'comma'],
  ['Period', 'period'],
  ['Slash', 'slash'],
  ['ArrowLeft', 'arrowleft'],
  ['ArrowUp', 'arrowup'],
  ['ArrowRight', 'arrowright'],
  ['ArrowDown', 'arrowdown'],
  ['ControlLeft', 'control'],
  ['ControlRight', 'control'],
  ['ShiftLeft', 'shift'],
  ['AltLeft', 'alt'],
  ['MetaLeft', 'meta'],
  ['ShiftRight', 'shift'],
  ['MetaRight', 'meta'],
  ['AltRight', 'alt'],
  ['F1', 'f1'],
  ['F2', 'f2'],
  ['F3', 'f3'],
  ['F4', 'f4'],
  ['F5', 'f5'],
  ['F6', 'f6'],
  ['F7', 'f7'],
  ['F8', 'f8'],
  ['F9', 'f9'],
  ['F10', 'f10'],
  ['F11', 'f11'],
  ['F12', 'f12'],
  ['Pause', 'pause'],
  ['Delete', 'del'],
  ['ContextMenu', 'contextmenu'],
]);

export {
  CTRL,
  META,
  CONTROL,
  MAC,
  SCOPE_DATA_ATTRIBUTE,
  GLOBAL_SCOPE,
  ORDERED_KEYS_SEPARATOR,
  UNORDERED_KEYS_SEPARATOR,
  KEY_MAPPING,
};
