import Button from '../components/Micro/Button';

const Home = () => {
  return (
    <div className='flex flex-col h-full justify-center items-center'>
      <h1 className='text-center text-4xl m-5 lg:text-7xl'>
        Lending Made Easy
      </h1>
      <h1 className='text-center text-2xl lg:text-4xl'>
        India's best p2p lending platform
      </h1>
      <h1 className='w-[75%] text-center text-l m-10 lg:text-xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore
        totam voluptates quod. Rerum iure eaque asperiores veniam tempora vero
        provident ipsam accusamus adipisci! Doloribus.
      </h1>
      <Button text={'Login'} size={'large'} type={'primary'} />
    </div>
  );
};

export default Home;
