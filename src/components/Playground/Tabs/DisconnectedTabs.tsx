import { IconBellFilled } from '@tabler/icons-react';
import { IconMailFilled } from '@tabler/icons-react';
import { IconCalendarWeek } from '@tabler/icons-react';
import { useState } from 'react';

const DisconnectedTabs = () => {
    const [isExpandedTab, setIsExpandedTab] = useState<string | null>(null);

    return <div className="flex flex-row justify-center items-center gap-4 w-100 h-14 mt-24">
        <div 
            className=
                {`w-16 h-16 flex justify-center items-center rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-800 shadow-md
                  ${isExpandedTab === 'Alerts' ? "w-36 px-8" : "w-16"}`
                }
            onClick={() => setIsExpandedTab(isExpandedTab === 'Alerts' ? null : 'Alerts')}>
            
            { isExpandedTab === 'Alerts'? 
                <div className="flex gap-1">
                    <IconBellFilled  stroke={2} className='text-green-700' />
                    <p className='text-lg font-semibold text-green-700'>Alerts</p>
                </div> : <IconBellFilled  stroke={2} className='text-green-700' />
                }
        </div>
        <div className={`w-16 h-16 flex justify-center items-center rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-800 shadow-md
                  ${isExpandedTab === 'Messages' ? "w-36 px-8" : "w-16"}`
                }
                onClick={() => setIsExpandedTab(isExpandedTab === 'Messages' ? null : 'Messages')}>
            { isExpandedTab === 'Messages'? 
                <div className="flex gap-1">
            <IconMailFilled stroke={2} className='text-blue-600'/>
            <p className='text-lg font-semibold text-blue-600'>Messages</p>
            </div> : <IconMailFilled  stroke={2} className='text-blue-600' />
            }           
        </div>
        <div className={`w-16 h-16 flex justify-center items-center rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-800 shadow-md
                  ${isExpandedTab === 'Events' ? "w-36 px-8" : "w-16"}`
                }
                onClick={() => setIsExpandedTab(isExpandedTab === 'Events' ? null : 'Events')}>
            { isExpandedTab === 'Events' ? 
                <div className="flex gap-1">
                <IconCalendarWeek stroke={2} className='text-red-600'/>
                <p className='text-lg font-semibold text-red-600'>Events</p>
            </div> : <IconCalendarWeek  stroke={2} className='text-red-600' />
            }  
        </div>
    </div>
}
export default DisconnectedTabs;