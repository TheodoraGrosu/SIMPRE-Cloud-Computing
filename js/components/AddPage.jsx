// js/components/InsertPage.jsx
import { useEffect, useState } from "react"

export default function InsertPage() {
	const [expirationDateList, setExpirationDateList] = useState([{ expirationDate: "" }]);

	const handleDateChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...expirationDateList];
		list[index][name] = value;
		setExpirationDateList(list);
	};

	const handleDateRemove = (index) => {
		const list = [...expirationDateList];
		list.splice(index, 1);
		setExpirationDateList(list);
	};


	const insertRecord = (event) => {
		event.preventDefault();
		const denumire = document.getElementById("name").value;
		if (denumire.trim() === "") {
			alert("Vă rugăm să completați câmpul 'Denumire produs'.");
			return;
		}
		const categorie = document.getElementById("category").value;
		if (categorie.trim() === "") {
			alert("Vă rugăm să completați câmpul 'Categorie produs'.");
			return;
		}
		var date_expirare = document.getElementById("expirationDate").value;
		if (date_expirare.trim() === "") {
			alert("Vă rugăm să completați câmpul 'Date expirare & cantitate produse'.");
			return;
		}
		const pret = document.getElementById("price").value;
		if (pret.trim() === "") {
			alert("Vă rugăm să completați câmpul 'Pret produs'.");
			return;
		}
		const link_imagine = document.getElementById("image").value;
		for (let i = 1; i < expirationDateList.length; i++) {
			date_expirare += "," + expirationDateList[i].expirationDate;
			console.log(expirationDateList[i].expirationDate)
		}
		const data = {denumire, categorie, date_expirare, pret, link_imagine };


		fetch("/api/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(() => {
		   
			window.location.href = "/mainPageContainer";
		});
	}



	return (


		<section className="bg-white dark:bg-crem flex items-stretch bg-grey-lighter min-h-screen">
			<div className=" container px-8 py-10 mx-auto" >
				<p className="w-[1500px] mx-auto text-center font-bold italic mt-2 text-xl text-rose-600">
					ADAUGA UN PRODUS NOU DIN DEPOZIT </p>
				<br />
				<div className="w-full">
					<form className>
						<div className="mb-6">
							<label htmlFor="name" className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">Denumire produs</label>
							<input type="text" id="name"
								className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
							   block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Chio Chips" required />
						</div>
						<div className="mb-6">
							<label htmlFor="category"
								className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">Categorie produs</label>
							<input type="text" id="category"
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
												id="expirationDate"
												class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
												block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												value={singleDate.expirationDate}
												onChange={(e) => handleDateChange(e, index)}
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
							<input id="price"
								className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
								block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required />
						</div>
						<div className="mb-6">
							<label htmlFor="image"
								className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">Link imagine produs</label>
							<input type="text" id="image"
								className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
								block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required />
						</div>
						<button type="submit"
							onClick={insertRecord}
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