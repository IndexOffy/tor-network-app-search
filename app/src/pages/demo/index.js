import '../../components/_settings/_base.css'
import Button from '../../components/atoms/button'
import Input from '../../components/atoms/input'
import Card from '../../components/molecules/card'
import Title from '../../components/atoms/title'
import Subtitle from '../../components/atoms/subtitle'
import Text from '../../components/atoms/text'
import Url from '../../components/atoms/url'
import { useState } from 'react';

const DemoPage = () => {
  const [searchText, setFirstName] = useState('');

  return (
    <div className="App container py-3">
      <Button theme='dark' size='small'>Search</Button>
      <Button theme='dark' size='medium'>Search</Button>
      <Button theme='dark' size='large'>Search</Button>

      <Button theme='menu-dark' size='small'>[Home]</Button>
      <Button theme='menu-dark' size='medium'>[Home]</Button>
      <Button theme='menu-dark' size='large'>[Home]</Button>

      <Input theme='dark' placeholder='search...' size='small'></Input>
      <Input theme='dark' placeholder='search...' size='medium'></Input>
      <Input theme='dark' placeholder='search...' size='large'></Input>

      <br />

      <Card>
        <Url urlPage='#url'>
          <Title>Card title</Title>
        </Url>

        <Subtitle>Card subtitle</Subtitle>
        <hr />
        <Text limitText={85}>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Text>
      </Card>

      <br />

      <Input placeholder='useState...' onChange={e => setFirstName(e.target.value)}></Input>
      <Text>{searchText}</Text>

      <br />

    </div>
  )
}

export default DemoPage;
