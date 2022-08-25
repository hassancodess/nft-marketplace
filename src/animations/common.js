const parentVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.3 },
  },
}
const childVariants = {
  hidden: {
    x: -300,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
}

export { parentVariants, childVariants }
