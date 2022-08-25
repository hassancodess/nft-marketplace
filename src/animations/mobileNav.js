const mobileContainer = {
  hidden: { x: -50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
}
const mobileFlexContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
}
const mobileLinkVariants = {
  hidden: { x: 0, opacity: 0 },
  show: { x: 0, opacity: 1 },
}

export { mobileContainer, mobileFlexContainer, mobileLinkVariants }
