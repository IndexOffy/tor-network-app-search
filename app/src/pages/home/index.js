import '../../components/_settings/_base.css'
import Button from '../../components/atoms/button'
import Input from '../../components/atoms/input'


const HomePage = () => {
  return (
    <div className="App container py-3">
      <Button theme='dark' size='small'>Search</Button>
      <Input placeholder='search...' size='small'></Input>
      
      <Button theme='dark' size='medium'>Search</Button>
      <Input placeholder='search...' size='medium'></Input>

      <Button theme='dark' size='large'>Search</Button>
      <Input placeholder='search...' size='large'></Input>
    </div>
  )
}

export default HomePage;
