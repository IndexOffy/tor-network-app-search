import classnames from 'classnames'
import styles from './Text.module.css';

export const TextTheme = {
  DEFAULT: 'default',
  LIGHT: 'light',
  DARK: 'dark'
}

const Text = (props) => {
  const { children, theme, size, className, limitText, disabled } = props

  const classProps = classnames(
    styles[theme],
    styles[size],
    {
      [styles.disabled]: disabled,
    },
    className
  )

  return (
    <p
      disabled={disabled} className={classProps}>
      {limitText ? children.substring(0, limitText) + '...' : children}
    </p>
  )
}

Text.defaultProps = {
  theme: TextTheme.DEFAULT,
  className: 'card-text',
  limitText: null,
  disabled: false,
}

export default Text
