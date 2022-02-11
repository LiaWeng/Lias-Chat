const colors = [
  '#d50000',
  '#c41061',
  '#aa00ff',
  '#6200ea',
  '#2962ff',
  '#0091ea',
  '#00b8d4',
  '#00bfa5',
  '#64dd17',
  '#aeea00',
  '#ffd600',
  '#ffab00',
  '#ff6d00',
  '#dd2c00',
]

const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}

export default randomColor
