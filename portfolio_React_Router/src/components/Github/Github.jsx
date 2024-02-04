import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    return (
      <>
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers * 100}
      
      </div>
      <img src={data.avatar_url} alt="Git picture" width={300} />
      </>
    )
  }
  
  export default Github
  
  export async function githubInfoLoader (){
      const response = await fetch('https://api.github.com/users/goyalvansh4')
      return response.json()
  }