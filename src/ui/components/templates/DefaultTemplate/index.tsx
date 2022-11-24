import { Outlet } from 'react-router-dom'
import styles from './styles.module.css'

const DefaultTemplate = () => {
  return (
    <div className={styles.grid}>
      <header
        className="w-16 h-16 rounded text-white bg-black py-1 px-2 m-1 text-sm md:w-32 md:h-32 md:rounded-md md:text-base lg:w-48 lg:h-48 lg:rounded-lg lg:text-lg"
        role="banner"
      >
        Template Default
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultTemplate
