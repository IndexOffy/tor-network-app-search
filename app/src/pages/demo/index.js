import '../../components/_settings/_base.css'
import Button from '../../components/atoms/button'
import Input from '../../components/atoms/input'
import Card from '../../components/molecules/card'
import Title from '../../components/atoms/title'
import Subtitle from '../../components/atoms/subtitle'
import Text from '../../components/atoms/text'

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

      <Card>
        <Title>Card title</Title>
        <Subtitle>Card subtitle</Subtitle>
        <Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Text>
      </Card>
    </div>
  )
}

export default DemoPage;
