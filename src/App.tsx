import { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import FooterSection from './FooterSection';
const { Header, Content, Footer } = Layout;

const items = [
  {
    key: 1,
    label: 'Home',
  },
  {
    key: 2,
    label: 'About',
  },
  {
    key: 3,
    label: 'Projects',
  },
  {
    key: 4,
    label: 'Contact',
  },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout className="">
      <Header className="p-0 shadow-lg" style={{ display: 'flex', alignItems: 'center' }}>
        <Navbar />
      </Header>
      <Content className="m-auto max-w-[107rem] px-[4rem] ">
        <Home />
        <About />
      </Content>
      <Footer className="w-full bg-zinc-800 py-10 px-16">
        <FooterSection />
      </Footer>
    </Layout>
  );
}

export default App;
