import { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import { FormikHelpers } from "formik";
import "./styles.css";
import { api, api_url } from "../../utils/config";
import { formataData } from "../../utils/utils";
import { Formulario } from "../../components/Formulario";
import { Tabela } from "../../components/Tabela";

export function Homepage() {
  const [dataBusca, setDataBusca] = useState<DataTypes[]>([]);
  const [data, setData] = useState<DataTypes[]>([]);

  useEffect(() => {
    api.get(api_url)
      .then((response) => {
        let lista_buscada = [...response.data];
        let lista_final = lista_buscada.map((item) => {
          return {
            dias: formataData(item.Date),
            casos: String(item.Cases),
          };
        });
        setData(lista_final);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  async function onSubmit(values: FormTypes, helpers: FormikHelpers<FormTypes>) {
    let lista_periodo = data.slice(0, parseInt(values.termo));
    setDataBusca(lista_periodo);
  }

  return (
    <Container>
      <Row>
        <Formulario onSubmit={onSubmit} />
        <Tabela dataBusca={dataBusca} />
      </Row>
    </Container>
  );
}
