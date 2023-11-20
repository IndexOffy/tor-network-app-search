import classnames from 'classnames'
import styles from './Text.module.css';

export const TextTheme = {
  DEFAULT: 'default',
  LIGHT: 'light',
  DARK: 'dark'
}

const Text = (props) => {
  const { children, theme, size, className, disabled } = props

  const classProps = classnames(
    styles[theme],
    styles[size],
    {
      [styles.disabled]: disabled,
    },
    className
  )

  return (
      <p disabled={disabled} className={classProps}>{children}</p>
  )
}

Text.defaultProps = {
  theme: TextTheme.DEFAULT,
  className: 'card-text',
  disabled: false,
}

export default Text
