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

const BottomMenu = () => {
    const [plusClicked, setPlusClicked] = useState(false);
    const [searchClicked, setSearchClicked] = useState(false);
    const [bellClicked, setBellClicked] = useState(false);
    const [userClicked, setUserClicked] = useState(false);
    const [sunClicked, setSunClicked] = useState(false);

return <div className="flex flex-col justify-center items-center">
            <div className="flex ">
                { plusClicked && 
                <div className='w-44 h-44 bg-white rounded-2xl border border-neutral-200 flex flex-col p-2 justify-center gap-4 text-neutral-600'>
                    <div className="flex gap-2 hover:bg-neutral-200/40 hover:rounded-lg p-2">
                        <IconLink stroke={1} />
                        <p>Add files</p>
                    </div>
                    <div className="flex gap-2 p-2 hover:bg-neutral-200/40 hover:rounded-lg">
                        <IconMicrophone stroke={1}/>
                        <p>Voice</p>
                    </div>
                    <div className="flex gap-2 p-2 hover:bg-neutral-200/40 hover:rounded-lg">
                        <IconCamera stroke={1} />
                        <p>Add Images</p>
                    </div>
                    
                </div>}
                { searchClicked && 
                <div className='w-60 h-36 bg-white rounded-2xl border border-neutral-200 flex flex-col justify-center items-center gap-2'>
                    <div className="flex flex-col gap-2 justify-center items-center text-neutral-500">
                        <Input className=' h-10 border border-neutral-300 shadow-md focus:border-0 rounded-xl'/>
                        <div className="flex flex-row gap-2">
                            <div className="flex flex-row gap-2 border border-neutral-300/50 rounded-xl px-3 py-2 shadow-sm bg-neutral-200/60">
                                <IconSortAscending stroke={1} />
                                <p>Sort</p>
                            </div>
                            <div className="flex flex-row gap-2 border border-neutral-300/50 rounded-xl px-3 py-2 shadow-sm bg-neutral-200/60">
                                <IconAdjustmentsHorizontal stroke={1} />
                                <p>Filter</p>
                            </div>
                        </div>
                    </div>         
                </div>}
                { bellClicked && 
                <div className='w-44 h-44 bg-white rounded-2xl border border-neutral-200 flex flex-col gap-4'>
                    <div className="flex">
                        
                    </div>     
                </div>}
                { userClicked && 
                <div className='w-44 h-44 bg-white rounded-2xl border border-neutral-200 flex flex-col gap-4'>
                    
                </div>}
                { sunClicked && 
                <div className='w-44 h-44 bg-white rounded-2xl border border-neutral-200 flex flex-col gap-4'>
                    
                </div>}
            </div>
                
        <div className="flex ">
            <div className="relative w-60 h-14 bg-white rounded-2xl border border-neutral-200 flex flex-row gap-3 justify-center items-center cursor-pointer">
                <IconPlus stroke={1} height={36} width={24} className='text-neutral-600 hover:bg-neutral-200 hover:rounded-lg' onClick={() => setPlusClicked(!plusClicked)} />
                <IconSearch stroke={1} height={24} width={24} className='text-neutral-600 hover:bg-neutral-200 hover:rounded-lg' onClick={() => setSearchClicked(!searchClicked)}/>
                <IconBell stroke={1} height={24} width={24} className='text-neutral-600 hover:bg-neutral-200 hover:rounded-lg' onClick={() => setBellClicked(!bellClicked)} />
                <IconUserPlus stroke={1} height={24} width={24} className='text-neutral-600 hover:bg-neutral-200 hover:rounded-lg' onClick={() => setUserClicked(!userClicked) } />
                <IconSun stroke={1} height={24} width={24} className='text-neutral-600 hover:bg-neutral-200 hover:rounded-lg' onClick={() => setSunClicked(!sunClicked)} />
            </div>
        </div>
</div>
}

export default BottomMenu;