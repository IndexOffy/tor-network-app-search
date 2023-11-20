import classnames from 'classnames'
import styles from './Card.module.css';


export const CardTheme = {
  DEFAULT: 'default',
  LIGHT: 'light',
  DARK: 'dark'
}

export const CardSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

const Card = (props) => {
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
    <div className="card" >
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

Card.defaultProps = {
  theme: CardTheme.DEFAULT,
  size: CardSize.MEDIUM,
  className: '',
  disabled: false,
}

export default Card
