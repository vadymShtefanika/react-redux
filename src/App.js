import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from "react";
import {Api} from "./api";

function App() {
  const dispatch = useDispatch()
  const store = useSelector((state) => state.root)
  console.log(store)

  useEffect(() => {
    dispatch(Api.fetchPosts())
  },[]);

  // const [isLoading, setIsLoading] = useState(false)
  // useEffect(() => {
  //   ;(async () => {
  //     try {
  //       setIsLoading(true)
  //       const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  //       console.log(response.data)
  //     } catch (err) {
  //       console.error(err)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   })()
  // }, [])
  // if (isLoading)
  //   return 'Loading..'
  return <div className='App'>Test 1 fdfdsfdf</div>
}

export default App
