
import Image from 'next/image'
import Link from 'next/link'
import { Flex,Box, Text,Button } from '@chakra-ui/react'
import { baseUrl, fetchApi } from '@/utils/fetchApi'

import Property from '@/components/Property'


const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image src={imageUrl} width={500} height={300} />
    <Box p='5' >
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
      <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>
      <Button fontSize='xl' >
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);


export default function Home({propertiesForSale,propertiesForRent}) {
  //console.log(propertiesForSale,propertiesForRent)

  return (
    <Box>
  
   <Banner
    purpose='RENT A HOME'
    title1='Rental home for'
    title2= 'Everyone'
    desc1='Explore'
    desc2='And More'
    buttonText='Explore Renting'
    linkName='/search?purpose=for-rent'
    imageUrl="https://www.mydomaine.com/thmb/bepet4VMGUG70sCLFNQRdZm9bbg=/2048x0/filters:no_upscale():strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg"
   />
   
    <Flex wrap='wrap'>
      {propertiesForSale.map((property)=>{
        return(
          <Property property={property}
          key={property.id}
            />
        )
      })}
    </Flex>
   
    <Banner
    purpose='BUY A HOME'
    title1='Find,Buy & Own Your'
    title2= 'Dream Home'
    desc1='Explore Apartaments. Villas,Homes'
    desc2='And More'
    buttonText='Explore Buying'
    linkName='/search?purpose=for-sale'
    imageUrl="https://w0.peakpx.com/wallpaper/870/924/HD-wallpaper-stylish-apartment-design-living-room-modern-interior-black-walls-in-the-living-room-modern-stylish-fireplace-loft-style.jpg"
    />
      <Flex wrap='wrap'>

      {propertiesForRent.map((property)=>{
        return(
          <Property property={property}
          key={property.id}
            />
        )
      })}

      </Flex>
         

    </Box>
  )
}


export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  
  

  return{
    props:{
      propertiesForSale:propertyForSale?.hits,
      propertiesForRent:propertyForRent?.hits,

    
    }
  }
}