import { IconBellFilled } from '@tabler/icons-react';
import { IconMailFilled } from '@tabler/icons-react';
import { IconCalendarWeek } from '@tabler/icons-react';

const DisconnectedTabs = () => {
    return <div className="flex flex-row gap-4 w-60 h-14 mt-24">
        <div className="w-16 h-16 flex justify-center items-center rounded-full bg-neutral-100 dark:bg-neutral-700 shadow-md">
            <IconBellFilled  stroke={2} className='text-green-700' />
        </div>
        <div className="w-16 h-16 flex justify-center items-center rounded-full bg-neutral-100 dark:bg-neutral-700 shadow-md">
            <IconMailFilled stroke={2} className='text-blue-600'/>
        </div>
        <div className="w-16 h-16 flex justify-center items-center rounded-full bg-neutral-100 dark:bg-neutral-700 shadow-md">
            <IconCalendarWeek stroke={2} className='text-red-600'/>
        </div>
    </div>
}
export default DisconnectedTabs;