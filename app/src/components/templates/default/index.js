import Button from '../../../components/atoms/button';
import Nav from '../../../components/molecules/nav';
import Header from '../../../components/organisms/header';

const Default = (props) => {
  const { children, className } = props

  return (
    <div className={className}>
      <main>
        <Header>
          <Nav>
            <Button theme='menu-dark'>[Home]</Button>
            <Button theme='menu-dark'>[About]</Button>
            <Button theme='menu-dark'>[Github]</Button>
          </Nav>
        </Header>
        {children}
      </main>
    </div>
  )
}

Default.defaultProps = {
  className: 'container',
}

export default Default
