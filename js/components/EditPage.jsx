
import { useEffect, useState } from "react"

export default function EditPage({productId}) {
    const [expirationDateList, setExpirationDateList] = useState([{ expirationDate: "" }]);
    const [product, setProduct] = useState(null);


    useEffect(() => {
        async function fetchProduct() {
            if (!productId) return;
            const response = await fetch(`/api/records?id=${productId}`);
            const data = await response.json();
            setProduct(data.data); 
        }

        fetchProduct();
    }, [productId]);
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setProduct(prev => ({ ...prev, [id]: value }));
    };


    const updateRecord = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`/api/records`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product)
            });
            const data = await response.json();
            if (response.ok) {
                alert('Produsul a fost actualizat cu succes!');
				window.location.href = "/mainPageContainer";
            } else {
                throw new Error(data.message || "Eroare la actualizarea produsului.");
            }
        } catch (error) {
            console.error('A apărut o eroare:', error);
            alert(error.message);
        }
    };


    if (!product) {
        return <div>Loading...</div>; 
    }
    return (


		<section className="bg-white dark:bg-crem flex items-stretch bg-grey-lighter min-h-screen" style={{
            backgroundImage: "url('SIMPRE-Cloud-Computing/public/img1.jpeg')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}>
			<div className=" container px-8 py-10 mx-auto">
				<p className="w-[1500px] mx-auto text-center font-bold italic mt-2 text-xl text-rose-600">
					ACTUALIZARE PRODUS EXISTENT </p>
				<br />
				<div className="w-full">
					<form className>
						<div className="mb-6">
							<label htmlFor="name" className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">Denumire produs</label>
							<input type="text" id="denumire"  value={product.denumire} onChange={handleChange}
								className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
							   block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Chio Chips" required />
						</div>
						<div className="mb-6">
							<label htmlFor="category"
								className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">Categorie produs</label>
							<input type="text" id="categorie" value={product.categorie} onChange={handleChange}
								className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
								block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required />
						</div>
						<div className="form-field">
							<div className="mb-6">
								<label htmlFor="expDate" class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">Data expirare & cantitatea de produse</label>
								{expirationDateList.map((singleDate, index) => (
									<div key={index} className="dates">
										<div className="second-division">
											{expirationDateList.length > 1 && (
												<button
													type="button"
													onClick={() => handleDateRemove(index)}
													className="remove-btn"
												>
													<span>Remove</span>
												</button>
											)}
											
										</div>
										<div className="first-division">
											<input
												name="expirationDate"
												type="text"  
												id="date_expirare"
												class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
												block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												value={product.date_expirare} 
												onChange={handleChange}
												required
											/>
										</div>
									</div>
								))}
							</div>

							<div className="3-division">
											{
												<div class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" id="allDates">
												<h2>Datele de expirare: </h2>
				
												{expirationDateList &&
													expirationDateList.map((singleDate, index) => (
														<div key={index}>
															{singleDate.expirationDate}
														</div>
													))}
											</div>
											}
											
										</div>
						</div>

						<br/>
						<div className="mb-6">
							<label htmlFor="price"
								className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">Pret produs</label>
							<input id="pret" value={product.pret} onChange={handleChange}
								className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
								block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required />
						</div>
						<div className="mb-6">
							<label htmlFor="image"
								className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">Link imagine produs</label>
							<input type="text" id="link_imagine" value={product.link_imagine} onChange={handleChange}
								className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
								block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required />
						</div>
						<button type="submit"
							onClick={updateRecord}
							className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 
							focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 
							dark:focus:ring-red-900">Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}