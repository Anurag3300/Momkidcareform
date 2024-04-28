import logo from './logo.svg';
import Form from './component/Form';
import ContactInformation from './component/ContactInformation';
import { data } from './data';

function App() {
  return (
    <div className='flex flex-col justify-center items-center w-[100vw] h-[100vh] '>
      <div>
        <h1 className='text-black font-bold text-2xl uppercase'>Contact us or</h1>
        <h1 className='text-black font-bold text-2xl uppercase'>Raise a complaint</h1>
      </div>
      <div className='flex gap-10 w-[700px] h-[500px] mt-5 shadow-xl'>
        <ContactInformation/>
        <Form data={data}/>
      </div>
    </div>
  );
}

export default App;
