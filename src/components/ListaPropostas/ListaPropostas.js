import "./ListaPropostas.css";
import { useEffect, useState } from "react";
import CardProposta from "../CardProposta";
import StoreContext from "../Store/Context";
import { useContext } from "react";
import { api } from "../../service/api";


const ListaPropostas = () => {
	const [propostas, setPropostas] = useState(null);
	const { token } = useContext(StoreContext);

	useEffect(() => {
		api.get("proposta/", {
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((response) => {
				setPropostas(response.data);
			})
			.catch((error) => {
				console.log(error.response.data.message);
			});
	});

	return (
		<div className="propostas">
			{propostas && propostas.map((p) => <CardProposta props={p} />)}
		</div>
	);
};

export default ListaPropostas;
