actions
  setChimeCount(count)
    SET_CHIME_COUNT = 'build_a_chime/Home/SET_CHIME_COUNT';

  setChimeStyle(position, style)
    SET_CHIME_STYLE = 'build_a_chime/Home/SET_CHIME_STYLE';

  swapChimes(position1, positon2)
    SET_CHIME_STYLE = 'build_a_chime/Home/SWAP_CHIMES';
    dispatch two setChimeStyle actions?

  reset()
    RESET = 'build_a_chime/Home/RESET';
    dispatch 1 setChimeCount action and X setChimeStyle actions?

  finalizePreview()
    FINALIZE_PREVIEW = 'build_a_chime/Home/FINALIZE_PREVIEW';

store structure
  home Object
    chimeCount Integer -- 7
    chimes Array -- []
      style Enum(BLANK, WHITE, BROWN, GRAY) -- BLANK

component structure
  home
    - reset()
    - finalizePreview()

    chimeSizePicker(size)
      - setChimeCount

    chimePreview
      - setChimeStyle
      wallPeg
      forEach(chimes) => chime(style, showTopTwine, showBottomTwine, onChimeDrop)

    chimeStyleList
      chime(style, showTopTwine, showBottomTwine, onChimeDrop)
        perhaps styled to do different sizing?
