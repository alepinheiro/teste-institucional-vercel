export default interface TopBarItemsInterface {
  id: string
  title: string
  icon: string | null
  target: string
  link: string
  subMenu: TopBarItemsInterface[] | null
}
