scene('game', () => {
  loadCrew('sprite', 'bean')

  const crew = add([
    text(''),
    // We pass true so it focus by default. You can also do crew.hasFocus = true;
    textInput(true, 20), // <- 20 chars at max
    pos(width() / 2, height() / 2),
    anchor('center'),
  ])

  const response = add([
    text('', {
      align: 'center',
      width: width(),
    }),
    anchor('bot'),
    pos(width() / 2, height() - 50),
  ])
})
