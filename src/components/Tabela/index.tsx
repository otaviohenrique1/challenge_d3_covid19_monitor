import { Col, Table } from "reactstrap";

interface TabelaProps {
  dataBusca: DataTypes[];
}

export function Tabela(props: TabelaProps) {
  return (
    <Col md={12}>
      <Table striped>
        <thead>
          <tr>
            <th>Dia</th>
            <th>Data</th>
            <th>Numero Casos</th>
          </tr>
        </thead>
        <tbody>
          {(props.dataBusca.length === 0) ? (
            <ItemListaVazia />
          ) : (
            props.dataBusca.map((item, index) => {
              return (
                <ItemLista key={index}
                  index={(index + 1)}
                  dias={item.dias}
                  casos={item.casos}
                />
              );
            })
          )}
        </tbody>
      </Table>
    </Col>
  );
}

interface ItemListaProps extends DataTypes {
  index: number;
}

export function ItemLista(props: ItemListaProps) {
  return (
    <tr>
      <td>{(props.index + 1)}</td>
      <td>{props.dias}</td>
      <td>{props.casos}</td>
    </tr>
  );
}

export function ItemListaVazia() {
  return (
    <tr>
      <td colSpan={3} className="text-center">
        <h1>Lista vazia</h1>
      </td>
    </tr>
  );
}
