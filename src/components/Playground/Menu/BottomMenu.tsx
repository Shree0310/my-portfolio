import { IconPlus } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';
import { IconBell } from '@tabler/icons-react';
import { IconUserPlus } from '@tabler/icons-react';
import { IconSun } from '@tabler/icons-react';
import { useState } from 'react';
import { IconLink } from '@tabler/icons-react';
import { IconMicrophone } from '@tabler/icons-react';
import { IconCamera } from '@tabler/icons-react';
import { Input } from '@/components/ui/input';
import { IconSortAscending } from '@tabler/icons-react';
import { IconAdjustmentsHorizontal } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import { IconArrowBigUpLines } from '@tabler/icons-react';
import { IconHelpCircle } from '@tabler/icons-react';
import { IconArrowBigUpLine } from '@tabler/icons-react';
import { IconCommand } from '@tabler/icons-react';
import { IconInfoCircle } from '@tabler/icons-react';
import { IconMoon } from '@tabler/icons-react';
import { IconDeviceDesktop } from '@tabler/icons-react';
import { easeInOut, motion } from 'framer-motion';

const BottomMenu = () => {
    const [activePopup, setActivePopup] = useState<string | null>(null);

    const togglePopup = (popupName: string ) => {
        setActivePopup(prev => prev === popupName ? null : popupName)
    };

return <div className="flex flex-col justify-center items-center mb-24">
            <div className="flex h-56">
               { activePopup === 'plus' && <PlusPopup/> }
               {activePopup === 'search' && <SearchPopup/>}
               {activePopup === 'bell' && <BellPopup/>}
               { activePopup === 'user' && <UserPopup/>}
               { activePopup === 'sun' && <SunPopup/>}
            </div>
                
        <div className="flex ">
            <div className="relative w-60 h-14 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 flex flex-row gap-1 justify-center items-center cursor-pointer">
                <div className='p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:rounded-lg'><IconPlus stroke={1} height={24} width={24} onClick={() => togglePopup('plus')}/></div>
                <div className='p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:rounded-lg'><IconSearch stroke={1} height={24} width={24} onClick={() => togglePopup('search')}/></div>
                <div className='p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:rounded-lg'><IconBell stroke={1} height={24} width={24} onClick={() => togglePopup('bell')}/></div>
                <div className='p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:rounded-lg'><IconUserPlus stroke={1} height={24} width={24} onClick={() => togglePopup('user') } /></div>
                <div className='p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:rounded-lg'><IconSun stroke={1} height={24} width={24} onClick={() => togglePopup('sun')}/></div>
            </div>
        </div>
</div>
}

export default BottomMenu;

export const PlusPopup = () => {
    return  <motion.div 
                initial={{
                    y:100,
                    x:10,
                    scale:0.3
                }}
                animate={{
                    y:1,
                    x:1,
                    scale:1
                }}
                transition={{
                    ease:'easeOut',
                    duration:0.3,
                }}
                className='w-44 h-44 mt-8  rounded-2xl border border-neutral-200 flex flex-col p-2 justify-center gap-4 text-neutral-600 dark:text-neutral-400 hover:dark:text-neutral-200'>
                    <div className="flex gap-2 hover:bg-neutral-200/40 hover:rounded-lg p-2 cursor-pointer">
                        <IconLink stroke={1} />
                        <p>Add files</p>
                    </div>
                    <div className="flex gap-2 p-2 hover:bg-neutral-200/40 hover:rounded-lg cursor-pointer">
                        <IconMicrophone stroke={1}/>
                        <p>Voice</p>
                    </div>
                    <div className="flex gap-2 p-2 hover:bg-neutral-200/40 hover:rounded-lg cursor-pointer">
                        <IconCamera stroke={1} />
                        <p>Add Images</p>
                    </div>        
                </motion.div>
}

export const SearchPopup = () => {
    return  <motion.div
                initial={{
                    y:100,
                    x:10,
                    scale:0.3
                }}
                animate = {{
                    y:1,
                    x:1,
                    scale:1
                }}
                transition={{
                    ease:'easeInOut',
                    duration:0.3
                }}
                className='w-60 h-36  mt-16 rounded-2xl border border-neutral-200 flex flex-col justify-center items-center gap-2'>
                <div className="flex flex-col gap-2 justify-center items-center text-neutral-500">
                    <Input className=' h-10 border border-neutral-300 shadow-md focus:border-0 rounded-xl'/>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-row gap-2 border border-neutral-300/50 rounded-xl px-3 py-2 shadow-sm cursor-pointer bg-neutral-200/60 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:dark:text-neutral-200">
                            <IconSortAscending stroke={1} />
                            <p>Sort</p>
                        </div>
                        <div className="flex flex-row gap-2 border border-neutral-300/50 rounded-xl px-3 py-2 shadow-sm cursor-pointer bg-neutral-200/60 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:dark:text-neutral-200">
                            <IconAdjustmentsHorizontal stroke={1} />
                            <p>Filter</p>
                        </div>
                    </div>
                </div>         
            </motion.div>
}

export const BellPopup = () => {
    return <motion.div 
                initial={{
                    x:10,
                    y:100,
                    scale:0.3
                }}
                animate={{
                    x:1,
                    y:1,
                    scale:1
                }}
                transition={{
                    ease:'easeInOut',
                    duration:0.3
                }}
                className='w-56 h-36 mt-16 rounded-2xl border border-neutral-200 flex flex-col gap-1 justify-start p-6 '>
                        <h1 className='font-bold text-neutral-400 text-lg'>Notifications</h1>
                        <p className='text-sm text-neutral-400'>0 unread</p>
            </motion.div>
}

export const UserPopup = () => {
    return  <motion.div
                initial={{
                    x:10,
                    y:100,
                    scale:0.3
                }}
                animate={{
                    x:1,
                    y:1,
                    scale:1
                }}
                transition={{
                    ease:'easeInOut',
                    duration:0.3
                }}
                className='w-60 h-48 mt-4 rounded-2xl border border-neutral-200 flex flex-col p-2 justify-center gap-1 text-neutral-600 dark:text-neutral-400 hover:dark:text-neutral-200 cursor-pointer'>
                    <div className=" hover:bg-neutral-200/40 hover:rounded-lg p-2">
                        
                        <div className="flex justify-between gap-20">
                            <div className="flex gap-2">
                                <IconSettings stroke={1} className='' />
                                <p >Settings</p>
                            </div>
                            <div className="flex p-1">
                                <IconArrowBigUpLine stroke={1} className='h-4 w-4' />
                                <IconCommand stroke={1} className='h-4 w-4'/>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 p-2 hover:bg-neutral-200/40 hover:rounded-lg">
                        <IconArrowBigUpLines stroke={1}/>
                        <p>Upgrade plan</p>
                    </div>
                    <div className="flex gap-2 p-2 hover:bg-neutral-200/40 hover:rounded-lg">
                        <IconHelpCircle stroke={1} />
                        <p>Get help</p>
                    </div>
                    <div className="flex gap-2 p-2 hover:bg-neutral-200/40 hover:rounded-lg">
                        <IconInfoCircle stroke={1} />
                        <div className="flex justify-between gap-12">
                            <p>Learn more</p>
                            {/* <IconArrowBadgeRight stroke={1} /> */}
                        </div>
                    </div>           
                </motion.div>
}

export const SunPopup = () => {
    return <motion.div 
                initial={{
                    x:10,
                    y:100,
                    scale:0.3
                }}
                animate={{
                    x:1,
                    y:1,
                    scale:1
                }}
                transition={{
                    ease:'easeInOut',
                    duration:0.3
                }}
                className='w-80 h-16 mt-36  rounded-2xl border border-neutral-200 flex flex-row justify-center items-center gap-1 text-neutral-600 dark:text-neutral-400  hover:dark:text-neutral-200 cursor-pointer'>
                    <div className="flex justify-center gap-2 px-3 hover:bg-neutral-200/40 hover:rounded-2xl py-2">
                        <IconSun stroke={1} className='h-5 w-5 m-0.5 text-neutral-800 dark:text-neutral-400'/>
                        <p className='text-neutral-800 dark:text-neutral-400'>Light</p>
                    </div>
                    <div className="flex justify-center gap-2 py-2 px-3 hover:bg-neutral-200/40 hover:rounded-2xl">
                        <IconMoon stroke={1} className='h-5 w-5 m-0.5 text-neutral-800 dark:text-neutral-400'/>
                        <p className='text-neutral-800 dark:text-neutral-400'>Dark</p>
                    </div>
                    <div className="flex justify-center gap-2 py-2 px-3 hover:bg-neutral-200/40 hover:rounded-2xl">
                        <IconDeviceDesktop stroke={1} className='h-5 w-5 m-0.5 text-neutral-800 dark:text-neutral-400'/>
                        <p className='text-neutral-800 dark:text-neutral-400'>System</p>
                    </div>        
            </motion.div>
}