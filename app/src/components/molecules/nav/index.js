import classnames from 'classnames'
import styles from './Nav.module.css';

export const NavTheme = {
  DEFAULT: 'default',
  LIGHT: 'light',
  DARK: 'dark'
}

const Nav = (props) => {
  const { children, theme, className, disabled } = props

  const classProps = classnames(
    styles[theme],
    {
      [styles.disabled]: disabled,
    },
    className
  )

  return (
    <nav className={classProps}>
      {children}
    </nav>
  )
}

Nav.defaultProps = {
  theme: NavTheme.DEFAULT,
  className: 'ms-md-auto',
  disabled: false
}

export default Nav
