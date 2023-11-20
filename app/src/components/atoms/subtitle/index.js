import classnames from 'classnames'
import styles from './Subtitle.module.css';

export const SubtitleTheme = {
  DEFAULT: 'default',
  LIGHT: 'light',
  DARK: 'dark'
}

const Subtitle = (props) => {
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
      <h6 disabled={disabled} className={classProps}>{children}</h6>
  )
}

Subtitle.defaultProps = {
  theme: SubtitleTheme.DEFAULT,
  className: 'card-subtitle mb-2 text-muted',
  disabled: false,
}

export default Subtitle
