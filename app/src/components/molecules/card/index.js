import classnames from 'classnames'
import styles from './Card.module.css';

export const CardTheme = {
  DEFAULT: 'default',
  LIGHT: 'light',
  DARK: 'dark'
}

const Card = (props) => {
  const { children, theme, className, disabled } = props

  const classProps = classnames(
    styles[theme],
    {
      [styles.disabled]: disabled,
    },
    className
  )

  return (
    <div className={classProps} >
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

Card.defaultProps = {
  theme: CardTheme.DEFAULT,
  className: 'card',
  disabled: false,
}

export default Card
