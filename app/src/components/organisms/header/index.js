const Header = (props) => {
  const { children, className } = props

  return (
    <header>
      <div className={className}>
        {children}
      </div>
    </header>
  )
}

Header.defaultProps = {
  className: 'd-flex flex-md-row',
}

export default Header
