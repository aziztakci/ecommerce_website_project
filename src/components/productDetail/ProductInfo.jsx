import PageContent from '../../layout/PageContent';
import { ChevronRight } from 'lucide-react';

function ProductInfo({data}) {
    
  return (
    <PageContent className='detailcontainer flex flex-col md:flex-row md:flex-wrap items-center md:items-start justify-center gap-7.5 pt-10 max-w-[1090px] px-5'>

            <img src={data.image} alt="product" className='w-[316px] h-auto' />

            <div className='textcontainer1 flex flex-col max-w-[330px] h-auto'>
                <h3 className='font-bold text-text text-[24px] pb-7.5'>{data.textBlock.title}</h3>
                {data.textBlock.paragraphs.map((e,i)=>(
                    <p key={i} className='font-normal text-second-text text-[14px] w-[310px] pb-5 '>{e}</p>
                ))}
                
            </div>
            
            <div className='textcontainer2 flex flex-col'>                
                <h3 className='font-bold text-text text-[24px] pb-5'>{data.listBlock1.title}</h3>
                {data.listBlock1.items.map((e)=>(
                    <p key={e.id} className='flex font-normal text-second-text text-[14px] py-2'><span><ChevronRight /></span>{e.text}</p>
                ))}
                <h3 className='font-bold text-text text-[24px] py-5'>{data.listBlock2.title}</h3>
                {data.listBlock2.items.map((e)=>(
                    <p  key={e.id} className='flex font-normal text-second-text text-[14px] py-2'><span><ChevronRight/></span>{e.text}</p>
                ))}
            </div>

    </PageContent>
  )
}

export default ProductInfo
