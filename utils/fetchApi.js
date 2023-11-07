import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'




  export const fetchApi = async(url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '54c1a11aabmsh66ccfb798d7e167p15a55cjsn15e70d390eaa',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
        
    })
    return data;
  }

