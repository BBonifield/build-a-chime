/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';

export const CHIME_STYLE_BLANK = 'blank';
export const CHIME_STYLE_TAN = 'tan';
export const CHIME_STYLE_CREAM = 'cream';
export const CHIME_STYLE_BROWN = 'brown';

export const DEFAULT_CHIME_COUNT = 7;
export const DEFAULT_CHIME_STYLE = CHIME_STYLE_BLANK;
