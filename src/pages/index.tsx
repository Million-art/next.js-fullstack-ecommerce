 import Banner from './component/Banner'
import Products from "../pages/component/Products"
 
export default function Home() {
  return (
    <main>
      <div className='mx-w-screen-xl max-auto '>
        <Banner/>
        <Products />
       </div>
       
     </main>
  )
}
