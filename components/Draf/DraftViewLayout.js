import { useRouter } from 'next/navigation'
import Editor from '../Editor/Editor';
import DatetimeConverter from '@/utils/datetimeConverter';
import { useState } from 'react';
import { useEffect } from 'react';

export default function DraftViewLayout({ draft_detail }) {

    const router = useRouter();
    const [formattedDate, setFormattedDate] = useState('')

    useEffect(() => {
        if (draft_detail) {
            console.log(draft_detail);
            const date_converted = DatetimeConverter({ datetime: draft_detail.created_at });
            setFormattedDate(date_converted);
        }
    }, [draft_detail])

    if (!draft_detail) {
        return (<div></div>);
    }

    // const formattedDate = DatetimeConverter({ datetime: draft_detail.created_at });

    return (
        <div className="flex flex-col items-start self-stretch py-10 px-20 gap-4 bg-blue-50 max-h-screen w-3/4">
            <div className="flex flex-col items-start gap-2 self-stretch">
                <h1 className="font-heading text-2xl font-bold text-black">{draft_detail.title}</h1>
                <div className="flex flex-row items-center self-stretch gap-3 py-2 border-b-2 border-black">
                    <button disabled={true} className="flex items-center py-1 px-2 bg-green-400 rounded-md">
                        Status: {draft_detail.status}</button>
                    <p className="font-body font-bold text-xl text-black">
                        Dibuat pada: {formattedDate}</p>
                </div>
            </div>
            <div className='flex flex-col h-[400px] content-font-body py-6 px-10 items-start self-stretch 
                bg-white border-2 border-blue-400 rounded-md gap-y-2 overflow-y-auto'>
                <p className='text-black font-body text-md'>
                    {draft_detail.content}
                </p>
            </div>
            {/* <Editor
                className="flex flex-col h-[400px] content-font-body py-3 px-10 items-start self-stretch 
                text-black bg-white border-2 border-blue-400 rounded-md gap-y-2 overflow-y-auto"
                contents={draft_detail.content} /> */}
            <div className='flex flex-col py-4 px-10 items-start self-stretch
                            bg-white border-2 border-blue-400 rounded-md'>
                <p className='font-body text-md self-stretch'>Dibuat Oleh:</p>
                <p className='font-body text-md self-stretch'>Disupervisi Oleh:</p>
            </div>
            <div className='flex flex-row self-stretch justify-between'>
                <button
                    onClick={() => router.push(`/draf`)}
                    className="font-body self-stretch py-2 px-4 border-2 text-blue-600 border-blue-600 rounded-lg hover:bg-blue-400 hover:text-white">
                    Kembali
                </button>
                <div className='flex flex-row gap-3'>
                    {/* <button
                        onClick={() => router.push('/draf/create')}
                        className='font-body self-stretch py-2 px-5 text-white bg-blue-600 rounded-lg hover:bg-blue-400'>
                        Buat Ulang Berita
                    </button> */}
                    <button
                        onClick={() => router.push(`/draf/edit/${draft_detail.draft_id}`)}
                        className='font-body self-stretch py-2 px-5 text-white bg-blue-600 rounded-lg hover:bg-blue-400'>
                        Edit Draf Berita
                    </button>
                </div>
            </div>
        </div>
    );
}
