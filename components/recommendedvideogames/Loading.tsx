import { Skeleton } from '@/components/ui/skeleton';

const Loading =() => {
    return(
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
                <Skeleton className='md:w-[30rem] h-[2rem] w-[15rem] bg-gray-300 dark:bg-blue-900 rounded-md'/>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4 justify-items-center'>
                    <Skeleton className='w-[15rem] h-[10rem] lg:w-[18rem] bg-gray-300 dark:bg-blue-900 rounded-md'/>
                    <Skeleton className='w-[15rem] h-[10rem] lg:w-[18rem] bg-gray-300 dark:bg-blue-900 rounded-md'/>
                    <Skeleton className='w-[15rem] h-[10rem] lg:w-[18rem] bg-gray-300 dark:bg-blue-900 rounded-md'/>
                    <Skeleton className='w-[15rem] h-[10rem] lg:w-[18rem] bg-gray-300 dark:bg-blue-900 rounded-md'/>   
                </div>
            </section>
    )
}

export default Loading