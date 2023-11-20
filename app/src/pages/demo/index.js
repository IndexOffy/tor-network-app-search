import '../../components/_settings/_base.css'
import Button from '../../components/atoms/button'
import Input from '../../components/atoms/input'


const DemoPage = () => {
  return (
    <div className="App container py-3">
      <Button theme='dark' size='small'>Search</Button>
      <Input theme='dark' placeholder='search...' size='small'></Input>
      
      <Button theme='dark' size='medium'>Search</Button>
      <Input theme='dark' placeholder='search...' size='medium'></Input>

      <Button theme='dark' size='large'>Search</Button>
      <Input theme='dark' placeholder='search...' size='large'></Input>

      <Button theme='menu-dark' size='small'>[Home]</Button>
      <Button theme='menu-dark' size='medium'>[Home]</Button>
      <Button theme='menu-dark' size='large'>[Home]</Button>
    </div>
  )
}

export default DemoPage;
