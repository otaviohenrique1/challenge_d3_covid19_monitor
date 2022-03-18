import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { Alert, Button, ButtonGroup, Col, Row } from "reactstrap";
import { valoresIniciais, validacaoSchema } from "../../utils/constantes";

interface FormularioProps {
  onSubmit: (values: FormTypes, helpers: FormikHelpers<FormTypes>) => Promise<void>;
}

export function Formulario(props: FormularioProps) {
  return (
    <Col md={12} className="mt-5 mb-5">
      <Formik
        initialValues={valoresIniciais}
        onSubmit={props.onSubmit}
        validationSchema={validacaoSchema}
      >
        {({ touched, errors, values }) => (
          <Form>
            <Row>
              <Col md={12} className="d-flex flex-row">
                <Field
                  className="form-control campo-busca"
                  id="termo"
                  name="termo"
                  type="number"
                  placeholder="Busca"
                  value={values.termo}
                />
                <ButtonGroup>
                  <Button className="botao-busca" type="submit" color="primary">Buscar</Button>
                  <Button type="reset" color="danger">Limpar</Button>
                </ButtonGroup>
              </Col>
              <Col md={12} className="d-flex flex-row">
                <ErrorMessage name="termo">
                  {(msg) => <Alert color="danger" className="w-100">{msg}</Alert>}
                </ErrorMessage>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Col>
  );
}