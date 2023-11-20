import classnames from 'classnames'
import styles from './Url.module.css';

export const UrlTheme = {
  DEFAULT: 'default',
  LIGHT: 'light',
  DARK: 'dark'
}

const Url = (props) => {
  const { children, theme, className, urlPage, disabled } = props

  const classProps = classnames(
    styles[theme],
    {
      [styles.disabled]: disabled,
    },
    className
  )

  return (
    <a href={urlPage} disabled={disabled} className={classProps}>
      {children}
    </a>
  )
}

Url.defaultProps = {
  theme: UrlTheme.DEFAULT,
  className: '',
  urlPage: '#',
  disabled: false,
}

export default Url
