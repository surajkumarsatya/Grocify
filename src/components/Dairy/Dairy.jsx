import CategoryPage from "../CategoryPage/CategoryPage"
import BgDairy from '../../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
      <CategoryPage title='Dairy & Eggss' bgImage={BgDairy} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy