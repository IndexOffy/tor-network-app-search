import classnames from 'classnames'
import styles from './Input.module.css';

export const InputType = {
  TEXT: 'text'
}

export const InputTheme = {
  DEFAULT: 'default',
  LIGHT: 'light',
  DARK: 'dark'
}

export const InputSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

const Input = (props) => {
  const { type, children, theme, size, className, placeholder, disabled } = props

  const classProps = classnames(
    styles[theme],
    styles[size],
    {
      [styles.disabled]: disabled,
    },
    className
  )

  return (
    <input type={type} disabled={disabled} className={classProps} placeholder={placeholder}>
      {children}
    </input>
  )
}

Input.defaultProps = {
  type: InputType.TEXT,
  theme: InputTheme.DEFAULT,
  size: InputSize.MEDIUM,
  className: 'form-control',
  placeholder: '',
  disabled: false,
}

export default Input
