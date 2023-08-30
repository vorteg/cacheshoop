import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <div className='flex flex-col items-center'>
                <Skeleton className='w-[30rem] h-[2rem] bg-gray-300 dark:bg-blue-900 rounded-md'/>
            </div>
            <div className="flex flex-col gap-2">
                <Skeleton className='w-[35rem] h-[25rem] bg-gray-300 dark:bg-blue-900 rounded-md'/>
            </div>
        </section>
    )
}

export default Loading