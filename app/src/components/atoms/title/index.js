import classnames from 'classnames'
import styles from './Title.module.css';

export const TitleTheme = {
  DEFAULT: 'default',
  LIGHT: 'light',
  DARK: 'dark'
}

const Title = (props) => {
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
      <h5 disabled={disabled} className={classProps}>{children}</h5>
  )
}

Title.defaultProps = {
  theme: TitleTheme.DEFAULT,
  className: 'card-title',
  disabled: false,
}

export default Title
