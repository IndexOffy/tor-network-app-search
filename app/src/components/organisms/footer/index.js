const Footer = (props) => {
  const { children, className } = props

  return (
    <header>
      <div className={className}>
        {children}
      </div>
    </header>
  )
}

Footer.defaultProps = {
  className: '',
}

export default Footer
