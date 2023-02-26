import stlyes from './layout.module.css'

export default function Layout({ children }) {
  return <div className={stlyes.container}>{children}</div>
}
