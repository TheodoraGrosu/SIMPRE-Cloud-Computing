// js/components/MainPage.jsx
import Link from "next/link";
import { useEffect, useState } from "react";
import {HiPencilAlt} from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";


export default function MainPage() {
	const [records, setRecords] = useState([]);
 


	useEffect(() => {
		try {
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));

		}

		catch (error) {
			console.log(error);
		}
	}, []);

	const deleteRecord = (id) => {
		try {
			fetch(`/api/records?id=${id}`, {
				method: 'DELETE',
			})
			.then(response => response.json())
			.then(json => {
				setRecords(records.filter(record => record._id !== id));
			});
		}
		catch (error) {
			console.log(error);
		}
	}	

	

	return (
       
	<section className="bg-white dark:bg-crem flex items-stretch bg-grey-lighter min-h-screen">
    <div className="container px-1 py-10 mx-auto divide-y divide-gray-200 dark:divide-gray-700">
        <p className="w-[1500px] mx-auto text-center mt-2 text-3xl font-bold italic text-rose-600">
            Stocul bine gestionat este temelia succesului in retail, transformand haosul in profit💰
        </p>
        <br />
		<br/>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1 lg:gap-4">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-3 gap-4">
                    {records.map((record) => (
                        <div key={record._id} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-mint dark:hover:bg-purple">
                            <img className="w-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src={record.link_imagine ? record.link_imagine : "default-image-url"} alt="Product Image" />
                            <div className="p-10">
                                <h5 className="text-center text-xl font-bold italic text-gray-900 dark:text-white">{record.denumire}</h5>
                                <div className="flex items-center justify-center my-3">
                                    <span className="bg-blue-100 text-rose-800 text-sm font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{record.categorie}</span>
                                </div>
                                <div className="flex items-center justify-center my-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-tag-fill text-pink-500 mr-2" viewBox="0 0 16 16">
                                        <path d="M2 1a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7.5 7.5a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7.5-7.5A1 1 0 0 1 2 5.586V1zm2.5 2.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                    </svg>
                                    <span className="text-center font-bold text-white dark:text-white"> {record.pret}</span>
                                </div>
                                <strong>Date de expirare:</strong>
                                {record.date_expirare.split(',').map((date, idx) => (	
                                    <p key={idx} className="text-sm">{date.trim()}</p>
                                ))}
                                <div className="flex justify-center items-center">
                                <button type="button" onClick={() => deleteRecord(record._id)} className="text-red-200 border border-gray-300 p-2 rounded-lg m-2 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                                    <HiOutlineTrash size={24}/>
                                </button>
								<Link href={`/pageEdit/${record._id}`} className="border border-gray-300 p-2 rounded-lg m-2 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-center">
                                    <HiPencilAlt size={24}/>
                                </Link>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
</section>


	)
}